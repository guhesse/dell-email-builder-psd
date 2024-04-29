import React from "react";
import { core, app, batchPlay, storage } from '../../App.js';
import { setFontStyle, selectAllAndCopy } from "../../hook/hooksJSON.jsx"

export async function slBuild(slHeight, slValue, sslValue) {

    const sslFilePath = `assets/sl-ssl/SL & SSL.psd`;

    try {
        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(sslFilePath);

        const targetFunction = async () => {
            try {
                await app.open(fileEntry);

                const secondDocument = app.documents[1];
                const slWidth = secondDocument.width;
                slHeight.value = secondDocument.height;

                // Troca o texto do SL e SSL 
                const changeSLCopy = [
                    setFontStyle({
                        Name: "SL",
                        Value: "Subject Line: " + slValue,
                        FontScript: "ArialMT",
                        FontName: "Arial",
                        FontWeight: "Regular",
                        Size: 12,
                        RedColor: 255,
                        GreenColor: 255,
                        BlueColor: 255,
                        FontCaps: false,
                        AutoLeading: true,
                    }),
                    setFontStyle({
                        Name: "SSL",
                        Value: "Super Subject Line: " + sslValue,
                        FontScript: "ArialMT",
                        FontName: "Arial",
                        FontWeight: "Regular",
                        Size: 12,
                        RedColor: 255,
                        GreenColor: 255,
                        BlueColor: 255,
                        FontCaps: false,
                        AutoLeading: true,
                    }),
                ];

                await batchPlay(changeSLCopy, {});

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;
                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (slWidth / 2));
                const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (slHeight.value / 2));
                pastedGroup.translate(offsetX, offsetY);

                console.log('%cSSL inserido com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('Erro ao inserir SSL:', error);
            }
        };

        const options = {
            commandName: 'Inserir SSL',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    } catch (error) {
        console.error('Erro ao encontrar o arquivo de SSL:', error);
    }
};