import React, { useState, useEffect, createContext, useContext } from 'react';
import useAppContext from '../hook/useAppContext.jsx';
import { core, app, batchPlay, storage } from '../App.js';

export default function EmailBuilder() {

    function limitCharsPerLine(text, limit) {
        const words = text.split(' ');
        let currentLine = '';
        let result = '';

        for (const word of words) {
            if ((currentLine + word).length <= limit) {
                currentLine += (currentLine === '' ? '' : ' ') + word;
            } else {
                result += (result === '' ? '' : '\r') + currentLine;
                currentLine = word;
            }
        }

        result += (result === '' ? '' : '\r') + currentLine;

        return result;
    }

    const { slValue, sslValue, slHeight, setSlHeight } = useAppContext();

    const { selectedHeader, headerHeight, setHeaderHeight } = useAppContext();

    const { selectedFunding, fundingCopyValue, fundingHeight, setFundingHeight } = useAppContext();

    const { selectedSkinny, skinnyTitleValue, skinnyCopyValue, skinnyHeight } = useAppContext();


    // Limpar as camadas do documento
    async function clearAllLayers() {
        const targetFunction = async () => {
            try {
                // Deleta todas as camadas
                const deleteAllLayers = [
                    { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [3155, 3156, 3157], _options: { dialogOptions: "dontDisplay" } }
                ];

                await batchPlay(deleteAllLayers, {});

                console.log('%cCamadas deletadas com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                // Ignora o erro relacionado à seleção de camadas
                if (error.message.includes('select')) {
                    // Não faz nada ou lida com o erro silenciosamente se preferir
                    // Por exemplo, console.log('Não foi possível selecionar as camadas para deletar.');
                } else {
                    console.error('Não foi possível deletar as Camadas', error);
                }
            }
        };

        const options = {
            commandName: 'Deletar todas as camadas',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    }

    // Ajusta o documento para entrada dos modulos
    async function fitToScreenPre() {
        const targetFunction = async (executionContext) => {
            try {

                // Define a cor do Background Padr\u00e3o
                const batchDefineBaseBackground = [
                    { _obj: "set", _target: [{ _ref: "color", _property: "backgroundColor" }], to: { _obj: "HSBColorClass", hue: { _unit: "angleUnit", _value: 0 }, saturation: 0, brightness: 100 }, source: "photoshopPicker", _options: { dialogOptions: "dontDisplay" } }
                ]

                await batchPlay(batchDefineBaseBackground, {});

                // Aumenta o tamanho do documento
                const batchCropDocument = [
                    { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 5000.223315669948 }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                ]

                await batchPlay(batchCropDocument, {});

                // Ajusta o zoom para Fit to Screen
                const batchZoomFit = [
                    { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { dialogOptions: "dontDisplay", }, },
                ];

                await batchPlay(batchZoomFit, {});

                console.log('%cFit inicial executado com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('N\u00e3o foi poss\u00edvel ajustar o zoom para "Fit on Screen":', error);
            }
        }

        const options = {
            commandName: 'Ajuste de documento pre montagem',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    };

    // Importa o SL e SSL
    async function slBuild() {

        const sslFilePath = `assets/sl-ssl/SL & SSL.psd`;

        try {
            const fs = storage.localFileSystem;
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(sslFilePath);


            const targetFunction = async () => {
                try {
                    await app.open(fileEntry);

                    const secondDocument = app.documents[1];
                    const slWidth = secondDocument.width;
                    const slHeight = secondDocument.height;
                    setSlHeight(slHeight);

                    // Fun\u00e7\u00e3o que troca o texto do SL e SSL
                    const changeSLCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "SL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `Subject Line:  ${slValue}`, } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "SSL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `Super Subject Line :  ${sslValue}`, } }
                    ];

                    await batchPlay(changeSLCopy, {});

                    // Fun\u00e7\u00e3o que copia e cola o m\u00f3dulo
                    const selectAndCopy = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ];

                    await batchPlay(selectAndCopy, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;
                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (slWidth / 2));
                    const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (slHeight / 2));
                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cSSL inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir SSL:', error);
                }
            };

            const options = {
                commandName: 'Inserir SSL',
                interactive: true,
            };



            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo de SSL:', error);
        }

        return slHeight

    };

    // Importa o header
    async function headerBuild() {

        if (selectedHeader === "") {
            console.warn('Header n&#xe3;o selecionado');
            const headerHeight = 0;
            return;
        }
        const headerFilePath = `assets/headers/${selectedHeader}.psd`;

        try {
            const fs = storage.localFileSystem;
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(headerFilePath);

            const targetFunction = async () => {
                try {
                    await app.open(fileEntry);
                    const secondDocument = app.documents[1];
                    const headerWidth = secondDocument.width;
                    const headerHeight = secondDocument.height;
                    setHeaderHeight(headerHeight);

                    // Seleciona o Header, copia e cola
                    const headerSelect = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ];

                    await batchPlay(headerSelect, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;
                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (headerWidth / 2) + 40);


                    const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (headerHeight / 2) + (slHeight + 30));

                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cHeader inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o Header:', error);
                }
            };

            const options = {
                commandName: 'Inserir Cabe\u00e7alho',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo do Header:', error);
        }

        return headerHeight
    };

    // Importa o funding
    async function fundingBuild() {

        const fundingFilePath = `assets/fundings/${selectedFunding}.psd`;
        try {
            const fs = storage.localFileSystem;
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(fundingFilePath);

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);
                    const secondDocument = app.documents[1];

                    const formattedfundingCopyValue = limitCharsPerLine(fundingCopyValue || '', 20);

                    let batchFundingCopy;

                    if (fundingCopyValue === '') {
                        batchFundingCopy = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Funding Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: "Visualize no navegador.", textStyleRange: [{ _obj: "textStyleRange", from: 0, to: formattedfundingCopyValue.length + 1 + "Visualize no navegador.".length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 2.4208344268798827 }, impliedFontSize: { _unit: "pointsUnit", _value: 2.4208344268798827 }, baselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, impliedBaselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } }] }, _isCommand: true },
                            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Funding Copy" },], },
                        ]
                    } else {
                        batchFundingCopy = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Funding Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedfundingCopyValue + "\r" + "Visualize no navegador.", textStyleRange: [{ _obj: "textStyleRange", from: 0, to: formattedfundingCopyValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 2.4208344268798827 }, impliedFontSize: { _unit: "pointsUnit", _value: 2.4208344268798827 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } }, { _obj: "textStyleRange", from: formattedfundingCopyValue.length + 1, to: fundingCopyValue.length + 1 + "Visualize no navegador.".length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 2.4208344268798827 }, impliedFontSize: { _unit: "pointsUnit", _value: 2.4208344268798827 }, baselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, impliedBaselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } }] }, _isCommand: true },
                            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Funding Copy" },], },
                        ]
                    };

                    const resultFundingTextBoundingBox = await batchPlay(batchFundingCopy, {});
                    const boundingBoxFundingText = resultFundingTextBoundingBox[2].bounds;
                    const finalCropValue = boundingBoxFundingText.bottom._value;

                    const finalCrop = [
                        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 200 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 200 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                    ]
                    await batchPlay(finalCrop, {});

                    const fundingHeight = secondDocument.height;
                    setFundingHeight(fundingHeight);

                    const selectAndCopy = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ]
                    await batchPlay(selectAndCopy, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();


                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;
                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 515);


                    let offsetY;

                    if ((selectedFunding === 'no-vf')) {
                        offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 26));
                    } else {
                        offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 30));
                    }
                    pastedGroup.translate(offsetX, offsetY);

                    if (selectedHeader !== null) {

                        const alignToHeader = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Funding" }], makeVisible: false, layerID: [449], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Header" }, { _ref: "layer", _name: "Funding" }], makeVisible: false, layerID: [448, 449], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSTops" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" } }
                        ]

                        await batchPlay(alignToHeader, {});
                    }


                    console.log('%cFunding inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o Funding:', error);
                }
            };

            const options = {
                commandName: 'Inserir Cabe\u00e7alho',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo do Funding:', error);
        }

        return fundingHeight
    };

    // Importa o skinny banner
    async function skinnyBuild() {

        if ( selectedSkinny !== null) {
            console.warn('Skinny não selecionado');
            skinnyBannerHeight = 0;
            return;
        }

        const skinnyFilePath = `assets/skinny-banner/skinny-banner.psd`;
        const fs = storage.localFileSystem;

        try {
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(skinnyFilePath);


            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);

                    const secondDocument = app.documents[1];
                    const skinnyBannerWidth = secondDocument.width;

                    const formattedTitleCopyValue = limitCharsPerLine(skinnyTitleValue || '', 60);
                    const formattedSkinnyCopyValue = limitCharsPerLine(skinnyCopyValue || '', 60);

                    const skinnyBannerCopy = formattedTitleCopyValue + "\r" + formattedSkinnyCopyValue

                    const changeSkinnyBannerCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [4], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                            to: {
                                _obj: "textLayer", textKey: skinnyBannerCopy, textStyleRange: [

                                    { _obj: "textStyleRange", from: 0, to: skinnyTitleValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "Roboto-Bold", fontName: "Roboto", fontStyleName: "Bold", size: { _unit: "pointsUnit", _value: 20.75 }, color: { _obj: "RGBColor", red: redAccent, green: greenAccent, blue: blueAccent } } },

                                    { _obj: "textStyleRange", from: skinnyTitleValue.length + 1, to: skinnyTitleValue.length + skinnyCopyValue.length + 1, textStyle: { _obj: "textStyle", fontPostScriptName: "Roboto-Regular", fontName: "Roboto", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 20.75 }, color: { _obj: "RGBColor", red: redAccent, green: greenAccent, blue: blueAccent } } },
                                ]
                            }, _isCommand: true
                        },
                        { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Banner Copy" }], }
                    ]
                        ;

                    await batchPlay(changeSkinnyBannerCopy, {});

                    const resultSkinnyBoundingBox = await batchPlay(changeSkinnyBannerCopy, {});
                    const boundingBoxSkinnyBanner = resultSkinnyBoundingBox[2].bounds;
                    const finalCropValue = boundingBoxSkinnyBanner.bottom._value + 20;

                    const finalCrop = [
                        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: redSecondary, grain: greenSecondary, blue: blueSecondary } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },

                        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },

                        { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                    ]

                    await batchPlay(finalCrop, {});

                    const skinnyHeight = secondDocument.height;
                    setSkinnyHeight(skinnyHeight);

                    const selectAndCopy = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ];

                    await batchPlay(selectAndCopy, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    if (selectedFunding === "no-vf") {
                        fundingHeight = headerHeight
                    } else {
                    }

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;
                    const offsetX = (0 - (docWidth / 2) + (skinnyBannerWidth / 2) + 25);
                    let offsetModules = ((slHeight + 30) + (fundingHeight + 20));
                    const offsetY = (0 - (docHeight / 2) + (skinnyBannerHeight / 2) + (offsetModules));
                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cSkinny Banner inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir Skinny Banner:', error);
                }
            };

            const options = {
                commandName: 'Inserir Skinny Banner',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo de Skinny Banner:', error);
        }
    };


    const handleBuild = async () => {

        try {
            await clearAllLayers();
            await fitToScreenPre();
            var slHeight = await slBuild();
            var headerHeight = await headerBuild(slHeight);
            var fundingHeight = await fundingBuild(slHeight, headerHeight);
            var skinnyHeight = await skinnyBuild(slHeight, headerHeight, fundingHeight)


            console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Erro ao montar o layout:', error);
        }
    };

    return (
        <>
            <sp-button variant="warning" onClick={handleBuild} >Aqui é o novo</sp-button>
        </>
    )


}




