import React, { useState } from 'react';
const { core, app } = require('photoshop');
const { storage } = require('uxp');
const { batchPlay } = require('photoshop').action; // Importe a função batchPlay

import "@spectrum-web-components/theme/theme-dark.js";
import "@spectrum-web-components/theme/express/theme-dark.js";
import "@spectrum-web-components/theme/scale-medium.js";
import "@spectrum-web-components/theme/express/scale-medium.js";
import { Theme } from "@swc-react/theme";

export default function HeaderSelector() {
    const [selectedHeader, setSelectedHeader] = useState(null);

    const handleHeaderSelect = async (header) => {
        console.log('Header selecionado:', header);

        // Caminho relativo para o arquivo de cabeçalho específico dentro do diretório do plugin
        const headerFilePath = `assets/${header}.psd`;
        console.log('Caminho do arquivo:', headerFilePath);

        const fs = storage.localFileSystem;

        try {
            // Obtém a entrada do arquivo de cabeçalho
            const pluginDir = await fs.getPluginFolder();
            const fileEntry = await pluginDir.getEntry(headerFilePath);

            // Função alvo para execução dentro do modal
            const targetFunction = async (executionContext) => {
                try {
                    // Abre o arquivo PSD e executa operações usando batchPlay
                    await app.open(fileEntry);
                    const batchHeaderCopy = [
                        {
                            _obj: "selectAllLayers",
                            _target: [
                                {
                                    _ref: "layer",
                                    _enum: "ordinal",
                                    _value: "targetEnum"
                                }
                            ],
                            _options: {
                                dialogOptions: "dontDisplay"
                            }
                        },
                        {
                            _obj: "copyEvent",
                            _options: {
                                dialogOptions: "dontDisplay"
                            }
                        }
                    ];

                    await batchPlay(batchHeaderCopy, {}); // Use batchPlay desta forma
                    await app.activeDocument.save();
                    await app.activeDocument.close();

                    // Obtém o documento ativo no Photoshop
                    const activeDocument = app.activeDocument;

                    // Cola o conteúdo copiado para o documento ativo
                    await activeDocument.paste();

                    // Obtém a camada colada
                    const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];


                    // Obtém as dimensões do documento
                    const docWidth = activeDocument.width;
                    const docHeight = activeDocument.height;

                    console.log("Altura do Documento:", docHeight);
                    console.log("Largura do Documento:", docWidth);

                    // Calcula as coordenadas de deslocamento para o canto superior esquerdo do documento
                    const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 330) ;
                    const offsetY = ((docHeight - docHeight) - (docHeight / 2) + 57) ;


                    // Move o grupo colado para o ponto (offsetX, offsetY) do documento (canto superior esquerdo)
                    pastedGroup.translate(offsetX, offsetY);



                    // Salva o documento modificado
                    await activeDocument.save();

                    console.log('Cabeçalho inserido com sucesso!');
                } catch (error) {
                    console.error('Erro ao inserir o cabeçalho:', error);
                }
            };

            // Configura as opções para o executeAsModal
            const options = {
                commandName: 'Inserir Cabeçalho', // Nome do comando para a barra de progresso
                interactive: true, // Modo interativo para a barra de progresso
            };

            // Executa targetFunction dentro do modal
            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao encontrar o arquivo:', error);
        }
    };

    return (
        <>
            <Theme theme="dark" scale="medium" color="dark">
                <p>Header</p>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                        <sp-menu-item onClick={() => handleHeaderSelect('SB')}>SB</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeaderSelect('CON')}>CON</sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item onClick={() => handleHeaderSelect('Alienware')}>Alienware</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeaderSelect('Gaming')}>Gaming</sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item onClick={() => handleHeaderSelect('Outlet')}>Outlet</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeaderSelect('Experts')}>Experts</sp-menu-item>
                    </sp-picker>
                </sp-field-group>
            </Theme>
            {selectedHeader && <p>Selecionado: {selectedHeader}</p>}
        </>
    );
}

