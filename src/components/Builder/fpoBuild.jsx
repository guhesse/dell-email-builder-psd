import { core, app, batchPlay, storage } from '../../App.js';
import { selectAllAndCopy } from "../../hook/hooksJSON.jsx"

export async function fpoBuild(buildInfo) {

    var { selectedModules, modulesHeight, copyValues } = buildInfo

    var { fpo } = selectedModules

    var fpoValue = copyValues.fpo
    var fpoCount = fpoValue.number

    
    if (fpoCount === null || fpoCount === 0 ) {
        console.warn('Fpo n\u00e3o selecionado');
        modulesHeight.fpo = 0;
        return;
    } else {
    }

    try {
        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();

        let fpoFilePath;
        for (let i = 1; i <= fpoCount; i++) {
            if (fpo !== "" && fpo !== null) {
                fpoFilePath = `assets/fpo/${fpo}/${i}.psd`;
            } else if (fpo === null) {
                fpoFilePath = `assets/fpo/sb/${i}.psd`;
            }
        }
        const fileEntry = await pluginDir.getEntry(fpoFilePath)
        const targetFunction = async (executionContext) => {
            try {
                await app.open(fileEntry);
                const secondDocument = app.documents[1];
                const fpoWidth = secondDocument.width;
                modulesHeight.fpo = secondDocument.height;

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;

                const offsetModules = buildInfo.calculateTotalHeight('fpo', buildInfo.selectedModules);

                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (fpoWidth / 2) + 25);
                const offsetY = (0 - (docHeight / 2) + offsetModules);

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