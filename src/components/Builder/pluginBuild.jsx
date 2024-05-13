import { core, app, batchPlay, storage } from '../../App.js';
import { getBoundsAndPosition } from "../../hook/getBoundsAndPosition.jsx";
import limitCharsPerLine from "../../hook/charLimiter.jsx";
import { setTwoFontStyle, getBounds, makeSolid, selectAllAndCopy, setFinalCrop } from "../../hook/hooksJSON.jsx"

export async function pluginBuild() {

    var { selectedModules, skinnyValues, colors, modulesHeight } = buildInfo

    var plugin = selectedModules.plugin

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
