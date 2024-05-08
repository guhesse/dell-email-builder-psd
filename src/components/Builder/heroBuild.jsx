// Importa o Hero
import { AwHero1LifestyleProduct, Hero1Lifestyle, Hero1LifestyleProduct, Hero1Product, Hero2Promotion } from '../../HeroLayout/heroBuilds.jsx'
import { core, app, batchPlay, storage } from '../../App.js';
import { selectAllAndCopy } from '../../hook/hooksJSON.jsx';

export async function heroBuild(buildInfo) {

    var { selectedModules, modulesHeight, heroValues, colors } = buildInfo

    var vf = selectedModules.vf
    var hero = selectedModules.hero


    if (hero === "" || hero === null) {
        console.warn('Hero não selecionado');
        modulesHeight.hero = 0;
        return;
    }

    const heroFilePath = `assets/heros/${hero}.psd`;
    const fs = storage.localFileSystem;
    try {
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(heroFilePath);

        const targetFunction = async (executionContext) => {
            try {
                await app.open(fileEntry);
                const secondDocument = app.documents[1];

                if (hero === 'hero1-lifestyle-product') {
                    try {
                        await Hero1LifestyleProduct(colors, heroValues);
                    } catch (error) {
                        console.error('Erro ao executar Hero 1 - Lifestyle + Product:', error);
                    }
                } else { }

                if (hero === 'hero1-lifestyle') {
                    try {
                        await Hero1Lifestyle(colors, heroValues);
                    } catch (error) {
                        console.error('Erro ao executar Hero 1 - Only Lifestyle:', error);
                    }
                } else { }

                if (hero === 'hero1-product') {
                    try {
                        await Hero1Product(colors, heroValues);
                    } catch (error) {
                        console.error('Erro ao executar Hero 1 - Only Product:', error);
                    }
                } else { }

                if (hero === 'aw-hero1-lifestyle-product') {
                    try {
                        await AwHero1LifestyleProduct(colors, heroValues);
                    } catch (error) {
                        console.error('Erro ao executar Aw Hero 1 - Lifestyle + Product:', error);
                    }
                } else { }

                if (hero === 'hero2-promotion') {
                    try {
                        await Hero2Promotion(colors, heroValues);
                    } catch (error) {
                        console.error('Erro ao executar Hero2 - Promotion:', error);
                    }
                } else { }

                const heroWidth = secondDocument.width;
                modulesHeight.hero = secondDocument.height;

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;

                var offsetModules = ""

                if (vf === "" || vf === null) {
                    offsetModules = ((modulesHeight.sl + 30) + (modulesHeight.header + 20) + (modulesHeight.skinny));
                } else {
                    offsetModules = ((modulesHeight.sl + 30) + (modulesHeight.vf + 20) + (modulesHeight.skinny));
                }

                const offsetX = (0 - (docWidth / 2) + (heroWidth / 2) + 25);

                const offsetY = (0 - (docHeight / 2) + (modulesHeight.hero / 2) + (offsetModules));
                pastedGroup.translate(offsetX, offsetY);


                console.log('%cHero inserido com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('Erro ao inserir o Hero:', error);
            }
        };

        const options = {
            commandName: 'Inserir Hero',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    } catch (error) {
        console.error('Erro ao encontrar o arquivo do Hero:', error);
    }
};
