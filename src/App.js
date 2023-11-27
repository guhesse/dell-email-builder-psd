// Import de todas as funções 

import React, { useState, useEffect } from 'react';
import HeaderSelector from "./HeaderSelector.js";
import SubjectLineSelector from './SubjectLineSelector.js';
import AccentColorSelector from './AccentColorSelector.js';
import HeroSelector from './HeroSelector.js';
import PluginSelector from './PluginSelector.js';
import FundingSelector from './FundingSelector.js';
import FpoSelector from './fpoSelector.js';
import BannerSelector from './BannerSelector.js';
import FooterSelector from './FooterSelector.js';
import BirdseedSelector from './BirdseedSelector.js';

import { Theme } from "@swc-react/theme";
const { core, app } = require('photoshop');
const { storage } = require('uxp');
const { batchPlay } = require('photoshop').action;


// Variáveis das alturas dos módulos

var slHeight = "";
var headerHeight = "";
var fundingHeight = "";
var heroHeight = "";
var pluginHeight = "";
var fpoHeight = "";
var bannerHeight = "";
var footerHeight = "";
var birdseedHeight = "";


// Função para definir limite de caracter por linha

function limitCharsPerLine(text, limit) {
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

  // Seleciona a Accent Color e a define

  const [selectedColorValues, setSelectedColorValues] = useState(null);

  const [redValue, setRedValue] = useState(6);
  const [greenValue, setGreenValue] = useState(114);
  const [blueValue, setBlueValue] = useState(203);

  const handleAccentColorChange = (values) => {
    setSelectedColorValues(values);

    if (values) {
      setRedValue(values.rgbValues.r);
      setGreenValue(values.rgbValues.g);
      setBlueValue(values.rgbValues.b);
    }
  };

  // Função para deletar todas as camadas antes de colocar os módulos

  async function clearAllLayers() {
    const targetFunction = async (executionContext) => {
      try {

        // Deleta todas as camadas
        const deleteAllLayers = [
          { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
          { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [3155, 3156, 3157], _options: { dialogOptions: "dontDisplay" } }
        ]

        await batchPlay(deleteAllLayers, {});

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

  // Fim da função para deletar todas as camadas antes de colocar os módulos

  // Função para aumentar o tamanho do documento e ajustar o zoom para fit to screen

  async function fitToScreenPre() {
    const targetFunction = async (executionContext) => {
      try {

        // Define a cor do Background Padrão
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

  // Fim da função para aumentar o tamanho do documento e ajustar o zoom para fit to screen


  // Função de moficar e importar o SSL

  const [subjectLineValues, setSubjectLineValues] = useState(null);

  const handleSubjectLineChange = (values) => {
    setSubjectLineValues(values);
  };

  const slValue = subjectLineValues?.slValue || '';
  const sslValue = subjectLineValues?.sslValue || '';

  const sslSelect = async () => {
    const sslFilePath = `assets/sl-ssl/SL & SSL.psd`;
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

          // Função que troca o texto do SL e SSL
          const changeSLCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "SL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `SL PT :  ${slValue}`, } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "SSL" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `SSL :  ${sslValue}`, } }
          ];

          await batchPlay(changeSLCopy, {});

          // Função que copia e cola o módulo
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

  // Função de selecionar o Header
  const [selectedHeader, setSelectedHeader] = useState(null);

  const handleHeaderSelect = async (header) => {
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

  // Função de selecionar o Funding

  const [fundingCopyValues, setFundingCopyValues] = useState(null);
  const [selectedFunding, setSelectedFunding] = useState(null);

  const handleFundingCopyChange = (values) => {
    setFundingCopyValues(values);
  };

  const fundingCopyValue = fundingCopyValues?.fundingCopyValue || '';

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
          fundingHeight = secondDocument.height;

          const formattedfundingCopyValue = limitCharsPerLine(fundingCopyValue || '', 25);

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

          if ((selectedFunding === null || selectedFunding === 'no-vf')) {
            offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight));
          } else {
            offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 30));
          }

          pastedGroup.translate(offsetX, offsetY);

          console.log('Funding inserido com sucesso!');
        } catch (error) {
          console.error('Erro ao inserir o Funding:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabeçalho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Funding:', error);
    }
  };
  // Fim de função de selecionar o Funding


  // Função de selecionar o Hero
  const [selectedHero, setSelectedHero] = useState(null);

  const [heroCopyValues, setHeroCopyValues] = useState(null);

  const handleHeroCopyChange = (values) => {
    setHeroCopyValues(values);
  };

  const badgeValue = heroCopyValues?.badgeValue || '';
  const headlineValue = heroCopyValues?.headlineValue || '';
  const subHeadlineValue = heroCopyValues?.subHeadlineValue || '';

  function formatHeadlineCopy(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }


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


          const batchChangeColor = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" }, },
            { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" },], to: { _obj: "textStyle", color: { _obj: "RGBColor", red: redValue, grain: greenValue, blue: blueValue }, }, _options: { dialogOptions: "dontDisplay" }, },
          ];


          const formattedHeadlineValue = limitCharsPerLine(headlineValue ? formatHeadlineCopy(headlineValue) : '', 20);
          const formattedSubHeadlineValue = limitCharsPerLine(subHeadlineValue || '', 40);

          await batchPlay(batchChangeColor, {});

          const ChangeHeroCopy = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${badgeValue}`, } },
            { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Badge" },], },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${formattedHeadlineValue}`, } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: `${formattedSubHeadlineValue}`, } },
          ];

          const resultBoundingBoxBadge = await batchPlay(ChangeHeroCopy, {});
          const boundingBoxBadge = resultBoundingBoxBadge[2].boundingBox;
          const headlinePadding = 30;
          const newHeadlinePosition = boundingBoxBadge.height._value + headlinePadding;

          const offsetHeadline = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _name: "Headline", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newHeadlinePosition, } }, _options: { dialogOptions: "dontDisplay" }, },
            { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Headline" },], },
          ];

          const resultHeadlineBoundingBox = await batchPlay(offsetHeadline, {});
          const boundingBoxHeadline = resultHeadlineBoundingBox[2].boundingBox;
          const subheadlinePadding = headlinePadding + 30;
          const newSubheadlinePosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + subheadlinePadding;


          const offsetSubheadline = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _name: "Subheadline", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newSubheadlinePosition, } }, _options: { dialogOptions: "dontDisplay" }, },
            { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Subheadline" },], },
          ];

          const resultSubheadlineBoundingBox = await batchPlay(offsetSubheadline, {});
          const boundingBoxSubheadline = resultSubheadlineBoundingBox[2].boundingBox;
          const productPadding = subheadlinePadding + 40;
          const newProductPosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + boundingBoxSubheadline.height._value + productPadding;

          const offsetProduct = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "Product" }], makeVisible: false, layerID: [9790], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Specs / Text / Carbon" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [9780, 9781, 9782, 9783, 9784, 9787, 9788, 9789, 9785, 9790], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Product" }], makeVisible: false, layerID: [9834], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _name: "Product", }], makeVisible: false, layerID: [9834], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newProductPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Product" },], },
          ];

          const resultProductBoundingBox = await batchPlay(offsetProduct, {});
          const boundingBoxProduct = resultProductBoundingBox[5].bounds;
          const ctaPadding = productPadding + 30;
          const newCtaPosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + boundingBoxSubheadline.height._value + boundingBoxProduct.height._value + ctaPadding;

          const offsetCta = [
            { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9833], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Button / Outline / Carbon" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [9821, 9822, 9823, 9825, 9826, 9827, 9828, 9830, 9831, 9832, 9833], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9845], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _name: "CTA", }], makeVisible: false, layerID: [9845], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newCtaPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
            { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "CTA" },], },
          ];

          const resultCtaBoundingBox = await batchPlay(offsetCta, {});
          const boundingBoxCta = resultCtaBoundingBox[5].bounds;
          const finalCropValue = boundingBoxCta.bottom._value + 30;

          const finalCrop = [
            { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(finalCrop, {});

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

          if ((selectedFunding === null || selectedFunding === 'no-vf') && headerHeight === null) {
            fundingHeight = 0;
          } else if (selectedFunding === null || selectedFunding === 'no-vf') {
            fundingHeight = headerHeight;
          } else { }

          if (selectedHeader === null) { headerHeight = 0; }
          else { }

          const offsetX = (0 - (docWidth / 2) + (heroWidth / 2) + 25);
          let offsetModules = ((slHeight + 30) + (fundingHeight)); //- (heroPaddingTop) / 2
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

  //Função de modificar e importar o Plugin

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
  const leftCopyValue = superChargerCopyValues?.leftCopyValue || '';
  const middleCopyValue = superChargerCopyValues?.middleCopyValue || '';
  const rightCopyValue = superChargerCopyValues?.rightCopyValue || '';

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

      const formattedPluginCopyValue = limitCharsPerLine(pluginCopyValue || '', 50);
      const formattedleftCopyValue = limitCharsPerLine(leftCopyValue || '', 13);
      const formattedMiddleCopyValue = limitCharsPerLine(middleCopyValue || '', 13);
      const formattedRightCopyValue = limitCharsPerLine(rightCopyValue || '', 13);

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
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedleftCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "2" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedMiddleCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedRightCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "1" }], makeVisible: false, layerID: [3402], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "3" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [3335, 3398, 3402], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: true, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
              { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
            ];
          } else if (selectedPlugin === 'plugin') {
            batchPluginChange = [
              { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3325], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedPluginCopyValue } },
              { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin Copy" }], makeVisible: false, layerID: [3325], _options: { dialogOptions: "dontDisplay" } },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersH" }, alignToCanvas: true, _options: { dialogOptions: "dontDisplay" } },
              { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: true, _options: { dialogOptions: "dontDisplay" } },
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

          if ((selectedFunding === null || selectedFunding === 'no-vf') && headerHeight === null) {
            fundingHeight = 0;
          } else if (selectedFunding === null || selectedFunding === 'no-vf') {
            fundingHeight = headerHeight;
          } else { }

          if (selectedHeader === null) { headerHeight = 0; }
          else { }

          if (selectedHero === null) { heroHeight = 0; }
          else { }

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (pluginWidth / 2) + 25);
          let offsetModules = (slHeight + 30) + (fundingHeight) + (heroHeight);
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

  // Função de importar o FPO

  const [selectedFpoValue, setSelectedFpoValue] = useState(null);
  const [selectedFpoSegment, setSelectedFpoSegment] = useState("sb");

  const handleFpoSelect = async () => {
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

          if ((selectedFunding === null || selectedFunding === 'no-vf') && headerHeight === null) {
            fundingHeight = 0;
          } else if (selectedFunding === null || selectedFunding === 'no-vf') {
            fundingHeight = headerHeight;
          } else { }

          if (selectedHeader === null) { headerHeight = 0; }
          else { }

          if (selectedHero === null) { heroHeight = 0; }
          else { }

          if (selectedPlugin === null) { pluginHeight = 0; }
          else { }

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (fpoWidth / 2) + 25);
          let offsetModules = (slHeight + 30) + fundingHeight + heroHeight + pluginHeight;
          const offsetY = (0 - (docHeight / 2) + (fpoHeight / 2) + (offsetModules));

          pastedGroup.translate(offsetX, offsetY);

          console.log('FPO inserido com sucesso!');
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

  // Fim de função de importar o FPO


  // Início da função de importar o Banner

  const [selectedBannerPosition, setSelectedBannerPosition] = useState(null);
  const [bannerHeadlineValues, setBannerHeadlineValues] = useState('');
  const [bannerCopyValues, setBannerCopyValues] = useState('');
  const [bannerCtaValues, setBannerCtaValues] = useState('');

  const handleBannerHeadlineChange = (values) => {
    setBannerHeadlineValues(values);
  };

  const handleBannerCopyChange = (values) => {
    setBannerCopyValues(values);
  };

  const handleBannerCtaChange = (values) => {
    setBannerCtaValues(values);
  };

  const bannerHeadlineValue = bannerHeadlineValues?.bannerHeadlineValue || '';
  const bannerCopyValue = bannerCopyValues?.bannerCopyValue || '';
  const bannerCtaValue = bannerCtaValues?.bannerCtaValue || '';

  const formattedBannerHeadlineValue = limitCharsPerLine(bannerHeadlineValue || '', 27);
  const formattedBannerCopyValue = limitCharsPerLine(bannerCopyValue || '', 60);

  const handleBannerSelect = async () => {
    try {

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
            { _obj: "select", _target: [{ _ref: "layer", _name: "Copy" }], makeVisible: false, layerID: [7788], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "align", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], using: { _enum: "alignDistributeSelector", _value: "ADSCentersV" }, alignToCanvas: true, _options: { dialogOptions: "dontDisplay" } }
          ]

          await batchPlay(alignCopyVertical, {});

          const finalCrop = [
            { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 230 }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
            { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
            { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 230 }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
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

          if ((selectedFunding === null || selectedFunding === 'no-vf') && headerHeight === null) {
            fundingHeight = 0;
          } else if (selectedFunding === null || selectedFunding === 'no-vf') {
            fundingHeight = headerHeight;
          } else { }

          if (selectedHeader === null) { headerHeight = 0; }
          else { }

          if (selectedHero === null) { heroHeight = 0; }
          else { }

          if (selectedPlugin === null) { pluginHeight = 0; }
          else { }

          if (selectedFpoValue === null) { fpoHeight = 0; }
          else { }

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (bannerWidth / 2) + 25);
          let offsetModules = (slHeight + 30) + fundingHeight + heroHeight + pluginHeight + fpoHeight;
          const offsetY = (0 - (docHeight / 2) + (bannerHeight / 2) + offsetModules);

          pastedGroup.translate(offsetX, offsetY);

          console.log('Banner inserido com sucesso!');
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

  // Fim da função de importar o Banner

  // Função de selecionar o Footer
  const [selectedFooter, setSelectedFooter] = useState(null);

  const handleFooterSelect = async (footer) => {
    const footerFilePath = `assets/footers/${footer}.psd`;
    const fs = storage.localFileSystem;
    try {
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


          if ((selectedFunding === null || selectedFunding === 'no-vf') && headerHeight === null) {
            fundingHeight = 0;
          } else if (selectedFunding === null || selectedFunding === 'no-vf') {
            fundingHeight = headerHeight;
          } else { }

          if (selectedHeader === null) { headerHeight = 0; }
          else { }

          if (selectedHero === null) { heroHeight = 0; }
          else { }

          if (selectedPlugin === null) { pluginHeight = 0; }
          else { }

          if (selectedFpoValue === null) { fpoHeight = 0; }
          else { }

          if (selectedBannerPosition === null) { bannerHeight = 0 }
          else { }

          const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (footerWidth / 2) + 45);
          let offsetModules = (slHeight + 30) + fundingHeight + heroHeight + pluginHeight + fpoHeight + bannerHeight;
          const offsetY = (docHeight - docHeight) - (docHeight / 2) + (footerHeight / 2) + offsetModules;

          pastedGroup.translate(offsetX, offsetY);

          console.log('Footer inserido com sucesso!');
        } catch (error) {
          console.error('Erro ao inserir o Footer:', error);
        }
      };

      const options = {
        commandName: 'Inserir Cabeçalho',
        interactive: true,
      };

      await core.executeAsModal(targetFunction, options);
    } catch (error) {
      console.error('Erro ao encontrar o arquivo do Footer:', error);
    }
  };

  // Fim de função de selecionar o Footer

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

  console.log("Selected Birdseed", selectedBirdseed)
  console.log("Birdseed Copy", selectedBirdseedCopy)
  console.log("Birdseed Copy Value", birdseedCopyValue)
  console.log(`Data selecionada: Dia ${selectedDay}, Mês ${selectedMonth}, Ano ${selectedYear}`)

  const handleBirdseedSelect = async (birdseed) => {
    const birdseedFilePath = `assets/birdseeds/${birdseed}.psd`;
    const fs = storage.localFileSystem;
    try {
      const pluginDir = await fs.getPluginFolder();
      const fileEntry = await pluginDir.getEntry(birdseedFilePath);

      const targetFunction = async (executionContext) => {
        try {
          await app.open(fileEntry);
          const secondDocument = app.documents[1];
          const birdseedWidth = secondDocument.width;
          birdseedHeight = secondDocument.height;


          let batchBirdseedCopy = [];

          if (selectedBirdseedCopy === "birdseedcopy") {

            const defaultTextSliceOne = `Ofertas válidas até ${selectedDay}/${selectedMonth}/${selectedYear}, limitadas, por linha de produto, a 3 unidades para pessoa física, seja por aquisição direta e/ou entrega a ordem, que não tenha adquirido equipamentos Dell nos últimos 4 meses, e a 5 unidades para pessoa jurídica ou grupo de empresas com até 500 funcionários registrados. Frete grátis para todo o Brasil. Cálculo do valor do produto sem frete. Nossos notebooks e desktops são construídos especialmente para você. Nada de máquinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPreços referenciados com impostos para consumidores pessoas físicas, comprando com CPF. O preço final aplicável nas vendas para pessoas jurídicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em razão dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas através de cartão de crédito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, através de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

            const defaultTextURLOne = ` www.dell.com.br.\r\r`

            const defaultTextSliceTwo = `Garantia total mínima (legal + contratual) de 1 ano, inclui peças e mão de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, após contato telefônico com o Suporte Técnico da Dell com diagnóstico remoto, deverá levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domicílio/assistência técnica no local, técnicos serão deslocados, se necessário, após consulta telefônica com diagnóstico remoto. Garantia a domícilio não disponível para acessórios. Produtos e softwares de outras marcas estão sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informações sobre Serviços, acesse`

            const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

            const defaultTextSliceThree = `Empresa beneficiada pela Lei da Informática. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport são marcas registradas da © 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows são marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane são marcas registradas da Intel Corporation e suas subsidiárias. © 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combinações resultantes são marcas registradas da Advanced Micro Devices, Inc. © 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing são marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros países. \r\r

            Dell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

            // Concatena o birdseedCopyValue antes do texto padrão
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

            const defaultTextSliceOne = `Ofertas válidas até ${selectedDay}/${selectedMonth}/${selectedYear}, limitadas, por linha de produto, a 3 unidades para pessoa física, seja por aquisição direta e/ou entrega a ordem, que não tenha adquirido equipamentos Dell nos últimos 4 meses, e a 5 unidades para pessoa jurídica ou grupo de empresas com até 500 funcionários registrados. Frete grátis para todo o Brasil. Cálculo do valor do produto sem frete. Nossos notebooks e desktops são construídos especialmente para você. Nada de máquinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPreços referenciados com impostos para consumidores pessoas físicas, comprando com CPF. O preço final aplicável nas vendas para pessoas jurídicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em razão dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas através de cartão de crédito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, através de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

            const defaultTextURLOne = ` www.dell.com.br.\r\r`

            const defaultTextSliceTwo = `Garantia total mínima (legal + contratual) de 1 ano, inclui peças e mão de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, após contato telefônico com o Suporte Técnico da Dell com diagnóstico remoto, deverá levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domicílio/assistência técnica no local, técnicos serão deslocados, se necessário, após consulta telefônica com diagnóstico remoto. Garantia a domícilio não disponível para acessórios. Produtos e softwares de outras marcas estão sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informações sobre Serviços, acesse`

            const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

            const defaultTextSliceThree = `Empresa beneficiada pela Lei da Informática. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport são marcas registradas da © 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows são marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane são marcas registradas da Intel Corporation e suas subsidiárias. © 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combinações resultantes são marcas registradas da Advanced Micro Devices, Inc. © 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing são marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros países. \r\r

            Dell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

            // Concatena o birdseedCopyValue antes do texto padrão
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
          await batchPlay(batchBirdseedCopy, {});

          // const resultFundingTextBoundingBox = await batchPlay(batchFundingCopy, {});
          // const boundingBoxFundingText = resultFundingTextBoundingBox[2].bounds;
          // const finalCropValue = boundingBoxFundingText.bottom._value;

          // const finalCrop = [
          //   { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 200 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 200 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
          // ]
          // await batchPlay(finalCrop, {});

          // const selectAndCopy = [
          //   { _obj: "selectAllLayers", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "copyEvent", _options: { dialogOptions: "dontDisplay" } },
          //   { _obj: "close", saving: { _enum: "yesNo", _value: "no" }, documentID: 507, _options: { dialogOptions: "dontDisplay" } }
          // ]
          // await batchPlay(selectAndCopy, {});

          // const activeDocument = app.activeDocument;
          // await activeDocument.paste();


          // const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
          // const docWidth = activeDocument.width;
          // const docHeight = activeDocument.height;
          // const offsetX = ((docWidth - docWidth) - (docWidth / 2) + 515);

          // let offsetY;

          // if ((selectedFunding === null || selectedFunding === 'no-vf')) {
          //   offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight));
          // } else {
          //   offsetY = ((docHeight - docHeight) - (docHeight / 2) + (fundingHeight / 2) + (slHeight + 30));
          // }

          // pastedGroup.translate(offsetX, offsetY);

          console.log('Birdseed inserido com sucesso!');
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

  // Fim da Função de selecionar o Birdseed

  // Função para ajustar o documento após a colocação dos módulos

  async function fitToScreenPos() {

    if ((selectedFunding === null || selectedFunding === 'no-vf') && headerHeight === null) {
      fundingHeight = 0;
      headerHeight = 0;
    } else if (selectedFunding === null || selectedFunding === 'no-vf') {
      fundingHeight = headerHeight;
    } else {
    }

    if (selectedHeader === null) { headerHeight = 0; }
    else { }

    if (selectedHero === null) { heroHeight = 0; }
    else { }

    if (selectedPlugin === null) { pluginHeight = 0; }
    else { }

    if (selectedFpoValue === null) { fpoHeight = 0; }
    else { }

    if (selectedBannerPosition === null) { bannerHeight = 0; }
    else { }

    if (selectedFooter === null) { footerHeight = 0 }
    else { }

    const allModulesSizes = (slHeight + 30) + fundingHeight + heroHeight + pluginHeight + fpoHeight + bannerHeight + footerHeight + birdseedHeight;

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

  // Fim da função para ajustar o documento após a colocação dos módulos

  // Execução de todas as funções por botão

  const handleMontarLayoutClick = async () => {

    try {
      await clearAllLayers();
      await fitToScreenPre();
      // var slHeight = await sslSelect();
      // await handleHeaderSelect(selectedHeader, slHeight);
      // var fundingHeight = await handleFundingSelect(selectedFunding, slHeight)
      // var heroHeight = await handleHeroSelect(selectedHero, slHeight, headerHeight, fundingHeight);
      // var pluginHeight = await pluginSelect(selectedPlugin, slHeight, headerHeight, fundingHeight, heroHeight);
      // var fpoHeight = await handleFpoSelect(selectedFpoValue, selectedFpoSegment, slHeight, headerHeight, fundingHeight, heroHeight, pluginHeight);
      // var bannerHeight = await handleBannerSelect(selectedBannerPosition, slHeight, headerHeight, fundingHeight, heroHeight, pluginHeight, fpoHeight);
      // var footerHeight = await handleFooterSelect(selectedFooter, slHeight, headerHeight, fundingHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight)
      var birdseedHeight = await handleBirdseedSelect(selectedBirdseed, slHeight, headerHeight, fundingHeight, heroHeight, pluginHeight, fpoHeight, footerHeight);
      await fitToScreenPos(slHeight, headerHeight, fundingHeight, heroHeight, pluginHeight, fpoHeight, bannerHeight, footerHeight);

      console.log('Todas as funções foram executadas com sucesso.');
    } catch (error) {
      console.error('Erro ao montar o layout:', error);
    }
  };

  // UI do Plugin

  return (
    <div width="100%" style={{ padding: "0px 15px", paddingTop: "10px", width: "100%" }}>
      <Theme theme="spectrum" scale="medium" color="light">
        <SubjectLineSelector onSubjectLineChange={handleSubjectLineChange} />
        <AccentColorSelector onAccentColorChange={handleAccentColorChange} />
        <HeaderSelector handleHeaderSelect={setSelectedHeader} />
        <FundingSelector handleFundingSelect={setSelectedFunding} onFundingCopyChange={handleFundingCopyChange} />
        <HeroSelector handleHeroSelect={setSelectedHero} onHeroCopyChange={handleHeroCopyChange} />
        <PluginSelector handlePluginSelect={setSelectedPlugin} onPluginCopyChange={handlePluginCopyChange} onSuperChargerCopyChange={handleSuperChargerCopyChange} />
        <FpoSelector handleFpoValueSelect={setSelectedFpoValue} handleFpoSegmentSelect={setSelectedFpoSegment} />
        <BannerSelector handleBannerPositionSelected={setSelectedBannerPosition} onBannerHeadlineChange={handleBannerHeadlineChange} onBannerCopyChange={handleBannerCopyChange} onBannerCtaChange={handleBannerCtaChange} />
        <FooterSelector handleFooterSelect={setSelectedFooter} />
        <BirdseedSelector handleBirdseedSelect={setSelectedBirdseed} handleBirdseedCopy={setSelectedBirdseedCopy} onDateChange={handleDateChange} onBirdseedCopyChange={handleBirdseedCopyChange} />
        <sp-button style={{ marginTop: "8px" }} onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button>
      </Theme>
    </div>
  );
}

export default App;