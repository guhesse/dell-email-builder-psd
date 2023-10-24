import React, { useState } from 'react';
const { app } = require('photoshop');
const { storage } = require('uxp');

export default function HeaderSelector() {
    const [selectedHeader, setSelectedHeader] = useState(null);

    const handleHeaderSelect = async (header) => {
        console.log('Header selecionado:', header);

        // Caminho completo para o arquivo de cabeçalho específico dentro do diretório do plugin
        const headerFilePath = `./assets/${header}.psd`;
        console.log('Caminho do arquivo:', headerFilePath);

        const fs = storage.localFileSystem;

        // Caminho para o diretório do plugin
        const pluginDir = await fs.getPluginFolder();
        console.log('Caminho do plugin:', pluginDir.nativePath);

        try {
            // Obtém a entrada do arquivo de cabeçalho
            const fileEntry = await pluginDir.getEntry(headerFilePath);
            console.log('Arquivo encontrado:', fileEntry.nativePath);

            // Abre o arquivo PSD
            const openedDocument = await app.open(fileEntry);

            // Envia um comando para inserir o conteúdo como uma nova camada
            const insertLayerResult = await app.insertLayer();

            console.log('Cabeçalho inserido com sucesso!', insertLayerResult);

            // Salva o documento modificado
            await openedDocument.save();

            // Fecha o documento após a operação
            await openedDocument.close();
        } catch (error) {
            console.error('Erro ao inserir o cabeçalho:', error);
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
