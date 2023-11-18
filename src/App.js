import React, { useState, useEffect } from 'react';
import HeaderSelector from "./HeaderSelector.js";
import SubjectLineSelector from './SubjectLineSelector.js';
import AccentColorSelector from './AccentColorSelector.js';
import HeroSelector from './HeroSelector.js';
import PluginSelector from './PluginSelector.js';
import FundingSelector from './FundingSelector.js';

import { Theme } from "@swc-react/theme";
const { core, app } = require('photoshop');
const { storage } = require('uxp');
const { batchPlay } = require('photoshop').action;



var slHeight = ""; // Inicialmente, a variável está vazia
var headerHeight = ""; // Inicialmente, a variável está vazia
var fundingHeight = ""; // Inicialmente, a variável está vazia
var heroHeight = ""; // Inicialmente, a variável está vazia
var pluginHeight = ""; // Inicialmente, a variável está vazia

if (slHeight === null || slHeight === undefined) {
  slHeight = 0;
}


if (headerHeight === null || headerHeight === undefined) {
  headerHeight = 0;
}


if (heroHeight === null || heroHeight === undefined) {
  heroHeight = 0;
}
if (fundingHeight === null || fundingHeight === undefined) {
  fundingHeight = 0;
}
if (pluginHeight === null || pluginHeight === undefined) {
  fundingHeight = 0;
}


var redValue = ""
var greenValue = ""
var blueValue = ""

