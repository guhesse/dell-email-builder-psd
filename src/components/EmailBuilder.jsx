import React, { useState } from 'react';
import { core, app, batchPlay, storage } from '../App.js';
import useAppContext from '../hook/useAppContext.jsx';
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { slBuild, headerBuild, fundingBuild, skinnyBuild, heroBuild } from './Builder/Builds.jsx';

import { selectGroup, setFontStyle, setSolidFill, selectAllAndCopy, alignGroupX, alignGroupY, organizeAndSetColorLabel } from "../hook/hooksJSON.jsx";

export default function EmailBuilder() {

    var pluginHeight, fpoHeight, bannerHeight, footerHeight, birdseedHeight = "";

    const { accentColor, secondaryColor, tertiaryColor, cores, subjectValues, selectedHeader, selectedFunding, fundingCopyValues, selectedSkinny, skinnyValues, selectedHero, heroValues, selectedPlugin, pluginCopyValues, selectedFpoSegment, selectedFpoValue, selectedBanner, bannerCopyValues, selectedFooter, selectedBirdseed, birdseedValues, selectedBrand, colors, selectedModules, setSelectedModules } = useAppContext();

    const { r: accentRed, g: accentGreen, b: accentBlue } = cores[accentColor] || {};
    const { r: secondaryRed, g: secondaryGreen, b: secondaryBlue } = cores[secondaryColor] || {};
    const { r: tertiaryRed, g: tertiaryGreen, b: tertiaryBlue } = cores[tertiaryColor] || {};
    const { slValue, sslValue } = subjectValues || {};
    var { vfCopyValue } = fundingCopyValues || {};
    const { pluginCopyValue, leftPluginCopyValue, centerPluginCopyValue, rightPluginCopyValue } = pluginCopyValues || {};
    const { bannerHeadlineValue, bannerCopyValue, bannerCtaValue } = bannerCopyValues || {};


    // Fazer depois a função para deletar artboard caso exista uma 

    // { _obj: "make", _target: [{ _ref: "layer" }], using: { _obj: "layer", name: "Background" }, layerID: 6, _options: { dialogOptions: "dontDisplay" } },
    // { _obj: "make", _target: [{ _ref: "backgroundLayer" }], using: { _ref: "layer", _enum: "ordinal", _value: "targetEnum" }, _options: { dialogOptions: "dontDisplay" } },
    // { _obj: "select", _target: [{ _ref: "layer", _name: "Artboard 1" }], makeVisible: false, layerID: [3], _options: { dialogOptions: "dontDisplay" } },
    // { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [4, 3], _options: { dialogOptions: "dontDisplay" } }

    // Limpar as camadas do documento
    async function clearAllLayers() {
        const targetFunction = async (executionContext) => {
            try {
                const getLayerIndex = [
                    { _obj: 'get', _target: [{ _ref: 'layer', _index: 2 }], },
                ];

                await batchPlay(getLayerIndex, {});

                const deleteAllLayers = [
                    { _obj: 'selectAllLayers', _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }], _options: { dialogOptions: 'silent' } },
                    { _obj: 'delete', _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }], _options: { dialogOptions: 'silent' } },
                ];

                await batchPlay(deleteAllLayers, {});

                console.log('%cCamadas deletadas com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                if (error.message.includes('The object “Layer 1” is not currently available.')) {
                    console.log('%cNenhuma camada encontrada no índice 1. A função não será executada.', 'color: #FF5733;');
                } else {
                    console.error('Não foi possível deletar as Camadas', error);
                }
            }
        };

        const options = {
            commandName: 'Limpar camadas',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    }

    // Ajusta o documento para entrada dos modulos
    async function fitToScreenPre() {
        const targetFunction = async (executionContext) => {
            try {

                const setBackgroundColor = [
                    { _obj: "set", _target: [{ _ref: "color", _property: "backgroundColor" }], to: { _obj: "HSBColorClass", hue: { _unit: "angleUnit", _value: 0 }, saturation: 0, brightness: 100 }, source: "photoshopPicker", _options: { dialogOptions: "dontDisplay" } }
                ]
                await batchPlay(setBackgroundColor, {});

                const cropDocument = [
                    { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 5000.223315669948 }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                ]
                await batchPlay(cropDocument, {});

                const zoomFit = [
                    { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { dialogOptions: "dontDisplay", }, },
                ];
                await batchPlay(zoomFit, {});

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

    async function pluginBuild() {
        let pluginFilePath = "";

        if (selectedPlugin === 'supercharger') {
            pluginFilePath = 'assets/plugins/supercharger.psd';
        } else if (selectedPlugin === 'plugin') {
            pluginFilePath = 'assets/plugins/plugin.psd';
        } else {
            console.warn('Plugin n\u00e3o selecionado');
            pluginHeight = 0;
            return;
        }

        const fs = storage.localFileSystem;

        try {
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(pluginFilePath);

            const formattedPluginCopyValue = limitCharsPerLine(pluginCopyValue || '', 65, "upper");
            const formattedLeftCopyValue = limitCharsPerLine(leftPluginCopyValue || '', 13, "captitalized");
            const formattedCenterCopyValue = limitCharsPerLine(centerPluginCopyValue || '', 13, "captitalized");
            const formattedRightCopyValue = limitCharsPerLine(rightPluginCopyValue || '', 13, "captitalized");

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);

                    const secondDocument = app.documents[1];
                    const pluginWidth = secondDocument.width;
                    pluginHeight = secondDocument.height;

                    if (selectedPlugin === 'plugin' && selectedBrand === 'dell') {

                        const setPlugin = [
                            setSolidFill({
                                Name: "Plugin Background",
                                RedColor: secondaryRed,
                                GreenColor: secondaryGreen,
                                BlueColor: secondaryBlue
                            }),

                            setFontStyle({
                                Name: "Plugin Copy",
                                Value: formattedPluginCopyValue,
                                FontName: "Arial",
                                FontWeight: "Regular",
                                Size: 12,
                                RedColor: accentRed,
                                GreenColor: accentGreen,
                                BlueColor: accentBlue,
                                Tracking: 20,
                                FontCaps: true,
                                AutoLeading: true,
                            }),
                        ]
                        await batchPlay(setPlugin, {});

                        const alignPluginCopy = [
                            selectGroup({
                                FirstName: "Plugin Copy",
                                LastName: "Plugin Background"
                            }),
                            alignGroupX(),
                            alignGroupY(),
                        ];
                        await batchPlay(alignPluginCopy, {});


                        const selectAndCopy = await selectAllAndCopy()
                        await batchPlay(selectAndCopy, {});

                    } else if (selectedPlugin === 'supercharger' && selectedBrand === 'dell') {

                        const setPlugin = [

                            setSolidFill({
                                Name: "Plugin Background",
                                RedColor: secondaryRed,
                                GreenColor: secondaryGreen,
                                BlueColor: secondaryBlue
                            }),

                            setFontStyle({
                                Name: "1",
                                Value: formattedLeftCopyValue,
                                FontName: "Roboto",
                                FontWeight: "Light",
                                Size: 24,
                                RedColor: accentRed,
                                GreenColor: accentGreen,
                                BlueColor: accentBlue,
                                FontCaps: false,
                                AutoLeading: false,
                                Leading: 24
                            }),

                            setFontStyle({
                                Name: "2",
                                Value: formattedCenterCopyValue,
                                FontName: "Roboto",
                                FontWeight: "Light",
                                Size: 24,
                                RedColor: accentRed,
                                GreenColor: accentGreen,
                                BlueColor: accentBlue,
                                FontCaps: false,
                                AutoLeading: false,
                                Leading: 24
                            }),

                            setFontStyle({
                                Name: "3",
                                Value: formattedRightCopyValue,
                                FontName: "Roboto",
                                FontWeight: "Light",
                                Size: 24,
                                RedColor: accentRed,
                                GreenColor: accentGreen,
                                BlueColor: accentBlue,
                                FontCaps: false,
                                AutoLeading: false,
                                Leading: 24
                            }),
                        ]
                        await batchPlay(setPlugin, {});

                        const alignSuperchargerCopy = [
                            selectGroup({
                                FirstName: "3",
                                LastName: "Plugin Background"
                            }),
                            alignGroupY(),

                            selectGroup({
                                FirstName: "2",
                                LastName: "Plugin Background"
                            }),
                            alignGroupY(),

                            selectGroup({
                                FirstName: "1",
                                LastName: "Plugin Background"
                            }),
                            alignGroupY(),
                        ]
                        await batchPlay(alignSuperchargerCopy, {});

                        const selectAndCopy = await selectAllAndCopy()
                        await batchPlay(selectAndCopy, {});

                    } else if (selectedPlugin === 'plugin' && selectedBrand === 'alienware') {

                        const setPlugin = [

                            setSolidFill({
                                Name: "Plugin Background",
                                RedColor: accentRed,
                                GreenColor: accentGreen,
                                BlueColor: accentBlue
                            }),

                            setFontStyle({
                                Name: "Plugin Copy",
                                Value: formattedPluginCopyValue,
                                FontName: "Open Sans",
                                FontScript: "OpenSans-Bold",
                                FontWeight: "Bold",
                                Size: 12,
                                RedColor: tertiaryRed,
                                GreenColor: tertiaryGreen,
                                BlueColor: tertiaryBlue,
                                Tracking: 40,
                                FontCaps: true,
                                AutoLeading: true,
                            }),
                        ]
                        await batchPlay(setPlugin, {});

                        const alignPluginCopy = [
                            selectGroup({
                                FirstName: "Plugin Copy",
                                LastName: "Plugin Background"
                            }),
                            alignGroupX(),
                            alignGroupY(),
                        ];
                        await batchPlay(alignPluginCopy, {});

                        const selectAndCopy = await selectAllAndCopy()
                        await batchPlay(selectAndCopy, {});

                    } else if (selectedPlugin === 'supercharger' && selectedBrand === 'alienware') {

                        const setPlugin = [
                            setSolidFill({
                                Name: "Plugin Background",
                                RedColor: accentRed,
                                GreenColor: accentGreen,
                                BlueColor: accentBlue
                            }),

                            setFontStyle({
                                Name: "1",
                                Value: formattedLeftCopyValue,
                                FontName: "Roboto",
                                FontWeight: "Light",
                                Size: 24,
                                RedColor: tertiaryRed,
                                GreenColor: tertiaryGreen,
                                BlueColor: tertiaryBlue,
                                FontCaps: false,
                                AutoLeading: false,
                                Leading: 24
                            }),

                            setFontStyle({
                                Name: "2",
                                Value: formattedCenterCopyValue,
                                FontName: "Roboto",
                                FontWeight: "Light",
                                Size: 24,
                                RedColor: tertiaryRed,
                                GreenColor: tertiaryGreen,
                                BlueColor: tertiaryBlue,
                                FontCaps: false,
                                AutoLeading: false,
                                Leading: 24
                            }),

                            setFontStyle({
                                Name: "3",
                                Value: formattedRightCopyValue,
                                FontName: "Roboto",
                                FontWeight: "Light",
                                Size: 24,
                                RedColor: tertiaryRed,
                                GreenColor: tertiaryGreen,
                                BlueColor: tertiaryBlue,
                                FontCaps: false,
                                AutoLeading: false,
                                Leading: 24
                            }),

                        ]
                        await batchPlay(setPlugin, {});

                        const alignSuperchargerCopy = [
                            selectGroup({
                                FirstName: "3",
                                LastName: "Plugin Background"
                            }),
                            alignGroupY(),

                            selectGroup({
                                FirstName: "2",
                                LastName: "Plugin Background"
                            }),
                            alignGroupY(),

                            selectGroup({
                                FirstName: "1",
                                LastName: "Plugin Background"
                            }),
                            alignGroupY(),
                        ]
                        await batchPlay(alignSuperchargerCopy, {});

                        const selectAndCopy = await selectAllAndCopy()
                        await batchPlay(selectAndCopy, {});
                    } else {
                        console.error('Plugin ou marca não selecionado(a)')
                        return;
                    }

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

        if (selectedFpoValue === null || selectedFpoValue === 0 || selectedFpoSegment === undefined) {
            console.warn('Fpo n\u00e3o selecionado');
            fpoHeight = 0;
            return;
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

                    // Copia e cola o modulo
                    const selectAndCopy = selectAllAndCopy()
                    await batchPlay(selectAndCopy, {});

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

        const formattedBannerHeadlineValue = limitCharsPerLine(bannerHeadlineValue || '', 27, "capitalized");
        const formattedBannerCopyValue = limitCharsPerLine(bannerCopyValue || '', 60, "capitalized");

        try {
            if (selectedBanner === "" || selectedBanner === null) {
                console.warn('Banner n\u00e3o selecionado');
                bannerHeight = 0;
                return;
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

                    // Copia e cola o modulo
                    const selectAndCopy = selectAllAndCopy()
                    await batchPlay(selectAndCopy, {});

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
            if (selectedFooter === "" || selectedFooter === null) {
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

                    // Copia e cola o modulo
                    const selectAndCopy = selectAllAndCopy()
                    await batchPlay(selectAndCopy, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;

                    var offsetX;

                    if (selectedFooter === "experts") {
                        var offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 25);
                    } else {
                        var offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 45);
                    }
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
        if (selectedBirdseed === "" || selectedBirdseed === null) {
            console.warn('Birdseed n\u00e3o selecionado');
            birdseedHeight = 0;
            return;
        }
        const birdseedFilePath = `assets/birdseeds/${selectedBirdseed}.psd`;
        const fs = storage.localFileSystem;
        try {
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(birdseedFilePath);

            let copy = birdseedValues.copy
            let day = birdseedValues.day === null ? 1 : birdseedValues.day;
            let month = birdseedValues.month === null ? 1 : birdseedValues.month;
            let year = birdseedValues.year === null ? 2024 : birdseedValues.year;

            const formattedDay = day < 10 ? `0${day}` : day;
            const formattedMonth = month < 10 ? `0${month}` : month;

            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);

                    let batchBirdseedCopy = [];

                    if (copy !== "") {

                        const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${formattedDay}/${formattedMonth}/${year}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

                        const defaultTextURLOne = ` www.dell.com.br.\r\r`

                        const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

                        const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

                        const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses. \r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

                        // Concatena o birdseedCopyValue antes do texto padr\u00e3o
                        const BirdseedCopy = copy + "\r\r" + defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


                        batchBirdseedCopy = [
                            { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

                            {
                                _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                                to: {
                                    _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                                        { _obj: "textStyleRange", from: 0, to: copy.length + defaultTextSliceOne.length + 2, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                        { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + 2, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                        { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + defaultTextURLOne.length + 2, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                        { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + 1, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                        { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + 2, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                                    ]
                                },

                                _isCommand: true
                            },

                            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
                        ];

                    } else {

                        const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${formattedDay}/${formattedMonth}/${year}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

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

                    // Copia e cola o modulo
                    const selectAndCopy = selectAllAndCopy()
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
            // showAlert("executeAsModal was rejected (some other plugin is currently inside a modal scope)");
        }

    }

    async function fitToScreenPos() {

        const allModulesSizes = (slHeight.value + 30) + (fundingHeight.value + 20) + skinnyHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight + (birdseedHeight + 20) + 40;

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

    async function organizeDocument() {

        const targetFunction = async (executionContext) => {
            try {
                const sslOrganize = organizeAndSetColorLabel({
                    Name: "SL + SSL",
                    Index: 1,
                    Color: "gray",
                })
                await batchPlay(sslOrganize, {});

                const vfOrganize = organizeAndSetColorLabel({
                    Name: "Funding",
                    Index: 1,
                    Color: "indigo",
                })
                await batchPlay(vfOrganize, {});

                if (selectedHeader !== "" && selectedHeader !== null) {
                    const headerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Header" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Header", color: { _enum: "color", _value: "blue" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(headerOrganize, {});
                }

                if (selectedSkinny !== null && selectedSkinny !== "") {
                    const skinnyOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Skinny Banner" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Skinny Banner", color: { _enum: "color", _value: "magenta" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(skinnyOrganize, {});
                }

                if (selectedHero === "hero1-lifestyle-product") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 1 / Lifestyle & Product" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "hero1-lifestyle") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 1 / Lifestyle" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "hero1-product") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 1 / Product" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "aw-hero1-lifestyle-product") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / AW Layout 1 / Lifestyle & Product" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "hero2-promotion") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 2 / Promotion" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                }

                if (selectedPlugin === "plugin") {
                    const pluginOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Plugin", color: { _enum: "color", _value: "violet" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(pluginOrganize, {});
                } else if (selectedPlugin === "supercharger") {
                    const superchargerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Supercharger" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Supercharger", color: { _enum: "color", _value: "violet" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(superchargerOrganize, {});
                }

                if (selectedFpoValue !== 0 && selectedFpoValue !== null) {
                    const fpoOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "FPOs" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "FPO", color: { _enum: "color", _value: "red" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(fpoOrganize, {});
                }

                if (selectedBanner !== "" && selectedBanner !== null) {
                    const bannerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Banner", color: { _enum: "color", _value: "orange" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(bannerOrganize, {});
                }


                if (selectedFooter !== "" && selectedFooter !== null) {
                    const footerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Footer" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Footer", color: { _enum: "color", _value: "yellowColor" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(footerOrganize, {});
                }

                if (selectedBirdseed !== "" && selectedBirdseed !== null) {
                    const birdseedOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Birdseed", color: { _enum: "color", _value: "green" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(birdseedOrganize, {});
                }

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

    const [modulesHeight, setModulesHeight] = useState({
        sl: "",
        header: "",
        vf: "",
        skinny: "",
        hero: "",
    })

    const buildInfo = {
        selectedModules,
        slValue: slValue,
        sslValue: sslValue,
        modulesHeight: modulesHeight,
        vfCopyValue: vfCopyValue,
        skinnyValues: skinnyValues,
        heroValues: heroValues,
        colors: colors,
    };


    const handleBuild = async () => {
        try {
            await clearAllLayers();
            await fitToScreenPre();
            await slBuild(buildInfo);
            await headerBuild(buildInfo)
            await fundingBuild(buildInfo);
            await skinnyBuild(buildInfo);
            await heroBuild(buildInfo);
            // var pluginHeight = await pluginBuild(slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight)
            // var fpoHeight = await fpoBuild(slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight, pluginHeight)
            // var bannerHeight = await bannerBuild(slHeight, headerHeight, fundingHeight, skinnyHeight, heroHeight, pluginHeight, fpoHeight);
            // var footerHeight = await footerBuild(slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight);
            // var birdseedHeight = await birdseedBuild(selectedBirdseed, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight);
            // await fitToScreenPos(slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight, birdseedHeight);
            // await organizeDocument();

            console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Erro ao montar o layout:', error);
        }
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <sp-button variant="accent" width="130" onClick={handleBuild}>
                    Build Email
                </sp-button>
            </div >
        </>
    )
}




