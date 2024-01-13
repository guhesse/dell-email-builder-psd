// Import de todas as fun\u00e7\u00f5es 

import React, { useState, useEffect, createContext, useContext } from 'react';
import CsvReader from './CsvReader.js';
import HeaderSelector from "./HeaderSelector.js";
import SubjectLineSelector from './SubjectLineSelector.js';
import ColorSelector from './ColorSelector.js';
import SkinnySelector from './SkinnySelector.js';
import HeroSelector from './HeroSelector.js';
import PluginSelector from './PluginSelector.js';
import FundingSelector from './FundingSelector.js';
import FpoSelector from './fpoSelector.js';
import BannerSelector from './BannerSelector.js';
import FooterSelector from './FooterSelector.js';
import BirdseedSelector from './BirdseedSelector.js';
import Hero1Lifestyle from './HeroLayout/hero1lifestyle.jsx';
import Hero2Promotion from './HeroLayout/hero2promotion.jsx';

import { Theme } from "@swc-react/theme";
export const { core, app } = require('photoshop');
export const { storage } = require('uxp');
export const { batchPlay } = require('photoshop').action;

import AppProvider from './context/AppProvider.js';
import CsvProvider from './context/CsvProvider.js';
import { useCsvContext } from './context/CsvProvider.js';

// Aqui ele deve pegar os valores do CSV


// Vari\u00e1veis das alturas dos m\u00f3dulos

var slHeight = "";
var headerHeight = "";
var fundingHeight = "";
var heroHeight = "";
var pluginHeight = "";
var fpoHeight = "";
var bannerHeight = "";
var footerHeight = "";
var birdseedHeight = "";
var skinnyBannerHeight = "";


// Fun\u00e7\u00e3o para definir limite de caracter por linha

export function limitCharsPerLine(text, limit) {
  const words = text.split(' ');
  let currentLine = '';
  let result = '';

  for (const word of words) {
    if ((currentLine + word).length <= limit) {
      currentLine += (currentLine === '' ? '' : ' ') + word;
    } else {
      result += (result === '' ? '' : '\r') + currentLine;
      currentLine = word;
    }
  }

  result += (result === '' ? '' : '\r') + currentLine;

  return result;
}


