import { core, app, batchPlay, storage } from '../../App.js';
import { alignGroupY, getBounds, makeSmartObj, makeSolid, selectAllAndCopy, selectGroup, selectLayer, setCTABorder, setFinalCrop, setFontStyle, setOffset, } from '../../hook/hooksJSON.jsx';
import limitCharsPerLine from "../../hook/charLimiter.jsx";
import { getBoundsAndPosition } from '../../hook/getBoundsAndPosition.jsx';


export async function bannerBuild(buildInfo) {

    var { selectedModules, modulesHeight, copyValues, colors } = buildInfo;

    var { banner, vf } = selectedModules;
    var bannerCopy = copyValues.banner
    var { headline, copy, cta } = bannerCopy || {}

    headline = limitCharsPerLine(
        headline || '', 27, "capitalized"
    );
    copy = limitCharsPerLine(
        copy || '', 60, "capitalized"
    );

    try {
        if (banner === "" || banner === null) {
            console.warn('Banner n\u00e3o selecionado');
            modulesHeight.banner = 0;
            return;
        } else {
        }

        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();

        let bannerFilePath;

        if (banner !== "" || banner !== null) {
            bannerFilePath = `assets/banners/${banner}.psd`;
        } else {
            bannerFilePath = null;
        }

        const fileEntry = await pluginDir.getEntry(bannerFilePath)

        const targetFunction = async (executionContext) => {
            try {
                await app.open(fileEntry);
                const secondDocument = app.documents[1];
                const bannerWidth = secondDocument.width;
                modulesHeight['banner'] = secondDocument.height;

                const changeCopies = [
                    setFontStyle({
                        Name: "Banner Headline",
                        Value: headline,
                        FontName: "Roboto",
                        FontWeight: "Light",
                        Size: 25,
                        RedColor: 68,
                        GreenColor: 68,
                        BlueColor: 68,
                        AutoLeading: false,
                        Leading: 18,
                        FontCaps: false,
                    }),
                    setFontStyle({
                        Name: "Banner Copy",
                        Value: copy,
                        FontName: "Arial",
                        FontWeight: "Regular",
                        Size: 11,
                        RedColor: 68,
                        GreenColor: 68,
                        BlueColor: 68,
                        AutoLeading: true,
                        FontCaps: false,
                    }),
                    getBounds({
                        Name: "Banner Headline"
                    }),
                ];

                const { position: newCopyPosition } = await getBoundsAndPosition(changeCopies, "boundingBox", 2, "height", 16);

                const offsetCopy = [
                    selectLayer({
                        Name: "Banner Copy"
                    }),
                    setOffset({
                        Name: "Banner Copy",
                        Vertical: newCopyPosition,
                    }),
                    getBounds({
                        Name: "Banner Copy"
                    }),
                ];

                const { position: baseCtaPosition } = await getBoundsAndPosition(offsetCopy, "boundingBox", 2, "height", 18);

                const newCtaPosition = baseCtaPosition + newCopyPosition;

                const changeCtaCopy = [
                    setFontStyle({
                        Name: "Banner CTA Copy",
                        Value: cta,
                        FontName: "Arial",
                        FontWeight: "Bold",
                        Size: 14,
                        RedColor: 68,
                        GreenColor: 68,
                        BlueColor: 68,
                        AutoLeading: true,
                        FontCaps: false,
                    }),
                    getBounds({
                        Name: "Banner CTA Copy",
                    }),
                ]

                const { position: newCtaWidth } = await getBoundsAndPosition(changeCtaCopy, "boundingBox", 1, "width", 20);

                const resizeCtaBorder = [

                    selectLayer({
                        Name: "Banner CTA Border"
                    }),

                    setCTABorder({
                        Width: newCtaWidth
                    }),

                    selectGroup({
                        FirstName: "Banner CTA",
                        LastName: "Banner CTA Border"
                    }),

                    makeSmartObj()
                ]

                await batchPlay(resizeCtaBorder, {});

                const offsetCta = [
                    selectLayer({
                        Name: "Banner CTA"
                    }),
                    setOffset({
                        Name: "Banner CTA",
                        Vertical: newCtaPosition,
                    }),
                ];

                await batchPlay(offsetCta, {});

                const alignCopyOnY = [
                    selectGroup({
                        FirstName: "Banner Copy Group",
                        LastName: "Banner Image Group"
                    }),
                    alignGroupY(),
                ]

                await batchPlay(alignCopyOnY, {});

                const makeBackground = makeSolid({
                    Name: "Banner Background",
                    RedColor: 255,
                    GreenColor: 255,
                    BlueColor: 255,
                    Bottom: 210,
                    Right: 600,
                });

                await batchPlay(makeBackground, {});

                const finalCrop = setFinalCrop({
                    Bottom: 210,
                    Right: 600,
                });

                await batchPlay(finalCrop, {});

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;

                const offsetModules = buildInfo.calculateTotalHeight('banner', buildInfo.selectedModules);

                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (bannerWidth / 2) + 25);
                const offsetY = (0 - (docHeight / 2) + offsetModules);

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

