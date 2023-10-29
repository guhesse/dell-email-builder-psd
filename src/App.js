import React, { useState } from 'react';
import HeaderSelector from "./HeaderSelector.js";
import SubjectLineSelector from './SubjectLineSelector.js';
import { Theme } from "@swc-react/theme";
const { core, app } = require('photoshop');
const { storage } = require('uxp');
const { batchPlay } = require('photoshop').action;


function App() {

  //Função de selecionar o Header
  const [selectedHeader, setSelectedHeader] = useState(null);

  const handleHeaderSelect = async (header) => {
    const headerFilePath = `assets/${header}.psd`;
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

          console.log('Header inserido com sucesso!');
        } catch (error) {
          console.error('Erro ao inserir o Header:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabeçalho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Header:', error);
    }
  };
  // Fim de função de selecionar o Header

  //Função de moficar e importar o SSL

  const [subjectLineValues, setSubjectLineValues] = useState(null);

  const handleSubjectLineChange = (values) => {
    setSubjectLineValues(values);
  };

  const slValue = subjectLineValues?.slValue;
  const sslValue = subjectLineValues?.sslValue;

  const sslSelect = async (ssl) => {
    const sslFilePath = `assets/NON-LAYOUT_CONTENT.psd`;
    const fs = storage.localFileSystem;

    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(sslFilePath);

      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);
          const batchSSLChangeAndCopy = [
            {
              _obj: "select",
              _target: [
                {
                  _ref: "layer",
                  _name: "SL"
                }
              ],
              makeVisible: false,
              layerID: [
                2125
              ],
              _options: {
                dialogOptions: "dontDisplay"
              }
            },

            {
              _obj: "set",
              _target: [
                {
                  _ref: "textLayer",
                  _enum: "ordinal",
                  _value: "targetEnum"
                }
              ],
              to: {
                _obj: "textLayer",
                textKey: `SL PT :  ${getSubjectLineValues().slValue}`,
              }
            },
            {
              _obj: "select",
              _target: [
                {
                  _ref: "layer",
                  _name: "SSL"
                }
              ],
              makeVisible: false,
              layerID: [
                2125
              ],
              _options: {
                dialogOptions: "dontDisplay"
              }
            },

            {
              _obj: "set",
              _target: [
                {
                  _ref: "textLayer",
                  _enum: "ordinal",
                  _value: "targetEnum"
                }
              ],
              to: {
                _obj: "textLayer",
                textKey: `SSL :  ${getSubjectLineValues().slValue}`,
              }
            },
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

          await batchPlay(batchSSLChangeAndCopy, {});
          await app.activeDocument.save();
          await app.activeDocument.close();

          const activeDocument = app.activeDocument;
          await activeDocument.paste();
          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 325);
          const offsetY = ((docHeight - docHeight) - (docHeight / 2) + 30);
          pastedGroup.translate(offsetX, offsetY);
          await activeDocument.save();

          console.log('SSL inserido com sucesso!');
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
  // Fim de função de modificar e importar o SSL

  const handleMontarLayoutClick = async () => {
    try {
      await sslSelect();
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
        <SubjectLineSelector onSubjectLineChange={handleSubjectLineChange} />
        <p>SL: {slValue}</p>
        <p>SSL: {sslValue}</p>
        <HeaderSelector handleHeaderSelect={setSelectedHeader} />
        <sp-button style={{ marginTop: "8px" }} onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button>
      </Theme>
    </div>
  );
}

export default App;