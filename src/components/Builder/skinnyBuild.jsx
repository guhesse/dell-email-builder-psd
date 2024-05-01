import { core, app, batchPlay, storage } from '../../App.js';
import { getBoundsAndPosition } from "../../hook/getBoundsAndPosition.jsx";
import limitCharsPerLine from "../../hook/charLimiter.jsx";
import { setTwoFontStyle, getBounds, makeSolid, selectAllAndCopy, setFinalCrop } from "../../hook/hooksJSON.jsx"

// Importa o skinny banner
export async function skinnyBuild(selectedSkinny, skinnyValues, skinnyHeight, selectedFunding, slHeight, headerHeight, fundingHeight, cores, accentColor, secondaryColor) {
    const { r: accentRed, g: accentGreen, b: accentBlue } = cores[accentColor] || {};
    const { r: secondaryRed, g: secondaryGreen, b: secondaryBlue } = cores[secondaryColor] || {};

    if (selectedSkinny === "" || selectedSkinny === null) {
        console.warn('Skinny não selecionado');
        skinnyHeight.value = 0;
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

                let formattedSkinnyTitle = limitCharsPerLine(
                    skinnyValues.headline || '', 60, "capitalized");
                let formattedSkinnyCopy = limitCharsPerLine(
                    skinnyValues.copy || '', 65, "capitalized");

                const skinnyBannerCopy = formattedSkinnyTitle + "\r" + formattedSkinnyCopy

                const changeSkinnyBannerCopy = [
                    setTwoFontStyle({
                        Name: "Skinny Banner Copy",
                        Value: skinnyBannerCopy,
                        Slice: formattedSkinnyTitle.length + 1,
                        FontName: ["Roboto", "Roboto"],
                        FontWeight: ["Bold", "Regular"],
                        Size: [18.5, 18.5],
                        RedColor: [accentRed, accentRed],
                        GreenColor: [accentGreen, accentGreen],
                        BlueColor: [accentBlue, accentBlue],
                        BaselineShift: [0, 0],
                        Tracking: [0, 0],
                        FontCaps: [false, false],
                        AutoLeading: [true, true],
                        Leading: [0, 0],
                    }),
                    getBounds({
                        Name: "Skinny Banner Copy",
                        Property: "bounds",
                    }),
                ];

                const { position: finalCropValue } = await getBoundsAndPosition(changeSkinnyBannerCopy, "bounds", 1, "bottom", 20);

                const makeBackground = makeSolid({
                    Name: "Skinny Banner Background",
                    RedColor: secondaryRed,
                    GreenColor: secondaryGreen,
                    BlueColor: secondaryBlue,
                    Bottom: finalCropValue,
                    Right: 600,
                })
                await batchPlay(makeBackground, {})

                const finalCrop = setFinalCrop({
                    Bottom: finalCropValue,
                })
                await batchPlay(finalCrop, {});

                skinnyHeight.value = secondDocument.height;

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
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
                let offsetModules = ((slHeight.value + 30) + (fundingHeight.value + 20));
                const offsetY = (0 - (docHeight / 2) + (skinnyHeight.value / 2) + (offsetModules));
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