function App() {


  // Tratar os valores

  const [appValues, setAppValues] = useState({
    slValue: '',
    sslValue: '',
    fundingCopyValue: '',
    badgeValue: '',
    headlineValue: '',
    subHeadlineValue: '',
    heroCtaValue: '',
  });

  useEffect(() => {
    updateHeroCopyValues(appValues);
  }, [appValues]);

  const updateHeroCopyValues = (values) => {
    setHeroCopyValues((prevHeroCopyValues) => ({
      ...prevHeroCopyValues,
      badgeValue: values.badgeValue || '',
      headlineValue: values.headlineValue || '',
      subHeadlineValue: values.subHeadlineValue || '',
      heroCtaValue: values.heroCtaValue || '',
      // Adicione outras propriedades conforme necessário
    }));
  };

  const handleAppValues = (editedValues) => {
    setAppValues((prevAppValues) => ({
      ...prevAppValues,
      slValue: editedValues.SL || '',
      sslValue: editedValues.SSL || '',
      fundingCopyValue: editedValues['Funding/WEP Content'] || '',
      badgeValue: editedValues['Badge Text'] || '',
      headlineValue: editedValues['Headline Text'] || '',
      subHeadlineValue: editedValues['SHL'] || '',
      heroCtaValue: editedValues['HERO CTA1 Text'] || '',
    }));



    updateHeroCopyValues({
      ...appValues,
      ...editedValues,
    });
  };

  const [selectedColorValues, setSelectedColorValues] = useState(null);

  const initialAccentColorValues = {
    redAccent: 36,
    greenAccent: 71,
    blueAccent: 57
  };

  const initialSecondaryColorValues = {
    redSecondary: 159,
    greenSecondary: 255,
    blueSecondary: 153
  };

  const initialTertiaryColorValues = {
    redTertiary: 191,
    greenTertiary: 255,
    blueTertiary: 183
  };

  const [accentColorValues, setAccentColorValues] = useState(initialAccentColorValues);
  const [secondaryColorValues, setSecondaryColorValues] = useState(initialSecondaryColorValues);
  const [tertiaryColorValues, setTertiaryColorValues] = useState(initialTertiaryColorValues);

  const handleAccentColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
      setAccentColorValues({
        redAccent: values.rgbValues.r,
        greenAccent: values.rgbValues.g,
        blueAccent: values.rgbValues.b
      });
    }
  };

  const handleSecondaryColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
      setSecondaryColorValues({
        redSecondary: values.rgbValues.r,
        greenSecondary: values.rgbValues.g,
        blueSecondary: values.rgbValues.b
      });
    }
  };


  const handleTertiaryColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
      setTertiaryColorValues({
        redTertiary: values.rgbValues.r,
        greenTertiary: values.rgbValues.g,
        blueTertiary: values.rgbValues.b
      });
    }
  };

  const { redAccent, greenAccent, blueAccent } = accentColorValues;

  const { redSecondary, greenSecondary, blueSecondary } = secondaryColorValues;

  const { redTertiary, greenTertiary, blueTertiary } = tertiaryColorValues;


  // Fun\u00e7\u00e3o para limpar todas as alturas antes de montar o layout novamente 

  async function clearAllHeights() {
    slHeight = "";
    headerHeight = "";
    fundingHeight = "";
    heroHeight = "";
    pluginHeight = "";
    fpoHeight = "";
    bannerHeight = "";
    footerHeight = "";
    birdseedHeight = "";
  }



  // Fun\u00e7\u00e3o para deletar todas as camadas antes de colocar os m\u00f3dulos

  async function clearAllLayers() {
    const targetFunction = async () => {
      try {
        // Deleta todas as camadas
        const deleteAllLayers = [
          { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [3155, 3156, 3157], _options: { dialogOptions: "dontDisplay" } }
        ];

        await batchPlay(deleteAllLayers, {});

        console.log('%cCamadas deletadas com sucesso!', 'color: #00EAADFF;');
      } catch (error) {
        // Ignora o erro relacionado à seleção de camadas
        if (error.message.includes('select')) {
          // Não faz nada ou lida com o erro silenciosamente se preferir
          // Por exemplo, console.log('Não foi possível selecionar as camadas para deletar.');
        } else {
          console.error('Não foi possível deletar as Camadas', error);
        }
      }
    };

    const options = {
      commandName: 'Deletar todas as camadas',
      interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
  }



  // Fim da fun\u00e7\u00e3o para deletar todas as camadas antes de colocar os m\u00f3dulos


  // Fun\u00e7\u00e3o para aumentar o tamanho do documento e ajustar o zoom para fit to screen

  async function fitToScreenPre() {
    const targetFunction = async (executionContext) => {
      try {

        // Define a cor do Background Padr\u00e3o
        const batchDefineBaseBackground = [
          { _obj: "set", _target: [{ _ref: "color", _property: "backgroundColor" }], to: { _obj: "HSBColorClass", hue: { _unit: "angleUnit", _value: 0 }, saturation: 0, brightness: 100 }, source: "photoshopPicker", _options: { dialogOptions: "dontDisplay" } }
        ]

        await batchPlay(batchDefineBaseBackground, {});

        // Aumenta o tamanho do documento
        const batchCropDocument = [
          { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 5000.223315669948 }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
        ]

        await batchPlay(batchCropDocument, {});

        // Ajusta o zoom para Fit to Screen
        const batchZoomFit = [
          { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { dialogOptions: "dontDisplay", }, },
        ];

        await batchPlay(batchZoomFit, {});

        console.log('%cFit inicial executado com sucesso!', 'color: #00EAADFF;');
      } catch (error) {
        console.error('N\u00e3o foi poss\u00edvel ajustar o zoom para "Fit on Screen":', error);
      }
    }

    const options = {
      commandName: 'Ajuste de documento pre montagem',
      interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
  };

  // Fim da fun\u00e7\u00e3o para aumentar o tamanho do documento e ajustar o zoom para fit to screen


  // Fun\u00e7\u00e3o de moficar e importar o SSL

  const [subjectLineValues, setSubjectLineValues] = useState(null);

  const handleSubjectLineChange = (values) => {
    setSubjectLineValues(values);
  };



  const slValue = subjectLineValues?.slValue || (appValues.slValue.SL !== "" ? appValues.sslValue : '');
  const sslValue = subjectLineValues?.sslValue || (appValues.sslValue.SSL !== "" ? appValues.sslValue : '');

  const sslSelect = async (updatedSLValue) => {

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
          slHeight = secondDocument.height;

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

  // Fun\u00e7\u00e3o de selecionar o Header
  const [selectedHeader, setSelectedHeader] = useState(null);

  const handleHeaderSelect = async (header) => {
    if (!header) {
      console.warn('Header n\u00e3o selecionado');
      headerHeight = 0; // Define a altura como 0 se o "hero" n\u00e3o for selecionado
      return; // Retorna imediatamente sem executar o restante do c\u00f3digo
    }

    const headerFilePath = `assets/headers/${header}.psd`;
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

          // Seleciona o Header, copia e cola
          const headerSelect = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];

          await batchPlay(headerSelect, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (headerWidth / 2) + 40);
          const offsetY = ((docHeight - docHeight) - (docHeight / 2) + (headerHeight / 2) + (slHeight + 30));

          pastedGroup.translate(offsetX, offsetY);

          console.log('%cHeader inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir o Header:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabe\u00e7alho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Header:', error);
    }
  };

  // Fim de fun\u00e7\u00e3o de selecionar o Header

  // Fun\u00e7\u00e3o de selecionar o Funding

  const [fundingCopyValues, setFundingCopyValues] = useState(null);
  const [selectedFunding, setSelectedFunding] = useState('no-vf');

  const handleFundingCopyChange = (values) => {
    setFundingCopyValues(values);
  };

  const fundingCopyValue = appValues?.fundingCopyValue || (appValues.fundingCopyValue !== "" ? appValues.fundingCopyValue : '')

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

          const formattedfundingCopyValue = limitCharsPerLine(fundingCopyValue || '', 20);

          let batchFundingCopy;

          if (fundingCopyValue === '') {
            batchFundingCopy = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Funding Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: "Visualize no navegador.", textStyleRange: [{ _obj: "textStyleRange", from: 0, to: formattedfundingCopyValue.length + 1 + "Visualize no navegador.".length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 2.4208344268798827 }, impliedFontSize: { _unit: "pointsUnit", _value: 2.4208344268798827 }, baselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, impliedBaselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } }] }, _isCommand: true },
              { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Funding Copy" },], },
            ]
          } else {
            batchFundingCopy = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Funding Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedfundingCopyValue + "\r" + "Visualize no navegador.", textStyleRange: [{ _obj: "textStyleRange", from: 0, to: formattedfundingCopyValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 2.4208344268798827 }, impliedFontSize: { _unit: "pointsUnit", _value: 2.4208344268798827 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } }, { _obj: "textStyleRange", from: formattedfundingCopyValue.length + 1, to: fundingCopyValue.length + 1 + "Visualize no navegador.".length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 2.4208344268798827 }, impliedFontSize: { _unit: "pointsUnit", _value: 2.4208344268798827 }, baselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, impliedBaselineShift: { _unit: "pointsUnit", _value: -1.9999999237060546 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } }] }, _isCommand: true },
              { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Funding Copy" },], },
            ]
          };

          const resultFundingTextBoundingBox = await batchPlay(batchFundingCopy, {});
          const boundingBoxFundingText = resultFundingTextBoundingBox[2].bounds;
          const finalCropValue = boundingBoxFundingText.bottom._value;

          const finalCrop = [
            { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 200 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 200 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
          ]
          await batchPlay(finalCrop, {});

          fundingHeight = secondDocument.height;

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
          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 515);


          let offsetY;

          if ((selectedFunding === 'no-vf')) {
            offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 26));
          } else {
            offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 30));
          }

          pastedGroup.translate(offsetX, offsetY);

          if (selectedHeader !== null) {

            const alignToHeader = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Funding" }], makeVisible: false, layerID: [449], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "Header" }, { _ref: "layer", _name: "Funding" }], makeVisible: false, layerID: [448, 449], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSTops" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" } }
            ]

            await batchPlay(alignToHeader, {});
          }


          console.log('%cFunding inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir o Funding:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabe\u00e7alho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Funding:', error);
    }
  };
  // Fim de fun\u00e7\u00e3o de selecionar o Funding

  // Fun\u00e7\u00e3o de modificar e importar o Skinny Banner

  const [skinnyValues, setSkinnyValues] = useState(null);
  const [selectedSkinny, setSelectedSkinny] = useState(null);

  const handleSkinnyChange = (skinny) => {
    setSkinnyValues(skinny);
  };

  // const skinnyHeadlineValue = skinnyValues?.skinnyHeadlineValue || (csvValues.SL !== "" ? csvValues.SL : '');
  const skinnyHeadlineValue = skinnyValues?.skinnyHeadlineValue || '';
  const skinnyCopyValue = skinnyValues?.skinnyCopyValue || '';

  const handleSkinnySelect = async (skinny) => {

    if (!skinny) {
      console.warn('Skinny não selecionado');
      skinnyBannerHeight = 0;
      return;
    }

    const skinnyFilePath = `assets/skinny-banner/skinny-banner.psd`;
    const fs = storage.localFileSystem;

    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(skinnyFilePath);


      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);

          const secondDocument = app.documents[1];
          const skinnyBannerWidth = secondDocument.width;

          const formattedHeadlineCopyValue = limitCharsPerLine(skinnyHeadlineValue || '', 60);
          const formattedSkinnyCopyValue = limitCharsPerLine(skinnyCopyValue || '', 60);

          const skinnyBannerCopy = formattedHeadlineCopyValue + "\r" + formattedSkinnyCopyValue

          const changeSkinnyBannerCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [4], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
            {
              _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

              to: {
                _obj: "textLayer", textKey: skinnyBannerCopy, textStyleRange: [

                  { _obj: "textStyleRange", from: 0, to: skinnyHeadlineValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "Roboto-Bold", fontName: "Roboto", fontStyleName: "Bold", size: { _unit: "pointsUnit", _value: 20.75 }, color: { _obj: "RGBColor", red: redAccent, green: greenAccent, blue: blueAccent } } },

                  { _obj: "textStyleRange", from: skinnyHeadlineValue.length + 1, to: skinnyHeadlineValue.length + skinnyCopyValue.length + 1, textStyle: { _obj: "textStyle", fontPostScriptName: "Roboto-Regular", fontName: "Roboto", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 20.75 }, color: { _obj: "RGBColor", red: redAccent, green: greenAccent, blue: blueAccent } } },
                ]
              }, _isCommand: true
            },
            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Banner Copy" }], }
          ]
            ;

          await batchPlay(changeSkinnyBannerCopy, {});

          const resultSkinnyBoundingBox = await batchPlay(changeSkinnyBannerCopy, {});
          const boundingBoxSkinnyBanner = resultSkinnyBoundingBox[2].bounds;
          const finalCropValue = boundingBoxSkinnyBanner.bottom._value + 20;

          const finalCrop = [
            { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: redSecondary, grain: greenSecondary, blue: blueSecondary } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },

            { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },

            { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(finalCrop, {});

          skinnyBannerHeight = secondDocument.height;

          const selectAndCopy = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];

          await batchPlay(selectAndCopy, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          if (selectedFunding === "no-vf") {
            fundingHeight = headerHeight
          } else {
          }

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;
          const offsetX = (0 - (docWidth / 2) + (skinnyBannerWidth / 2) + 25);
          let offsetModules = ((slHeight + 30) + (fundingHeight + 20));
          const offsetY = (0 - (docHeight / 2) + (skinnyBannerHeight / 2) + (offsetModules));
          pastedGroup.translate(offsetX, offsetY);

          console.log('%cSkinny Banner inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir Skinny Banner:', error);
        }
      };

      const options = {
        commandName: 'Inserir Skinny Banner',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo de Skinny Banner:', error);
    }
  };

  // Fim de fun\u00e7\u00e3o de modificar e importar o Skinny Banner


  // Fun\u00e7\u00e3o de selecionar o Hero
  const [selectedHero, setSelectedHero] = useState(null);

  const [heroCopyValues, setHeroCopyValues] = useState({
    badgeValue: '',
    headlineValue: '',
    subHeadlineValue: '',
    inlinePromoValue: '',
    inlinePromo2Value: '',
    productNameValue: '',
    productName2Value: '',
    productName3Value: '',
    specsValue: '',
    specs2Value: '',
    priceValue: '',
    price2Value: '',
    heroCtaValue: '',
  });

  const handleHeroCopyChange = (newValues) => {
    setHeroCopyValues({ ...heroCopyValues, ...newValues });
  };


  const handleHeroSelect = async (hero) => {
    if (!hero) {
      console.warn('Hero não selecionado');
      heroHeight = 0;
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

          if (hero === 'hero1-lifestyle') {
            try {
              await Hero1Lifestyle(heroCopyValues, accentColorValues, secondaryColorValues, tertiaryColorValues);
            } catch (error) {
              console.error('Erro ao executar Hero1Lifestyle:', error);
            }
          }

          if (hero === 'hero2-promotion') {
            try {
              await Hero2Promotion(heroCopyValues, colorValues);
            } catch (error) {
              console.error('Erro ao executar Hero2Promotion:', error);
            }
          }

          const heroWidth = secondDocument.width;
          heroHeight = secondDocument.height;

          const copyAllHero = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(copyAllHero, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;

          if (selectedFunding === "no-vf") {
            fundingHeight = headerHeight
          } else {
          }

          const offsetX = (0 - (docWidth / 2) + (heroWidth / 2) + 25);
          let offsetModules = ((slHeight + 30) + (fundingHeight + 20) + (skinnyBannerHeight));
          const offsetY = (0 - (docHeight / 2) + (heroHeight / 2) + (offsetModules));
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
  // Fim de fun\u00e7\u00e3o de selecionar o Hero

  //Fun\u00e7\u00e3o de modificar e importar o Plugin

  const [selectedPlugin, setSelectedPlugin] = useState(null);

  const [pluginCopyValues, setPluginCopyValues] = useState('');

  const [superChargerCopyValues, setSuperChargerCopyValues] = useState('');

  const handlePluginCopyChange = (values) => {
    setPluginCopyValues(values);
  };

  const handleSuperChargerCopyChange = (values) => {
    setSuperChargerCopyValues(values);
  };

  const pluginCopyValue = pluginCopyValues?.pluginCopyValue || '';
  const leftCopyValue = pluginCopyValues?.leftCopyValue || '';
  const middleCopyValue = pluginCopyValues?.middleCopyValue || '';
  const rightCopyValue = pluginCopyValues?.rightCopyValue || '';

  const pluginSelect = async () => {

    let pluginFilePath = "";

    if (selectedPlugin === 'supercharger') {
      pluginFilePath = 'assets/plugins/supercharger.psd';
    } else if (selectedPlugin === 'plugin') {
      pluginFilePath = 'assets/plugins/plugin.psd';
    } else {
      console.warn('Plugin n\u00e3o selecionado');
      pluginHeight = 0; // Define a altura do plugin como 0 quando nenhum plugin for selecionado
      return; // Retorna imediatamente se o plugin n\u00e3o estiver selecionado
    }

    const fs = storage.localFileSystem;

    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(pluginFilePath);

      const formattedPluginCopyValue = limitCharsPerLine(pluginCopyValue || '', 60);
      const formattedleftCopyValue = limitCharsPerLine(leftCopyValue || '', 13);
      const formattedMiddleCopyValue = limitCharsPerLine(middleCopyValue || '', 13);
      const formattedRightCopyValue = limitCharsPerLine(rightCopyValue || '', 13);

      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);

          const secondDocument = app.documents[1];
          const pluginWidth = secondDocument.width;
          pluginHeight = secondDocument.height;

          let batchPluginChange = []

          if (selectedPlugin === 'supercharger') {

            const batchChangeColor = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [3402], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [3335, 3398, 3402], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textStyle", textOverrideFeatureName: 808466226, typeStyleOperationType: 3, color: { _obj: "RGBColor", red: redAccent, grain: greenAccent, blue: blueAccent } }, _options: { dialogOptions: "dontDisplay" } },

              { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], makeVisible: false, layerID: [3332], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "contentLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: redSecondary, grain: greenSecondary, blue: blueSecondary } }, _options: { dialogOptions: "dontDisplay" } },
            ];

            await batchPlay(batchChangeColor, {});

            const batchPluginChange = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedleftCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "2" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedMiddleCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedRightCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [3402], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [3334, 3335, 3398, 3402], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
            ];

            await batchPlay(batchPluginChange, {});

          } else if (selectedPlugin === 'plugin') {

            const batchChangeColor = [
              { _obj: "select", _target: [{ _ref: "textLayer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3335], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" },], to: { _obj: "textStyle", color: { _obj: "RGBColor", red: redAccent, grain: greenAccent, blue: blueAccent }, }, _options: { dialogOptions: "dontDisplay" }, },

              { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }], makeVisible: false, layerID: [3332], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "contentLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: redSecondary, grain: greenSecondary, blue: blueSecondary } }, _options: { dialogOptions: "dontDisplay" } },
            ];

            await batchPlay(batchChangeColor, {});

            const batchPluginChange = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3325], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedPluginCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3325], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "Background" }, { _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3320, 3325], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersH" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" }, },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } },
            ];

            await batchPlay(batchPluginChange, {});

          } else {
            console.error('Plugin n\u00e3o selecionado')
            return;
          }

          await batchPlay(batchPluginChange, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();
          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;


          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (pluginWidth / 2) + 25);
          let offsetModules = (slHeight + 30) + (fundingHeight + 20) + heroHeight + skinnyBannerHeight;
          const offsetY = (0 - (docHeight / 2) + (pluginHeight / 2) + (offsetModules));
          pastedGroup.translate(offsetX, offsetY);

          console.log('%cPlugin inserido com sucesso!', 'color: #00EAADFF;');
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

  // Fim de fun\u00e7\u00e3o de modificar e importar o Plugin



  // Fun\u00e7\u00e3o de importar o FPO

  const [selectedFpoValue, setSelectedFpoValue] = useState(null);
  const [selectedFpoSegment, setSelectedFpoSegment] = useState("sb");

  const handleFpoSelect = async () => {

    if (selectedFpoValue === null) {
      console.warn('Fpo n\u00e3o selecionado');
      fpoHeight = 0; // Define a altura do plugin como 0 quando nenhum plugin for selecionado
      return; // Retorna imediatamente se o plugin n\u00e3o estiver selecionado
    } else {
    }

    try {
      const fs = storage.localFileSystem;
      const pluginDir = await fs.getPluginFolder();
      let fpoFilePath;
      for (let i = 1; i <= selectedFpoValue; i++) {
        fpoFilePath = `assets/fpo/${selectedFpoSegment}/${i}.psd`;
      }
      const fileEntry = await pluginDir.getEntry(fpoFilePath)
      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);
          const secondDocument = app.documents[1];
          const fpoWidth = secondDocument.width;
          fpoHeight = secondDocument.height;

          const batchFPO = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];

          await batchPlay(batchFPO, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (fpoWidth / 2) + 25);
          let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyBannerHeight + heroHeight + pluginHeight;
          const offsetY = (0 - (docHeight / 2) + (fpoHeight / 2) + (offsetModules));

          pastedGroup.translate(offsetX, offsetY);

          console.log('%cFPO inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir o FPO:', error);
        }
      };

      const options = {
        commandName: 'Inserir FPO',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do FPO:', error);
    }
  };

  // Fim de fun\u00e7\u00e3o de importar o FPO


  // In\u00edcio da fun\u00e7\u00e3o de importar o Banner

  const [selectedBannerPosition, setSelectedBannerPosition] = useState(null);
  const [bannerCopyValues, setBannerCopyValues] = useState('');


  const handleBannerCopyChange = (values) => {
    setBannerCopyValues(values);
  };


  const bannerHeadlineValue = bannerCopyValues?.bannerHeadlineValue || '';
  const bannerCopyValue = bannerCopyValues?.bannerCopyValue || '';
  const bannerCtaValue = bannerCopyValues?.bannerCtaValue || '';

  const formattedBannerHeadlineValue = limitCharsPerLine(bannerHeadlineValue || '', 27);
  const formattedBannerCopyValue = limitCharsPerLine(bannerCopyValue || '', 60);

  const handleBannerSelect = async () => {
    try {

      if (selectedBannerPosition === null) {
        console.warn('Banner n\u00e3o selecionado');
        bannerHeight = 0; // Define a altura do plugin como 0 quando nenhum plugin for selecionado
        return; // Retorna imediatamente se o plugin n\u00e3o estiver selecionado
      } else {
      }

      const fs = storage.localFileSystem;
      const pluginDir = await fs.getPluginFolder();

      let bannerFilePath;

      if (selectedBannerPosition === 'left') {
        bannerFilePath = 'assets/banners/left.psd';
      } else if (selectedBannerPosition === 'right') {
        bannerFilePath = 'assets/banners/right.psd';
      } else {
        bannerFilePath = null;
      }

      const fileEntry = await pluginDir.getEntry(bannerFilePath)

      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);
          const secondDocument = app.documents[1];
          const bannerWidth = secondDocument.width;
          bannerHeight = secondDocument.height;

          const batchChangeBannerCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedBannerHeadlineValue } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedBannerCopyValue } },
            { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Banner Headline" },], },
          ];

          const resultBoundingBoxBannerHeadline = await batchPlay(batchChangeBannerCopy, {});
          const boundingBoxBannerHeadline = resultBoundingBoxBannerHeadline[4].boundingBox;
          const bannerCopyPadding = 16;
          const newBannerCopyPosition = boundingBoxBannerHeadline.height._value + bannerCopyPadding;

          const offsetBannerCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _name: "Banner Copy", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newBannerCopyPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
            { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Banner Copy" },], },
          ];

          const resultBannerCopyBoundingBox = await batchPlay(offsetBannerCopy, {});
          const boundingBoxBannerCopy = resultBannerCopyBoundingBox[2].boundingBox;
          const ctaPadding = bannerCopyPadding + 18;
          const newCtaPosition = boundingBoxBannerCopy.height._value + boundingBoxBannerHeadline.height._value + ctaPadding;

          const changeCtaCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Copy" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: bannerCtaValue } },
            { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "CTA Copy" },], },
          ]

          const resultCtaCopyBoundingBox = await batchPlay(changeCtaCopy, {});
          const boundingBoxCtaCopy = resultCtaCopyBoundingBox[2].boundingBox;
          const newBorderCta = boundingBoxCtaCopy.width._value + 20

          const resizeCtaBorder = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], makeVisible: false, layerID: [7772], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "transform", _target: [{ _ref: "path", _enum: "ordinal", _value: "targetEnum" }], freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" }, offset: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0 }, vertical: { _unit: "pixelsUnit", _value: 0 } }, width: { _unit: "pixelsUnit", _value: newBorderCta }, },
            { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [7771], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [7772, 7770, 7771], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
          ]

          await batchPlay(resizeCtaBorder, {});

          const offsetCta = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9845], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _name: "CTA", }], makeVisible: false, layerID: [9845], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newCtaPosition, } }, _options: { dialogOptions: "dontDisplay" }, }
          ];

          await batchPlay(offsetCta, {});

          const alignCopyVertical = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Copy" }], makeVisible: false, layerID: [7739], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Banner Image" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelection" }, makeVisible: false, layerID: [7739, 7743], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: false, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(alignCopyVertical, {});

          const finalCrop = [
            { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 210 }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 210 }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(finalCrop, {});

          const batchBannerCopyAndPaste = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(batchBannerCopyAndPaste, {});


          const activeDocument = app.activeDocument;
          await activeDocument.paste();

          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;


          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (bannerWidth / 2) + 25);
          let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyBannerHeight + heroHeight + pluginHeight + fpoHeight;
          const offsetY = (0 - (docHeight / 2) + (bannerHeight / 2) + offsetModules);

          pastedGroup.translate(offsetX, offsetY);

          console.log('%cBanner inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir o Banner:', error);
        }
      };

      const options = {
        commandName: 'Inserir Banner',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Banner:', error);
    }
  };

  // Fim da fun\u00e7\u00e3o de importar o Banner


  // Fun\u00e7\u00e3o de selecionar o Footer
  const [selectedFooter, setSelectedFooter] = useState(null);

  const handleFooterSelect = async (footer) => {
    const footerFilePath = `assets/footers/${footer}.psd`;
    const fs = storage.localFileSystem;
    try {

      if (!footer) {
        console.warn('Footer n\u00e3o selecionado');
        footerHeight = 0;
        return;
      }

      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(footerFilePath);

      const targetFunction = async (executionContext) => {

        try {
          await app.open(fileEntry);
          const secondDocument = app.documents[1];
          const footerWidth = secondDocument.width;
          footerHeight = secondDocument.height;

          const footerSelect = [
            { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          ];
          await batchPlay(footerSelect, {});

          const activeDocument = app.activeDocument;
          await activeDocument.paste();


          const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          const docWidth = activeDocument.width;
          const docHeight = activeDocument.height;

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 45);
          let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyBannerHeight + heroHeight + pluginHeight + fpoHeight + bannerHeight;
          const offsetY = (docHeight - docHeight) - (docHeight / 2) + (footerHeight / 2) + 10 + offsetModules;

          pastedGroup.translate(offsetX, offsetY);

          console.log('%cFooter inserido com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
          console.error('Erro ao inserir o Footer:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabe\u00e7alho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Footer:', error);
    }
  };

  // Fim de fun\u00e7\u00e3o de selecionar o Footer

  // Fun\u00e7\u00e3o de selecionar o Birdseed

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
          let offsetModules = (slHeight + 30) + (fundingHeight + 20) + skinnyBannerHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight;
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

  // Fim da Fun\u00e7\u00e3o de selecionar o Birdseed

  // Fun\u00e7\u00e3o para ajustar o documento ap\u00f3s a coloca\u00e7\u00e3o dos m\u00f3dulos

  async function fitToScreenPos() {

    const allModulesSizes = (slHeight + 30) + fundingHeight + skinnyBannerHeight + heroHeight + pluginHeight + fpoHeight + (bannerHeight + 10) + footerHeight + (birdseedHeight + 20) + 40;

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

  // Fim da fun\u00e7\u00e3o para ajustar o documento ap\u00f3s a coloca\u00e7\u00e3o dos m\u00f3dulos


  // Execu\u00e7\u00e3o de todas as fun\u00e7\u00f5es por bot\u00e3o


  const handleMontarLayoutClick = async () => {

    try {
      await clearAllLayers();
      await clearAllHeights();
      await fitToScreenPre();
      var slHeight = await sslSelect();
      var headerHeight = await handleHeaderSelect(selectedHeader, slHeight);
      var fundingHeight = await handleFundingSelect(selectedFunding, headerHeight, slHeight);
      var skinnyBannerHeight = await handleSkinnySelect(selectedSkinny, slHeight, headerHeight, fundingHeight);
      var heroHeight = await handleHeroSelect(selectedHero, slHeight, headerHeight, fundingHeight, skinnyBannerHeight);
      var pluginHeight = await pluginSelect(selectedPlugin, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight);
      var fpoHeight = await handleFpoSelect(selectedFpoValue, selectedFpoSegment, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight);
      var bannerHeight = await handleBannerSelect(selectedBannerPosition, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight);
      var footerHeight = await handleFooterSelect(selectedFooter, slHeight, headerHeight, fundingHeight, skinnyBannerHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight)
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
        <CsvProvider>
          <CsvReader onAppValuesChange={handleAppValues} />
          <SubjectLineSelector onSubjectLineChange={handleSubjectLineChange} />
          <ColorSelector onAccentColorChange={handleAccentColorChange} onSecondaryColorChange={handleSecondaryColorChange} onTertiaryColorChange={handleTertiaryColorChange} />
          <div style={{ display: "flex", flexWrap: "wrap" }} className="group"><sp-label>Header & Funding</sp-label>
            <HeaderSelector handleHeaderSelect={setSelectedHeader} />
            <FundingSelector handleFundingSelect={setSelectedFunding} onFundingCopyChange={handleFundingCopyChange} />
          </div>
          <SkinnySelector handleSkinnySelect={setSelectedSkinny} onSkinnyChange={handleSkinnyChange}></SkinnySelector>
          <HeroSelector handleHeroSelect={setSelectedHero} onHeroCopyChange={handleHeroCopyChange} />
          <PluginSelector handlePluginSelect={setSelectedPlugin} onPluginCopyChange={handlePluginCopyChange} />
          <FpoSelector handleFpoValueSelect={setSelectedFpoValue} handleFpoSegmentSelect={setSelectedFpoSegment} />
          <BannerSelector handleBannerPositionSelected={setSelectedBannerPosition} onBannerCopyChange={handleBannerCopyChange} />
          <FooterSelector handleFooterSelect={setSelectedFooter} />
          <BirdseedSelector handleBirdseedSelect={setSelectedBirdseed} handleBirdseedCopy={setSelectedBirdseedCopy} onDateChange={handleDateChange} onBirdseedCopyChange={handleBirdseedCopyChange} />
        </CsvProvider>
        <sp-button style={{ marginTop: "8px" }} onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button>
      </AppProvider>
    </Theme>
  );
}

export default App;