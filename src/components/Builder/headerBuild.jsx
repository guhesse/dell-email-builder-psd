// Importa o header
import { core, app, batchPlay, storage } from '../../App.js';
import { selectAllAndCopy } from '../../hook/hooksJSON.jsx';

export async function headerBuild(buildInfo) {  

    const { modulesHeight, selectedModules } = buildInfo;

    const { header } = selectedModules;

    if (header === "" || header === null) {
        console.warn('Header n&#xe3;o selecionado');
        modulesHeight.header = 0;
        return;
    }
    const headerFilePath = `assets/headers/${header}.psd`;

    try {
        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(headerFilePath);

        const targetFunction = async () => {
            try {
                await app.open(fileEntry);
                const secondDocument = app.documents[1];
                const headerWidth = secondDocument.width;
                modulesHeight.header = secondDocument.height
                
                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;
                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (headerWidth / 2) + 35);
                const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (modulesHeight.header / 2) + (modulesHeight.sl + 30));

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