function App() {

  // Seleciona a Accent Color e a define

  const [selectedColorValues, setSelectedColorValues] = useState(null);

  const handleAccentColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
      redValue = values.rgbValues.r;
      greenValue = values.rgbValues.g;
      blueValue = values.rgbValues.b;
    }
  };

  async function clearAllLayers() {
    const targetFunction = async (executionContext) => {
      try {

        const batchClearAllLayers = [
          { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [3155, 3156, 3157], _options: { dialogOptions: "dontDisplay" } }]

        // Ajuste para "wait" para aguardar a conclusão do comando
        await batchPlay(batchClearAllLayers, {});

        console.log('Layer deletadas com sucesso!');
      } catch (error) {
        console.error('Não foi possível deletar os as layers', error);
      }
    }

    const options = {
      commandName: 'Deletar todas as camadas',
      interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
  };

  async function fitToScreenPre() {
    const targetFunction = async (executionContext) => {
      try {

        const batchDefineBaseBackground = [
          {
            _obj: "set", _target: [{ _ref: "color", _property: "backgroundColor" }],
            to: { _obj: "HSBColorClass", hue: { _unit: "angleUnit", _value: 0 }, saturation: 0, brightness: 100 }, source: "photoshopPicker", _options: { dialogOptions: "dontDisplay" }
          }
        ]

        await batchPlay(batchDefineBaseBackground, {});

        const batchCropDocument = [

          { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
          {
            _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 5000.223315669948 }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" }
          }
        ]

        await batchPlay(batchCropDocument, {});

        const batchZoomFit = [

          {
            _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { ialogOptions: "dontDisplay", },
          },];



        // Ajuste para "wait" para aguardar a conclusão do comando
        await batchPlay(batchZoomFit, {});

        console.log('Zoom ajustado para "Fit on Screen" com sucesso!');
      } catch (error) {
        console.error('Não foi possível ajustar o zoom para "Fit on Screen":', error);
      }
    }

    const options = {
      commandName: 'Ajuste de documento pre montagem',
      interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
  };


  //Função de moficar e importar o SSL

  const [subjectLineValues, setSubjectLineValues] = useState(null);

  const handleSubjectLineChange = (values) => {
    setSubjectLineValues(values);
  };

  const slValue = subjectLineValues?.slValue;
  const sslValue = subjectLineValues?.sslValue;

  const sslSelect = async () => {
    const sslFilePath = `assets/NON-LAYOUT_CONTENT.psd`;
    const fs = storage.localFileSystem;

    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(sslFilePath);


      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);

          const secondDocument = app.documents[1];
          const slWidth = secondDocument.width;
          slHeight = secondDocument.height;

          const batchSSLChangeAndCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "SL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `SL PT :  ${slValue}`, } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "SSL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `SSL :  ${sslValue}`, } },
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];
          await batchPlay(batchSSLChangeAndCopy, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();


          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (slWidth / 2));
          const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (slHeight / 2));
          pastedGroup.translate(offsetX, offsetY);

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


  var headerHeight = ""; // Inicialmente, a variável está vazia


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
          const secondDocument = app.documents[1];
          const headerWidth = secondDocument.width;
          headerHeight = secondDocument.height;

          const batchHeaderCopy = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];
          await batchPlay(batchHeaderCopy, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (headerWidth / 2) + 40);
          const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (headerHeight / 2) + (slHeight + 30));

          pastedGroup.translate(offsetX, offsetY);

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

  //Função de selecionar o Hero
  const [selectedHero, setSelectedHero] = useState(null);

  const [heroCopyValues, setHeroCopyValues] = useState(null);

  const handleHeroCopyChange = (values) => {
    setHeroCopyValues(values);
  };

  const badgeValue = heroCopyValues?.badgeValue;
  const headlineValue = heroCopyValues?.headlineValue;
  const subHeadlineValue = heroCopyValues?.subHeadlineValue;


  const handleHeroSelect = async (hero) => {
    const heroFilePath = `assets/heros/${hero}.psd`;
    const fs = storage.localFileSystem;
    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(heroFilePath);


      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);
          const secondDocument = app.documents[1];
          const heroWidth = secondDocument.width;
          heroHeight = secondDocument.height;

          let heroPaddingTop = ""

          if (heroHeight > 1000) {
            heroPaddingTop = ((heroHeight - 1000) / 2);
          } else {
            heroPaddingTop = 0; // Atribui 0 se headerHeight for menor ou igual a 1000
          };

          const batchChangeColor = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" }, },
            {
              _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" },],
              to: {
                _obj: "textStyle", color: { _obj: "RGBColor", red: redValue, grain: greenValue, blue: blueValue },
              }, _options: { dialogOptions: "dontDisplay" },
            },
          ];

          await batchPlay(batchChangeColor, {});

          const batchHeroCopy = [

            { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },

            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${badgeValue}`, } },

            { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },

            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${headlineValue}`, } },

            { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },

            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${subHeadlineValue}`, } },

            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];
          await batchPlay(batchHeroCopy, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
        

          if (selectedHeader === null) {
            headerHeight = 0;
          } else {
          }

          const offsetX = (0 - (docWidth / 2) + (heroWidth / 2) + 25);
          let offsetModules = ((slHeight + 30) + (headerHeight)); //- (heroPaddingTop) / 2
          const offsetY = (0 - (docHeight / 2) + (heroHeight / 2) + (offsetModules));
          pastedGroup.translate(offsetX, offsetY);


          console.log('Hero inserido com sucesso!');
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
  // Fim de função de selecionar o Hero

  //Função de selecionar o Funding
  const [selectedFunding, setSelectedFunding] = useState(null);

  const handleFundingSelect = async (funding) => {
    const fundingFilePath = `assets/fundings/${funding}.psd`;
    const fs = storage.localFileSystem;
    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(fundingFilePath);


      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);
          const secondDocument = app.documents[1];
          const fundingWidth = secondDocument.width;
          fundingHeight = secondDocument.height;



          const batchHeaderCopy = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];
          await batchPlay(batchHeaderCopy, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (fundingWidth / 2) + 40);
          const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 30));

          pastedGroup.translate(offsetX, offsetY);

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
  // Fim de função de selecionar o Funding


  //Função de modificar e importar o Plugin

  const [selectedPlugin, setSelectedPlugin] = useState(null);

  const [pluginCopyValues, setPluginCopyValues] = useState(null);

  const [superChargerCopyValues, setSuperChargerCopyValues] = useState(null);

  const handlePluginCopyChange = (values) => {
    setPluginCopyValues(values);
  };

  const handleSuperChargerCopyChange = (values) => {
    setSuperChargerCopyValues(values);
  };


  const pluginCopyValue = pluginCopyValues?.pluginCopyValue;
  const leftCopyValue = superChargerCopyValues?.leftCopyValue;
  const middleCopyValue = superChargerCopyValues?.middleCopyValue;
  const rightCopyValue = superChargerCopyValues?.rightCopyValue;


  const pluginSelect = async () => {

    let pluginFilePath = "";

    if (selectedPlugin === 'supercharger') {
      pluginFilePath = 'assets/plugins/supercharger.psd';
    } else if (selectedPlugin === 'plugin') {
      pluginFilePath = 'assets/plugins/plugin.psd';
    } else {
      pluginFilePath = null;
    }

    const fs = storage.localFileSystem;

    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(pluginFilePath);


      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);

          const secondDocument = app.documents[1];
          const pluginWidth = secondDocument.width;
          pluginHeight = secondDocument.height;



          const batchChangeColor = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], makeVisible: false, layerID: [3332], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "contentLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: redValue, grain: greenValue, blue: blueValue } }, _options: { dialogOptions: "dontDisplay" } }
          ];

          await batchPlay(batchChangeColor, {});

          let batchPluginChange = []

          if (selectedPlugin === 'supercharger') {
            batchPluginChange = [


              { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${leftCopyValue}`, } },

              { _obj: "select", _target: [{ _ref: "layer", _name: "2" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${middleCopyValue}`, } },

              { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${rightCopyValue}`, } },

              { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
            ];
          } else if (selectedPlugin === 'plugin') {
            batchPluginChange = [

              { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${pluginCopyValue}`, } },

              { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
            ];
          } else {
            console.error('Plugin não selecionado')
            return;
          }


          await batchPlay(batchPluginChange, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();


          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;


          if (selectedHeader === null) {
            headerHeight = 0;
          } else {
          }
      
          if (selectedHero === null) {
            heroHeight = 0;
          } else {
          }
      

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (pluginWidth / 2) + 25);
          let offsetModules = ((slHeight + 30) + (headerHeight) + (heroHeight + 20)); //- (heroPaddingTop) / 2
          const offsetY = (0 - (docHeight / 2) + (pluginHeight / 2) + (offsetModules));
          pastedGroup.translate(offsetX, offsetY);

          console.log('Plugin inserido com sucesso!');
        } catch (error) {
          console.error('Erro ao inserir plugin:', error);
        }
      };

      const options = {
        commandName: 'Inserir Plugin',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo de Plugin:', error);
    }
  };

  // Fim de função de modificar e importar o Plugin

  async function fitToScreenPos() {

    if (selectedHeader === null) {
      headerHeight = 0;
    } else {
    }

    if (selectedHero === null) {
      heroHeight = 0;
    } else {
    }

    if (selectedPlugin === null) {
      pluginHeight = 0;
    } else {
    }

    console.log("Altura do header:", headerHeight)
    console.log("Altura do Hero:", heroHeight)
    console.log("Altura do Plugin:", pluginHeight)


    const allModulesSizes = slHeight + 30 + headerHeight + (heroHeight + 20) + pluginHeight;

    const targetFunction = async (executionContext) => {
      try {
        const batchCropDocument = [

          { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
          {
            _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: parseFloat(allModulesSizes) }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" }
          }
        ]

        await batchPlay(batchCropDocument, {});

        console.log(batchCropDocument[2].to.bottom._value);

        const batchZoomFit = [

          {
            _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { ialogOptions: "dontDisplay", },
          },];

        // Ajuste para "wait" para aguardar a conclusão do comando
        await batchPlay(batchZoomFit, {});

        console.log('Zoom ajustado para "Fit on Screen" Pos com sucesso!');
      } catch (error) {
        console.error('Não foi possível ajustar o zoom para "Fit on Screen Pos":', error);
      }
    }

    const options = {
      commandName: 'Ajuste de documento pos montagem',
      interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
  };



  const handleMontarLayoutClick = async () => {


    try {
      await clearAllLayers();
      await fitToScreenPre();
      var slHeight = await sslSelect(); // Obtém slHeight usando sslSelect
      var headerHeight = await handleHeaderSelect(selectedHeader, slHeight); // Passa slHeight para handleHeaderSelect
      var fundingHeight = await handleFundingSelect(selectedFunding, slHeight)
      var heroHeight = await handleHeroSelect(selectedHero, slHeight, headerHeight, fundingHeight);
      var pluginHeight = await pluginSelect(selectedPlugin, heroHeight, slHeight, headerHeight);
      await fitToScreenPos(slHeight, headerHeight, heroHeight, pluginHeight);

      console.log('Todas as funções foram executadas com sucesso.');
    } catch (error) {
      console.error('Erro ao montar o layout:', error);
    }
  };

  return (
    <div width="100%" style={{ padding: "0px 15px", paddingTop: "10px", width: "100%" }}>
      <Theme theme="spectrum" scale="medium" color="light">
        <SubjectLineSelector
          onSubjectLineChange={handleSubjectLineChange} />
        <AccentColorSelector
          onAccentColorChange={handleAccentColorChange} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <HeaderSelector
            handleHeaderSelect={setSelectedHeader} />
          <FundingSelector handleFundingSelect={setSelectedFunding} ></FundingSelector>
        </div>
        <HeroSelector
          handleHeroSelect={setSelectedHero}
          onHeroCopyChange={handleHeroCopyChange} />
        <PluginSelector
          handlePluginSelect={setSelectedPlugin}
          onPluginCopyChange={handlePluginCopyChange}
          onSuperChargerCopyChange={handleSuperChargerCopyChange} />
        <sp-button
          style={{ marginTop: "8px" }}
          onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button>
      </Theme>
    </div>
  );
}

export default App;