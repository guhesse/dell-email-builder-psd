import React, { useState, useEffect, createContext, useContext } from 'react';
import useAppContext from '../hook/useAppContext.jsx';
import { core, app, batchPlay, storage } from '../App.js';

var slHeight = ""

export default function EmailBuilder() {

    const { slValue, sslValue, setSlHeight } = useAppContext();

    const slBuild = async (updatedSLValue) => {

        const sslFilePath = `assets/sl-ssl/SL & SSL.psd`;

        try {
            const fs = storage.localFileSystem;
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(sslFilePath);


            const targetFunction = async (executionContext) => {
                try {
                    await app.open(fileEntry);

                    const secondDocument = app.documents[1];
                    const slWidth = secondDocument.width;
                    const slHeight = secondDocument.height;
                    setSlHeight(slHeight);

                    // Fun\u00e7\u00e3o que troca o texto do SL e SSL
                    const changeSLCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "SL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `Subject Line:  ${slValue}`, } },
                        { _obj: "select", _target: [{ _ref: "layer", _name: "SSL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `Super Subject Line :  ${sslValue}`, } }
                    ];

                    await batchPlay(changeSLCopy, {});

                    // Fun\u00e7\u00e3o que copia e cola o m\u00f3dulo
                    const selectAndCopy = [
                        { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
                    ];

                    await batchPlay(selectAndCopy, {});

                    const activeDocument = app.activeDocument;
                    await activeDocument.paste();

                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;
                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (slWidth / 2));
                    const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (slHeight / 2));
                    console.log("slheight no builder", slHeight)
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

    // Fim de fun\u00e7\u00e3o de modificar e importar o SSL



    const handleBuild = async () => {

        try {
            await slBuild();
            
            console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Erro ao montar o layout:', error);
        }
    };

    return (
        <>
        <sp-button variant="warning" onClick={handleBuild} >Aqui é o novo</sp-button>
        </>
    )


}




