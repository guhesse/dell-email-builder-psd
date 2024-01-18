import React, { useState, useEffect, createContext, useContext } from 'react';
import useAppContext from '../hook/useAppContext.jsx';
import { core, app, batchPlay, storage } from '../App.js';
import limitCharsPerLine from '../hook/charLimiter.jsx';
import Hero1Lifestyle from '../HeroLayout/hero1lifestyle.jsx';
import Hero2Promotion from '../HeroLayout/hero2promotion.jsx';

export default function EmailBuilder() {

    var slHeight = "";
    var headerHeight = "";
    var fundingHeight = "";
    var skinnyHeight = ""
    var heroHeight = "";
    var pluginHeight = "";
    var fpoHeight = "";
    var bannerHeight = "";
    var footerHeight = "";
    var birdseedHeight = "";
    var skinnyBannerHeight = "";

    const { accentColor, secondaryColor, tertiaryColor, cores, slValue, sslValue, selectedHeader, selectedFunding, fundingCopyValue, selectedSkinny, skinnyTitleValue, skinnyCopyValue, selectedHero, heroCopyValues, selectedPlugin, pluginCopyValues, selectedFpoSegment, selectedFpoValue } = useAppContext();

    const { r: accentRed, g: accentGreen, b: accentBlue } = cores[accentColor] || {};
    const { r: secondaryRed, g: secondaryGreen, b: secondaryBlue } = cores[secondaryColor] || {};
    const { r: tertiaryRed, g: tertiaryGreen, b: tertiaryBlue } = cores[tertiaryColor] || {};
    const { badgeValue, headlineValue, subHeadlineValue, inlinePromoValue, inlinePromo2Value, productNameValue, heroCtaValue, } = heroCopyValues || {};
    const { pluginCopyValue, leftPluginCopyValue, centerPluginCopyValue, rightPluginCopyValue } = pluginCopyValues || {};




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
                    slHeight = secondDocument.height;

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
    };

    // Importa o header
    async function headerBuild() {

        if (selectedHeader === "") {
            console.warn('Header n&#xe3;o selecionado');
            headerHeight = 0;
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
                    headerHeight = secondDocument.height;

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

                    fundingHeight = secondDocument.height;

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

    };

    // Importa o skinny banner
    async function skinnyBuild() {

        if (selectedSkinny === "") {
            console.warn('Skinny não selecionado');
            skinnyHeight = 0;
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
                    const skinnyWidth = secondDocument.width;

                    const formattedTitleCopyValue = limitCharsPerLine(skinnyTitleValue || '', 60);
                    const formattedSkinnyCopyValue = limitCharsPerLine(skinnyCopyValue || '', 60);

                    const skinnyBannerCopy = formattedTitleCopyValue + "\r" + formattedSkinnyCopyValue

                    const changeSkinnyBannerCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [4], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                            to: {
                                _obj: "textLayer", textKey: skinnyBannerCopy, textStyleRange: [

                                    { _obj: "textStyleRange", from: 0, to: skinnyTitleValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "Roboto-Bold", fontName: "Roboto", fontStyleName: "Bold", size: { _unit: "pointsUnit", _value: 20.75 }, color: { _obj: "RGBColor", red: accentRed, green: accentGreen, blue: accentBlue } } },

                                    { _obj: "textStyleRange", from: skinnyTitleValue.length + 1, to: skinnyTitleValue.length + skinnyCopyValue.length + 1, textStyle: { _obj: "textStyle", fontPostScriptName: "Roboto-Regular", fontName: "Roboto", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 20.75 }, color: { _obj: "RGBColor", red: accentRed, green: accentGreen, blue: accentBlue } } },
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
                        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: secondaryRed, grain: secondaryGreen, blue: secondaryBlue } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },

                        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },

                        { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                    ]

                    await batchPlay(finalCrop, {});

                    skinnyHeight = secondDocument.height;

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
                    } else { }

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;
                    const offsetX = (0 - (docWidth / 2) + (skinnyWidth / 2) + 25);
                    let offsetModules = ((slHeight + 30) + (fundingHeight + 20));
                    const offsetY = (0 - (docHeight / 2) + (skinnyHeight / 2) + (offsetModules));
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

    // Importa o Hero
    async function heroBuild() {
        if (selectedHero === "") {
            console.warn('Hero não selecionado');
            heroHeight = 0;
            return;
        }

        const heroFilePath = `assets/heros/${selectedHero}.psd`;
        const fs = storage.localFileSystem;
        try {
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(heroFilePath);

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);
                    const secondDocument = app.documents[1];

                    if (selectedHero === 'hero1-lifestyle') {
                        try {
                            await Hero1Lifestyle(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, inlinePromoValue, productNameValue, heroCtaValue);
                        } catch (error) {
                            console.error('Erro ao executar Hero1Lifestyle:', error);
                        }
                    }

                    if (selectedHero === 'hero2-promotion') {
                        try {
                            await Hero2Promotion();
                        } catch (error) {
                            console.error('Erro ao executar Hero2Promotion:', error);
                        }
                    }

                    const heroWidth = secondDocument.width;
                    heroHeight = secondDocument.height;

                    const copyAllHero = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ]

                    await batchPlay(copyAllHero, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;

                    if (selectedFunding === "no-vf") {
                        fundingHeight = headerHeight
                    } else {
                    }

                    const offsetX = (0 - (docWidth / 2) + (heroWidth / 2) + 25);
                    let offsetModules = ((slHeight + 30) + (fundingHeight + 20) + (skinnyHeight));
                    const offsetY = (0 - (docHeight / 2) + (heroHeight / 2) + (offsetModules));
                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cHero inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o Hero:', error);
                }
            };

            const options = {
                commandName: 'Inserir Hero',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo do Hero:', error);
        }
    };

    async function pluginBuild() {
        let pluginFilePath = "";

        if (selectedPlugin === 'supercharger') {
            pluginFilePath = 'assets/plugins/supercharger.psd';
        } else if (selectedPlugin === 'plugin') {
            pluginFilePath = 'assets/plugins/plugin.psd';
        } else {
            console.warn('Plugin n\u00e3o selecionado');
            pluginHeight = 0; // Define a altura do plugin como 0 quando nenhum plugin for selecionado
            return; // Retorna imediatamente se o plugin n\u00e3o estiver selecionado
        }

        const fs = storage.localFileSystem;

        try {
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(pluginFilePath);

            const formattedPluginCopyValue = limitCharsPerLine(pluginCopyValue || '', 60);
            const formattedleftCopyValue = limitCharsPerLine(leftPluginCopyValue || '', 13);
            const formattedCenterCopyValue = limitCharsPerLine(centerPluginCopyValue || '', 13);
            const formattedRightCopyValue = limitCharsPerLine(rightPluginCopyValue || '', 13);

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);

                    const secondDocument = app.documents[1];
                    const pluginWidth = secondDocument.width;
                    pluginHeight = secondDocument.height;

                    let batchPluginChange = []

                    if (selectedPlugin === 'supercharger') {

                        const batchChangeColor = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [3402], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [3335, 3398, 3402], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textStyle", textOverrideFeatureName: 808466226, typeStyleOperationType: 3, color: { _obj: "RGBColor", red: accentRed, grain: accentGreen, blue: accentBlue } }, _options: { dialogOptions: "dontDisplay" } },

                            { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], makeVisible: false, layerID: [3332], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "contentLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: secondaryRed, grain: secondaryGreen, blue: secondaryBlue } }, _options: { dialogOptions: "dontDisplay" } },
                        ];

                        await batchPlay(batchChangeColor, {});

                        const batchPluginChange = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedleftCopyValue } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "2" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedCenterCopyValue } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedRightCopyValue } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [3402], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [3334, 3335, 3398, 3402], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                        ];

                        await batchPlay(batchPluginChange, {});

                    } else if (selectedPlugin === 'plugin') {

                        const batchChangeColor = [
                            { _obj: "select", _target: [{ _ref: "textLayer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3335], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" },], to: { _obj: "textStyle", color: { _obj: "RGBColor", red: accentRed, grain: accentGreen, blue: accentBlue }, }, _options: { dialogOptions: "dontDisplay" }, },

                            { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], makeVisible: false, layerID: [3332], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "contentLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: secondaryRed, grain: secondaryGreen, blue: secondaryBlue } }, _options: { dialogOptions: "dontDisplay" } },
                        ];

                        await batchPlay(batchChangeColor, {});

                        const batchPluginChange = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3325], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedPluginCopyValue } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3325], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }, { _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3320, 3325], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersH" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" }, },
                            { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } },
                        ];

                        await batchPlay(batchPluginChange, {});

                    } else {
                        console.error('Plugin n\u00e3o selecionado')
                        return;
                    }

                    await batchPlay(batchPluginChange, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();
                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;


                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (pluginWidth / 2) + 25);
                    let offsetModules = (slHeight + 30) + (fundingHeight + 20) + heroHeight + skinnyHeight;
                    const offsetY = (0 - (docHeight / 2) + (pluginHeight / 2) + (offsetModules));
                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cPlugin inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir plugin:', error);
                }
            };

            const options = {
                commandName: 'Inserir Plugin',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo de Plugin:', error);
        }
    }

    async function fpoBuild() {

        if (selectedFpoValue === null) {
            console.warn('Fpo n\u00e3o selecionado');
            fpoHeight = 0; // Define a altura do plugin como 0 quando nenhum plugin for selecionado
            return; // Retorna imediatamente se o plugin n\u00e3o estiver selecionado
        } else {
        }

        try {
            const fs = storage.localFileSystem;
            const pluginDir = await fs.getPluginFolder();
            let fpoFilePath;
            for (let i = 1; i <= selectedFpoValue; i++) {
                fpoFilePath = `assets/fpo/${selectedFpoSegment}/${i}.psd`;
            }
            const fileEntry = await pluginDir.getEntry(fpoFilePath)
            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);
                    const secondDocument = app.documents[1];
                    const fpoWidth = secondDocument.width;
                    fpoHeight = secondDocument.height;

                    const batchFPO = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ];

                    await batchPlay(batchFPO, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;

                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (fpoWidth / 2) + 25);
                    let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyHeight + heroHeight + pluginHeight;
                    const offsetY = (0 - (docHeight / 2) + (fpoHeight / 2) + (offsetModules));

                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cFPO inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o FPO:', error);
                }
            };

            const options = {
                commandName: 'Inserir FPO',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo do FPO:', error);
        }
    }

    const handleBuild = async () => {
        try {
            await clearAllLayers();
            await fitToScreenPre();
            var slHeight = await slBuild();
            var headerHeight = await headerBuild(slHeight);
            var fundingHeight = await fundingBuild(slHeight, headerHeight);
            var skinnyHeight = await skinnyBuild(slHeight, headerHeight, fundingHeight)
            var heroHeight = await heroBuild(slHeight, headerHeight, fundingHeight, skinnyHeight)
            var pluginHeight = await pluginBuild(slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight)
            var fpoHeight = await fpoBuild(slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight, pluginHeight)

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




