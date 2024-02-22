import React, { useState, useEffect, createContext, useContext } from 'react';
import { core, app, batchPlay, storage } from '../App.js';
import useAppContext from '../hook/useAppContext.jsx';
import limitCharsPerLine from '../hook/charLimiter.jsx';
import Hero1LifestyleProduct from '../HeroLayout/hero1LifestyleProduct.jsx';
import Hero1Lifestyle from '../HeroLayout/hero1lifestyle.jsx';
import Hero1Product from '../HeroLayout/hero1Product.jsx';
import Hero2Promotion from '../HeroLayout/hero2promotion.jsx';


export default function EmailBuilder() {

    var slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight, birdseedHeight, skinnyBannerHeight = "";

    const { accentColor, secondaryColor, tertiaryColor, cores, slValue, sslValue, selectedHeader, selectedFunding, fundingCopyValue, selectedSkinny, skinnyTitleValue, skinnyCopyValue, selectedHero, heroCopyValues, selectedPlugin, pluginCopyValues, selectedFpoSegment, selectedFpoValue, selectedBanner, bannerCopyValues, selectedFooter, selectedBirdseed, birdseedDate, selectedBirdseedCopy, birdseedCopyValues } = useAppContext();

    const { r: accentRed, g: accentGreen, b: accentBlue } = cores[accentColor] || {};
    const { r: secondaryRed, g: secondaryGreen, b: secondaryBlue } = cores[secondaryColor] || {};
    const { r: tertiaryRed, g: tertiaryGreen, b: tertiaryBlue } = cores[tertiaryColor] || {};
    const { badgeValue, headlineValue, OTValue, subHeadlineValue, inlinePromoValue, productNameValue, specsValue, priceValue, productSuperchargerValue, heroCtaValue, } = heroCopyValues || {};
    const { pluginCopyValue, leftPluginCopyValue, centerPluginCopyValue, rightPluginCopyValue } = pluginCopyValues || {};
    const { bannerHeadlineValue, bannerCopyValue, bannerCtaValue } = bannerCopyValues || {};
    const { selectedDay, selectedMonth, selectedYear, } = birdseedDate || {};


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

    function captalizeCopy(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
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

                    if (selectedHero === 'hero1-lifestyle-product') {
                        try {
                            await Hero1LifestyleProduct(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, inlinePromoValue, productNameValue, productSuperchargerValue, heroCtaValue);
                        } catch (error) {
                            console.error('Erro ao executar Hero 1 - Lifestyle + Product:', error);
                        }
                    } else { }

                    if (selectedHero === 'hero1-lifestyle') {
                        try {
                            await Hero1Lifestyle(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, heroCtaValue);
                        } catch (error) {
                            console.error('Erro ao executar Hero 1 - Only Lifestyle:', error);
                        }
                    } else { }


                    if (selectedHero === 'hero1-product') {
                        try {
                            await Hero1Product(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, OTValue, subHeadlineValue, productNameValue, heroCtaValue);
                        } catch (error) {
                            console.error('Erro ao executar Hero 1 - Only Product:', error);
                        }
                    } else { }

                    if (selectedHero === 'hero2-promotion') {
                        try {
                            await Hero2Promotion(accentRed, accentGreen, accentBlue, badgeValue, headlineValue, OTValue, subHeadlineValue, inlinePromoValue, productNameValue, priceValue, specsValue, heroCtaValue);
                        } catch (error) {
                            console.error('Erro ao executar Hero2 - Promotion:', error);
                        }
                    } else { }

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

    async function bannerBuild() {

        const formattedBannerHeadlineValue = await limitCharsPerLine(
            bannerHeadlineValue ? captalizeCopy(bannerHeadlineValue) : '',
            27
        );
        const formattedBannerCopyValue = limitCharsPerLine(bannerCopyValue || '', 60);

        try {
            if (selectedBanner === "") {
                console.warn('Banner n\u00e3o selecionado');
                bannerHeight = 0; // Define a altura do plugin como 0 quando nenhum plugin for selecionado
                return; // Retorna imediatamente se o plugin n\u00e3o estiver selecionado
            } else {
            }

            const fs = storage.localFileSystem;
            const pluginDir = await fs.getPluginFolder();

            let bannerFilePath;

            if (selectedBanner === 'left') {
                bannerFilePath = 'assets/banners/left.psd';
            } else if (selectedBanner === 'right') {
                bannerFilePath = 'assets/banners/right.psd';
            } else {
                bannerFilePath = null;
            }

            const fileEntry = await pluginDir.getEntry(bannerFilePath)

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);
                    const secondDocument = app.documents[1];
                    const bannerWidth = secondDocument.width;
                    bannerHeight = secondDocument.height;

                    const batchChangeBannerCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedBannerHeadlineValue } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedBannerCopyValue } },
                        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Banner Headline" },], },
                    ];

                    const resultBoundingBoxBannerHeadline = await batchPlay(batchChangeBannerCopy, {});
                    const boundingBoxBannerHeadline = resultBoundingBoxBannerHeadline[4].boundingBox;
                    const bannerCopyPadding = 16;
                    const newBannerCopyPosition = boundingBoxBannerHeadline.height._value + bannerCopyPadding;

                    const offsetBannerCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _name: "Banner Copy", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newBannerCopyPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
                        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Banner Copy" },], },
                    ];

                    const resultBannerCopyBoundingBox = await batchPlay(offsetBannerCopy, {});
                    const boundingBoxBannerCopy = resultBannerCopyBoundingBox[2].boundingBox;
                    const ctaPadding = bannerCopyPadding + 18;
                    const newCtaPosition = boundingBoxBannerCopy.height._value + boundingBoxBannerHeadline.height._value + ctaPadding;

                    const changeCtaCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: bannerCtaValue } },
                        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "CTA Copy" },], },
                    ]

                    const resultCtaCopyBoundingBox = await batchPlay(changeCtaCopy, {});
                    const boundingBoxCtaCopy = resultCtaCopyBoundingBox[2].boundingBox;
                    const newBorderCta = boundingBoxCtaCopy.width._value + 20

                    const resizeCtaBorder = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], makeVisible: false, layerID: [7772], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "transform", _target: [{ _ref: "path", _enum: "ordinal", _value: "targetEnum" }], freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" }, offset: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0 }, vertical: { _unit: "pixelsUnit", _value: 0 } }, width: { _unit: "pixelsUnit", _value: newBorderCta }, },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [7771], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [7772, 7770, 7771], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                    ]

                    await batchPlay(resizeCtaBorder, {});

                    const offsetCta = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9845], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _name: "CTA", }], makeVisible: false, layerID: [9845], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newCtaPosition, } }, _options: { dialogOptions: "dontDisplay" }, }
                    ];

                    await batchPlay(offsetCta, {});

                    const alignCopyVertical = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Copy" }], makeVisible: false, layerID: [7739], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Image" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelection" }, makeVisible: false, layerID: [7739, 7743], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _options: { dialogOptions: "dontDisplay" } }
                    ]

                    await batchPlay(alignCopyVertical, {});

                    const finalCrop = [
                        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 210 }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 210 }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                    ]

                    await batchPlay(finalCrop, {});

                    const batchBannerCopyAndPaste = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ]

                    await batchPlay(batchBannerCopyAndPaste, {});


                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;


                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (bannerWidth / 2) + 25);
                    let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyHeight + heroHeight + pluginHeight + fpoHeight;
                    const offsetY = (0 - (docHeight / 2) + (bannerHeight / 2) + offsetModules);

                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cBanner inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o Banner:', error);
                }
            };

            const options = {
                commandName: 'Inserir Banner',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo do Banner:', error);
        }
    };

    async function footerBuild() {
        const footerFilePath = `assets/footers/${selectedFooter}.psd`;
        const fs = storage.localFileSystem;
        try {
            if (selectedFooter === "") {
                console.warn('Footer n\u00e3o selecionado');
                footerHeight = 0;
                return;
            }

            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(footerFilePath);

            const targetFunction = async (executionContext) => {

                try {
                    await app.open(fileEntry);
                    const secondDocument = app.documents[1];
                    const footerWidth = secondDocument.width;
                    footerHeight = secondDocument.height;

                    const footerSelect = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ];
                    await batchPlay(footerSelect, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();


                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;

                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 45);
                    let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyHeight + heroHeight + pluginHeight + fpoHeight + bannerHeight;
                    const offsetY = (docHeight - docHeight) - (docHeight / 2) + (footerHeight / 2) + 10 + offsetModules;

                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cFooter inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o Footer:', error);
                }
            };

            const options = {
                commandName: 'Inserir Cabe\u00e7alho',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo do Footer:', error);
        }
    }

    async function birdseedBuild() {
        // if (selectedBirdseed !== "") {
        //     console.warn('Birdseed n\u00e3o selecionado');
        //     birdseedHeight = 0;
        //     return;
        // }
        const birdseedFilePath = `assets/birdseeds/${selectedBirdseed}.psd`;
        const fs = storage.localFileSystem;
        try {
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(birdseedFilePath);

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);

                    let batchBirdseedCopy = [];

                    if (selectedBirdseedCopy === true) {

                        const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${selectedDay}/${selectedMonth}/${selectedYear}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

                        const defaultTextURLOne = ` www.dell.com.br.\r\r`

                        const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

                        const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

                        const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses. \r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

                        // Concatena o birdseedCopyValue antes do texto padr\u00e3o
                        const BirdseedCopy = birdseedCopyValues + "\r\r" + defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


                        batchBirdseedCopy = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

                            {
                                _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                                to: {
                                    _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                                        { _obj: "textStyleRange", from: 0, to: birdseedCopyValues.length + defaultTextSliceOne.length + 2, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                        { _obj: "textStyleRange", from: birdseedCopyValues.length + defaultTextSliceOne.length + 2, to: birdseedCopyValues.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                        { _obj: "textStyleRange", from: birdseedCopyValues.length + defaultTextSliceOne.length + defaultTextURLOne.length + 2, to: birdseedCopyValues.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                        { _obj: "textStyleRange", from: birdseedCopyValues.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + 1, to: birdseedCopyValues.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                        { _obj: "textStyleRange", from: birdseedCopyValues.length + defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + 2, to: birdseedCopyValues.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                                    ]
                                },

                                _isCommand: true
                            },

                            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
                        ];

                    } else if (selectedBirdseedCopy === false) {

                        const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${selectedDay}/${selectedMonth}/${selectedYear}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

                        const defaultTextURLOne = ` www.dell.com.br.\r\r`

                        const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

                        const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

                        const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses.\r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

                        // Concatena o birdseedCopyValue antes do texto padr\u00e3o
                        const BirdseedCopy = defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


                        batchBirdseedCopy = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

                            {
                                _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                                to: {
                                    _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                                        { _obj: "textStyleRange", from: 0, to: defaultTextSliceOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                        { _obj: "textStyleRange", from: defaultTextSliceOne.length, to: defaultTextSliceOne.length + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                        { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                        { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                        { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                                    ]
                                },

                                _isCommand: true
                            },

                            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
                        ];

                    }

                    const resultBirdseedBoundingBox = await batchPlay(batchBirdseedCopy, {});
                    const birdseedBoundingBox = resultBirdseedBoundingBox[2].bounds;
                    const finalCropValue = birdseedBoundingBox.bottom._value;

                    const finalCrop = [
                        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 564 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 564 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                    ]
                    await batchPlay(finalCrop, {});

                    const secondDocument = app.documents[1];
                    const birdseedWidth = secondDocument.width;
                    birdseedHeight = secondDocument.height;

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


                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (birdseedWidth / 2) + 43);
                    let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight;
                    const offsetY = (docHeight - docHeight) - (docHeight / 2) + (birdseedHeight / 2) + offsetModules + 20;

                    pastedGroup.translate(offsetX, offsetY);

                    console.log('%cBirdseed inserido com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao inserir o Birdseed:', error);
                }
            };

            const options = {
                commandName: 'Inserir Birdseed',
                interactive: true,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            showAlert("executeAsModal was rejected (some other plugin is currently inside a modal scope)");
        }

    }

    async function fitToScreenPos() {

        const allModulesSizes = (slHeight + 30) + (fundingHeight + 20) + skinnyHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight + (birdseedHeight + 20) + 40;

        const targetFunction = async (executionContext) => {
            try {
                const batchCropDocument = [
                    { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: parseFloat(allModulesSizes) }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                ]

                await batchPlay(batchCropDocument, {});

                const batchZoomFit = [

                    { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { ialogOptions: "dontDisplay", }, },];

                // Ajuste para "wait" para aguardar a conclus\u00e3o do comando
                await batchPlay(batchZoomFit, {});

                console.log('%cFit final executado com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('N\u00e3o foi poss\u00edvel ajustar o zoom para "Fit on Screen Pos":', error);
            }
        }

        const options = {
            commandName: 'Ajuste de documento pos montagem',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    };


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
            var bannerHeight = await bannerBuild(slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight, pluginHeight, fpoHeight);
            var footerHeight = await footerBuild(slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight);
            var birdseedHeight = await birdseedBuild(selectedBirdseed, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight);
            await fitToScreenPos(slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight, birdseedHeight);

            console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Erro ao montar o layout:', error);
        }
    };

    return (
        <>
            <sp-button variant="warning" onClick={handleBuild} >Build Email</sp-button>
        </>
    )
}




