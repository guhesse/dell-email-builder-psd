// Import de todas as fun\u00e7\u00f5es 

import React from 'react';
import { BannerSelector, BirdseedSelector, BrandSelector, ColorSelector, FooterSelector, FpoSelector, FundingSelector, HeaderSelector, HeroSelector, PluginSelector, SkinnySelector, SubjectLineSelector } from './components/Selectors/Selectors.jsx';
import EmailBuilder from './components/EmailBuilder.jsx';
import CsvReader from './CsvReader.js';
import TesteWriteFile from './TesteWriteFile.jsx';

import { Theme } from "@swc-react/theme";
export const { core, app } = require('photoshop');
export const { storage } = require('uxp');
export const { batchPlay } = require('photoshop').action;

import AppProvider from './context/AppProvider.js';

function App() {

  return (
    <AppProvider className="wrapper">
      <CsvReader />
      <BrandSelector />
      <ColorSelector />
      <SubjectLineSelector />
      <HeaderSelector />
      <FundingSelector />
      <SkinnySelector />
      <HeroSelector />
      <PluginSelector />
      <FpoSelector />
      <EmailBuilder />
    </AppProvider>
  );
}

export default App;
// <TesteWriteFile />
// <BannerSelector />
// <FooterSelector />
// <BirdseedSelector />
// <EmailBuilder />