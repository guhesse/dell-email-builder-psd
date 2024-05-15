import { core, app, batchPlay, storage } from '../../App.js';
import limitCharsPerLine from "../../hook/charLimiter.jsx";
import { selectAllAndCopy, setSolidFill, setFontStyle, selectGroup, alignGroupX, alignGroupY } from "../../hook/hooksJSON.jsx"

export async function pluginBuild(buildInfo) {

    var { selectedModules, modulesHeight, copyValues, colors } = buildInfo

    var accentColor = colors["accentColor"]
    var secondaryColor = colors["secondaryColor"]
    var tertiaryColor = colors["tertiaryColor"]

    var { brand, vf, plugin } = selectedModules

    var pluginCopy = copyValues.plugin
    var { single, left, center, right } = pluginCopy || {}

    let pluginFilePath = "";

    if (plugin) {
        pluginFilePath = `assets/plugins/${plugin}.psd`;
    } else {
        console.warn('Plugin n\u00e3o selecionado');
        modulesHeight.plugin = 0;
        return;
    }

    const fs = storage.localFileSystem;

    try {
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(pluginFilePath);

        const singleCopy = limitCharsPerLine(
            single || '', 65, "upper"
        );
        const leftCopy = limitCharsPerLine(
            left || '', 13, "captitalized"
        );
        const centerCopy = limitCharsPerLine(
            center || '', 13, "captitalized"
        );
        const rightCopy = limitCharsPerLine(
            right || '', 13, "captitalized"
        );

        const targetFunction = async (executionContext) => {
            try {
                await app.open(fileEntry);

                const secondDocument = app.documents[1];
                const pluginWidth = secondDocument.width;
                modulesHeight.plugin = secondDocument.height;

                if (plugin === 'plugin' && brand === 'dell') {

                    const setPlugin = [
                        setSolidFill({
                            Name: "Plugin Background",
                            RedColor: secondaryColor.r,
                            GreenColor: secondaryColor.g,
                            BlueColor: secondaryColor.b
                        }),

                        setFontStyle({
                            Name: "Plugin Copy",
                            Value: singleCopy,
                            FontName: "Arial",
                            FontWeight: "Regular",
                            Size: 12,
                            RedColor: accentColor.r,
                            GreenColor: accentColor.g,
                            BlueColor: accentColor.b,
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

                } else if (plugin === 'supercharger' && brand === 'dell') {

                    const setPlugin = [

                        setSolidFill({
                            Name: "Plugin Background",
                            RedColor: secondaryColor.r,
                            GreenColor: secondaryColor.g,
                            BlueColor: secondaryColor.b
                        }),

                        setFontStyle({
                            Name: "1",
                            Value: leftCopy,
                            FontName: "Roboto",
                            FontWeight: "Light",
                            Size: 24,
                            RedColor: accentColor.r,
                            GreenColor: accentColor.g,
                            BlueColor: accentColor.b,
                            FontCaps: false,
                            AutoLeading: false,
                            Leading: 24
                        }),

                        setFontStyle({
                            Name: "2",
                            Value: centerCopy,
                            FontName: "Roboto",
                            FontWeight: "Light",
                            Size: 24,
                            RedColor: accentColor.r,
                            GreenColor: accentColor.g,
                            BlueColor: accentColor.b,
                            FontCaps: false,
                            AutoLeading: false,
                            Leading: 24
                        }),

                        setFontStyle({
                            Name: "3",
                            Value: rightCopy,
                            FontName: "Roboto",
                            FontWeight: "Light",
                            Size: 24,
                            RedColor: accentColor.r,
                            GreenColor: accentColor.g,
                            BlueColor: accentColor.b,
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

                } else if (plugin === 'plugin' && brand === 'alienware') {

                    const setPlugin = [

                        setSolidFill({
                            Name: "Plugin Background",
                            RedColor: accentColor.r,
                            GreenColor: accentColor.g,
                            BlueColor: accentColor.b
                        }),

                        setFontStyle({
                            Name: "Plugin Copy",
                            Value: singleCopy,
                            FontName: "Open Sans",
                            FontScript: "OpenSans-Bold",
                            FontWeight: "Bold",
                            Size: 12,
                            RedColor: tertiaryColor.r,
                            GreenColor: tertiaryColor.g,
                            BlueColor: tertiaryColor.b,
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
                            RedColor: accentColor.r,
                            GreenColor: accentColor.g,
                            BlueColor: accentColor.b
                        }),

                        setFontStyle({
                            Name: "1",
                            Value: leftCopy,
                            FontName: "Roboto",
                            FontWeight: "Light",
                            Size: 24,
                            RedColor: tertiaryColor.r,
                            GreenColor: tertiaryColor.g,
                            BlueColor: tertiaryColor.b,
                            FontCaps: false,
                            AutoLeading: false,
                            Leading: 24
                        }),

                        setFontStyle({
                            Name: "2",
                            Value: centerCopy,
                            FontName: "Roboto",
                            FontWeight: "Light",
                            Size: 24,
                            RedColor: tertiaryColor.r,
                            GreenColor: tertiaryColor.g,
                            BlueColor: tertiaryColor.b,
                            FontCaps: false,
                            AutoLeading: false,
                            Leading: 24
                        }),

                        setFontStyle({
                            Name: "3",
                            Value: rightCopy,
                            FontName: "Roboto",
                            FontWeight: "Light",
                            Size: 24,
                            RedColor: tertiaryColor.r,
                            GreenColor: tertiaryColor.g,
                            BlueColor: tertiaryColor.b,
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


                var offsetModules = ""

                if (vf === "" || vf === null) {
                    offsetModules = ((modulesHeight.sl + 30) + (modulesHeight.header + 20) +
                        (modulesHeight.skinny) + (modulesHeight.hero));
                } else {
                    offsetModules = ((modulesHeight.sl + 30) + (modulesHeight.vf + 20) + (modulesHeight.skinny) + (modulesHeight.hero));
                }

                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (pluginWidth / 2) + 25);
                const offsetY = (0 - (docHeight / 2) + (modulesHeight.plugin / 2) + (offsetModules));
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
