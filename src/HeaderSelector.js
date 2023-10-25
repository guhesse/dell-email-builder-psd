import React, { useState } from 'react';
const { core, app } = require('photoshop');
const { storage } = require('uxp');
const { batchPlay } = require('photoshop').action; // Importe a função batchPlay

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

                    // Calcula as coordenadas de deslocamento para o canto superior esquerdo
                    const offsetX = -pastedGroup.bounds.left - activeDocument.width / 5.5;
                    const offsetY = -pastedGroup.bounds.top - activeDocument.height / 5;

                    // Move o grupo colado para o ponto (0, 0) do documento (canto superior esquerdo)
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
            <sp-picker>
                <sp-menu-item onClick={() => handleHeaderSelect('SB')}>SB</sp-menu-item>
                <sp-menu-item onClick={() => handleHeaderSelect('CON')}>CON</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item onClick={() => handleHeaderSelect('Alienware')}>Alienware</sp-menu-item>
                <sp-menu-item onClick={() => handleHeaderSelect('Gaming')}>Gaming</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item onClick={() => handleHeaderSelect('Outlet')}>Outlet</sp-menu-item>
                <sp-menu-item onClick={() => handleHeaderSelect('Experts')}>Experts</sp-menu-item>
            </sp-picker>
            {selectedHeader && <p>Selecionado: {selectedHeader}</p>}
        </>
    );
}
