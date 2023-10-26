import React, { useState } from 'react';
import HeaderSelector from "./HeaderSelector.js";
import { Theme } from "@swc-react/theme";
const { core, app } = require('photoshop');
const { storage } = require('uxp');
const { batchPlay } = require('photoshop').action;

function App() {
  const [selectedHeader, setSelectedHeader] = useState(null);

  const handleHeaderSelect = async (header) => {
    console.log('Header selecionado:', header);
    const headerFilePath = `assets/${header}.psd`;
    console.log('Caminho do arquivo:', headerFilePath);
    const fs = storage.localFileSystem;

    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(headerFilePath);

      const targetFunction = async (executionContext) => {
        try {
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

          await batchPlay(batchHeaderCopy, {});
          await app.activeDocument.save();
          await app.activeDocument.close();

          const activeDocument = app.activeDocument;
          await activeDocument.paste();
          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 330);
          const offsetY = ((docHeight - docHeight) - (docHeight / 2) + 57);
          pastedGroup.translate(offsetX, offsetY);
          await activeDocument.save();

          console.log('Cabeçalho inserido com sucesso!');
        } catch (error) {
          console.error('Erro ao inserir o cabeçalho:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabeçalho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo:', error);
    }
  };

  const handleMontarLayoutClick = async () => {
    try {
      await handleHeaderSelect(selectedHeader);
      // Outras funções que você deseja executar podem ser chamadas aqui
      // await outraFuncao();
      // await maisUmaFuncao();
      console.log('Todas as funções foram executadas com sucesso.');
    } catch (error) {
      console.error('Erro ao montar o layout:', error);
    }
  };

  return (
    <div width="100" style={{ paddingLeft: "15px", paddingTop: "10px", width: "100vw" }}>
      <Theme theme="spectrum" scale="medium" color="light">
        <HeaderSelector handleHeaderSelect={setSelectedHeader}></HeaderSelector>
        <sp-button style={{ marginTop: "8px" }} onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button>
      </Theme>
    </div>
  );
}

export default App;
