// Import de todas as fun\u00e7\u00f5es 

import React, { useState } from 'react';
import CsvReader from './CsvReader.js';
import HeaderSelector from "./HeaderSelector.js";
import SubjectLineSelector from './SubjectLineSelector.js';
import ColorSelector from './ColorSelector.js';
import SkinnySelector from './SkinnySelector.js';
import HeroSelector from './HeroSelector.js';
import PluginSelector from './PluginSelector.js';
import FundingSelector from './FundingSelector.js';
import FpoSelector from './FpoSelector.js';
import BannerSelector from './BannerSelector.js';
import FooterSelector from './FooterSelector.js';
import BirdseedSelector from './BirdseedSelector.js';
import EmailBuilder from './components/EmailBuilder.jsx';

import { Theme } from "@swc-react/theme";
export const { core, app } = require('photoshop');
export const { storage } = require('uxp');
export const { batchPlay } = require('photoshop').action;

import AppProvider from './context/AppProvider.js';

// Variáveis das alturas dos módulos

var birdseedHeight = "";

function App() {

  // Função de selecionar o Birdseed

  const [selectedBirdseed, setSelectedBirdseed] = useState(null);
  const [selectedBirdseedCopy, setSelectedBirdseedCopy] = useState(null);

  const [birdseedCopyValues, setBirdseedCopyValues] = useState('');

  const handleBirdseedCopyChange = (values) => {
    setBirdseedCopyValues(values);
  };

  const birdseedCopyValue = birdseedCopyValues?.birdseedCopyValue || '';

  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2023);


  const handleDateChange = ({ selectedDay, selectedMonth, selectedYear }) => {
    setSelectedDay(selectedDay);
    setSelectedMonth(selectedMonth);
    setSelectedYear(selectedYear);
  };

  const handleBirdseedSelect = async (birdseed) => {

    if (!birdseed) {
      console.warn('Birdseed n\u00e3o selecionado');
      birdseedHeight = 0;
      return;
    }

    const birdseedFilePath = `assets/birdseeds/${birdseed}.psd`;
    const fs = storage.localFileSystem;
    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(birdseedFilePath);

      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);

          let batchBirdseedCopy = [];

          if (selectedBirdseedCopy === "birdseedcopy") {

            const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${selectedDay}/${selectedMonth}/${selectedYear}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

            const defaultTextURLOne = ` www.dell.com.br.\r\r`

            const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

            const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

            const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses. \r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

            // Concatena o birdseedCopyValue antes do texto padr\u00e3o
            const BirdseedCopy = birdseedCopyValue + "\r\r" + defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


            batchBirdseedCopy = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

              {
                _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                to: {
                  _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                    { _obj: "textStyleRange", from: 0, to: birdseedCopyValue.length + defaultTextSliceOne.length + 2, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: birdseedCopyValue.length + defaultTextSliceOne.length + 2, to: birdseedCopyValue.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                    { _obj: "textStyleRange", from: birdseedCopyValue.length + defaultTextSliceOne.length + defaultTextURLOne.length + 2, to: birdseedCopyValue.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: birdseedCopyValue.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + 1, to: birdseedCopyValue.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                    { _obj: "textStyleRange", from: birdseedCopyValue.length + defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + 2, to: birdseedCopyValue.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                  ]
                },

                _isCommand: true
              },

              { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
            ];

          } else if (selectedBirdseedCopy === null) {

            const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${selectedDay}/${selectedMonth}/${selectedYear}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

            const defaultTextURLOne = ` www.dell.com.br.\r\r`

            const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

            const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

            const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses.\r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

            // Concatena o birdseedCopyValue antes do texto padr\u00e3o
            const BirdseedCopy = defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


            batchBirdseedCopy = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

              {
                _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                to: {
                  _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                    { _obj: "textStyleRange", from: 0, to: defaultTextSliceOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: defaultTextSliceOne.length, to: defaultTextSliceOne.length + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                    { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                    { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                  ]
                },

                _isCommand: true
              },

              { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
            ];

          }

          const resultBirdseedBoundingBox = await batchPlay(batchBirdseedCopy, {});
          const birdseedBoundingBox = resultBirdseedBoundingBox[2].bounds;
          const finalCropValue = birdseedBoundingBox.bottom._value;

          const finalCrop = [
            { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 564 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 564 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
          ]
          await batchPlay(finalCrop, {});

          const secondDocument = app.documents[1];
          const birdseedWidth = secondDocument.width;
          birdseedHeight = secondDocument.height;

          const selectAndCopy = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ]
          await batchPlay(selectAndCopy, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;


          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (birdseedWidth / 2) + 43);
          // let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyBannerHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight;
          const offsetY = (docHeight - docHeight) - (docHeight / 2) + (birdseedHeight / 2) + offsetModules + 20;

          pastedGroup.translate(offsetX, offsetY);

          console.log('%cBirdseed inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir o Birdseed:', error);
        }
      };

      const options = {
        commandName: 'Inserir Birdseed',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Birdseed:', error);
    }
  };

  // Função para ajustar o documento após a colocar os módulos

  async function fitToScreenPos() {

    // const allModulesSizes = (slHeight + 30) + fundingHeight + skinnyBannerHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight + (birdseedHeight + 20) + 40;

    const targetFunction = async (executionContext) => {
      try {
        const batchCropDocument = [
          { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: parseFloat(allModulesSizes) }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
        ]

        await batchPlay(batchCropDocument, {});

        const batchZoomFit = [

          { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { ialogOptions: "dontDisplay", }, },];

        // Ajuste para "wait" para aguardar a conclus\u00e3o do comando
        await batchPlay(batchZoomFit, {});

        console.log('%cFit final executado com sucesso!', 'color: #00EAADFF;');
      } catch (error) {
        console.error('N\u00e3o foi poss\u00edvel ajustar o zoom para "Fit on Screen Pos":', error);
      }
    }

    const options = {
      commandName: 'Ajuste de documento pos montagem',
      interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
  };

  // Execu\u00e7\u00e3o de todas as fun\u00e7\u00f5es por bot\u00e3o

  const handleMontarLayoutClick = async () => {

    try {
      var birdseedHeight = await handleBirdseedSelect(selectedBirdseed, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, footerHeight);

      await fitToScreenPos(slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight, birdseedHeight);

      console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
    } catch (error) {
      console.error('Erro ao montar o layout:', error);
    }
  };


  // UI do Plugin
  return (
    <Theme theme="spectrum" scale="medium" color="light">
      <AppProvider className="wrapper">
        <CsvReader />
        <EmailBuilder />
        <SubjectLineSelector />
        <ColorSelector />
        <div style={{ display: "flex", flexWrap: "wrap" }} className="group"><sp-label>Header & Funding</sp-label>
          <HeaderSelector />
          <FundingSelector />
        </div>
        <SkinnySelector />
        <HeroSelector />
        <PluginSelector />
        <FpoSelector />
        <BannerSelector />
        <FooterSelector />
        <BirdseedSelector handleBirdseedSelect={setSelectedBirdseed} handleBirdseedCopy={setSelectedBirdseedCopy} onDateChange={handleDateChange} onBirdseedCopyChange={handleBirdseedCopyChange} />
        {/* <sp-button style={{ marginTop: "8px" }} onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button> */}
      </AppProvider>
    </Theme>
  );
}

export default App;