import { setFontStyle, getBounds, setTwoFontStyle, makeSolid, setFinalCrop, selectAllAndCopy, alignGroupYTop, selectLayer, selectGroup } from "../../hook/hooksJSON.jsx";
import { core, app, batchPlay, storage } from '../../App.js';
import limitCharsPerLine from "../../hook/charLimiter.jsx";
import { getBoundsAndPosition } from "../../hook/getBoundsAndPosition.jsx";

export async function fundingBuild(buildInfo) {

    const { selectedFunding, selectedHeader, vfCopyValue, modulesHeight } = buildInfo

    let fundingFilePath

    if (selectedFunding !== "" && selectedFunding !== null) {
        fundingFilePath = `assets/fundings/${selectedFunding}.psd`;
    } else {
        fundingFilePath = `assets/fundings/no-vf.psd`;
    }

    try {
        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(fundingFilePath);

        const targetFunction = async (executionContext) => {
            try {
                await app.open(fileEntry);
                const secondDocument = app.documents[1];

                const formattedFundingCopyValue = limitCharsPerLine(vfCopyValue || '', 30, "capitalized");

                let batchFundingCopy;

                if (vfCopyValue === '' || selectedFunding === "") {
                    batchFundingCopy = [
                        setFontStyle({
                            Name: "Funding Copy",
                            Value: "Visualize no navegador.",
                            FontName: "Arial",
                            FontWeight: "Regular",
                            Size: 10,
                            RedColor: 6,
                            GreenColor: 114,
                            BlueColor: 203,
                            FontCaps: false,
                            AutoLeading: false,
                            Leading: 0,
                        }),
                        getBounds({
                            Name: "Funding Copy",
                            Property: "bounds"
                        })
                    ]
                } else if (vfCopyValue !== '') {
                    batchFundingCopy = [
                        setTwoFontStyle({
                            Name: "Funding Copy",
                            Value: formattedFundingCopyValue + "\r" + "Visualize no navegador.",
                            Slice: formattedFundingCopyValue.length,
                            FontName: ["Arial", "Arial"],
                            FontWeight: ["Regular", "Regular"],
                            Size: [10, 10],
                            RedColor: [68, 6],
                            GreenColor: [68, 114],
                            BlueColor: [68, 203],
                            BaselineShift: [0, -4],
                            Tracking: [0, 0],
                            FontCaps: [false, false],
                            AutoLeading: [true, true],
                            Leading: [0, 0],
                        }),
                        getBounds({
                            Name: "Funding Copy",
                            Property: "bounds"
                        })
                    ]
                };

                const { position: finalCropValue } = await getBoundsAndPosition(batchFundingCopy, "bounds", 1, "bottom", 0);

                const makeBackground = makeSolid({
                    Name: "Funding Container",
                    RedColor: 255,
                    GreenColor: 255,
                    BlueColor: 255,
                    Bottom: finalCropValue,
                    Right: 200,
                })
                await batchPlay(makeBackground, {})

                const finalCrop = setFinalCrop({
                    Bottom: finalCropValue,
                })
                await batchPlay(finalCrop, {});

                modulesHeight.funding  = secondDocument.height;

                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;

                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 515);

                let offsetY;

                if (selectedFunding === 'no-vf') {
                    offsetY = (docHeight - docHeight) - (docHeight / 2) + (modulesHeight.funding / 2) + (modulesHeight.sl + 26);
                } else {
                    offsetY = (docHeight - docHeight) - (docHeight / 2) + (modulesHeight.funding / 2) + (modulesHeight.sl + 30);
                }

                pastedGroup.translate(offsetX, offsetY);

                if (selectedHeader !== "" && selectedHeader !== null) {

                    const alignToHeader = [
                        selectGroup({
                            FirstName: 'Header',
                            LastName: 'Funding'
                        }),
                        alignGroupYTop(),
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