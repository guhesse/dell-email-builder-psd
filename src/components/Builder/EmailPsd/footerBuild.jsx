import { core, app, batchPlay, storage } from '../../../App.js';
import { selectAllAndCopy } from '../../../hook/hooksJSON.jsx';

export async function footerBuild(buildInfo) {

    const { modulesHeight, selectedModules } = buildInfo;

    const { footer } = selectedModules;

    if (footer === "" || footer === null) {
        console.warn('Footer n\u00e3o selecionado');
        modulesHeight.footer = 0;
        return;
    }

    const footerFilePath = `assets/footers/${footer}.psd`;

    try {

        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(footerFilePath);

        const targetFunction = async (executionContext) => {

            try {
                await app.open(fileEntry);
                const secondDocument = app.documents[1];
                const footerWidth = secondDocument.width;
                modulesHeight.footer = secondDocument.height;

                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;

                var offsetX;

                if (footer === "experts") {
                    offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 25);
                } else {
                    offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 45);
                }

                const offsetModules = buildInfo.calculateTotalHeight('footer', buildInfo.selectedModules);

                const offsetY = (docHeight - docHeight) - (docHeight / 2) + 10 + offsetModules;

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