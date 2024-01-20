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

  const handleBirdseedCopyChange = (values) => {
    setBirdseedCopyValues(values);
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
        <BirdseedSelector />
        {/* <sp-button style={{ marginTop: "8px" }} onClick={handleMontarLayoutClick}>
          Montar layout
        </sp-button> */}
      </AppProvider>
    </Theme>
  );
}

export default App;