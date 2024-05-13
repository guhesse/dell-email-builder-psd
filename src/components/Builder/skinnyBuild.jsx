import { core, app, batchPlay, storage } from '../../App.js';
import { getBoundsAndPosition } from "../../hook/getBoundsAndPosition.jsx";
import limitCharsPerLine from "../../hook/charLimiter.jsx";
import { setTwoFontStyle, getBounds, makeSolid, selectAllAndCopy, setFinalCrop } from "../../hook/hooksJSON.jsx"

// Importa o skinny banner
export async function skinnyBuild(buildInfo) {

    var { selectedModules, copyValues, colors, modulesHeight } = buildInfo

    var vf = selectedModules.vf
    var skinny = selectedModules.skinny

    var skinnyCopy = copyValues["skinny"]

    var accentColor = colors["accentColor"]
    var secondaryColor = colors["secondaryColor"]

    if (skinny === "" || skinny === null) {
        console.warn('Skinny não selecionado');
        modulesHeight.skinny = 0;
        return;
    }

    console.log(buildInfo)

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

                let skinnyTitle = skinnyCopy && skinnyCopy.headline ? limitCharsPerLine(skinnyCopy.headline, 60, "capitalized") : '';
                let skinnyCopyText = skinnyCopy && skinnyCopy.copy ? limitCharsPerLine(skinnyCopy.copy, 65, "capitalized") : '';
                
                const skinnyBannerCopy = skinnyTitle + "\r" + skinnyCopyText;

                const changeSkinnyBannerCopy = [
                    setTwoFontStyle({
                        Name: "Skinny Banner Copy",
                        Value: skinnyBannerCopy,
                        Slice: skinnyTitle.length + 1,
                        FontName: ["Roboto", "Roboto"],
                        FontWeight: ["Bold", "Regular"],
                        Size: [18.5, 18.5],
                        RedColor: [accentColor.r, accentColor.r],
                        GreenColor: [accentColor.g, accentColor.g],
                        BlueColor: [accentColor.b, accentColor.b],
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
                    RedColor: secondaryColor.r,
                    GreenColor: secondaryColor.g,
                    BlueColor: secondaryColor.b,
                    Bottom: finalCropValue,
                    Right: 600,
                })
                await batchPlay(makeBackground, {})

                const finalCrop = setFinalCrop({
                    Bottom: finalCropValue,
                })
                await batchPlay(finalCrop, {});

                modulesHeight.skinny = secondDocument.height;

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {}); 

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;
                const offsetX = (0 - (docWidth / 2) + (skinnyWidth / 2) + 25);

                var offsetModules = ""

                if (vf === "" || vf === null) {
                    offsetModules = ((modulesHeight.sl + 30) + (modulesHeight.header + 20));
                } else {
                    offsetModules = ((modulesHeight.sl + 30) + (modulesHeight.vf + 20));
                }

                const offsetY = (0 - (docHeight / 2) + (modulesHeight.skinny / 2) + (offsetModules));

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