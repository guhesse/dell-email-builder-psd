// Import de todas as fun\u00e7\u00f5es 

import React from 'react';
import CsvReader from './CsvReader.js';
import BrandSelector from './BrandSelector.js';
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
import TesteWriteFile from './TesteWriteFile.jsx';

import { Theme } from "@swc-react/theme";
export const { core, app } = require('photoshop');
export const { storage } = require('uxp');
export const { batchPlay } = require('photoshop').action;

import AppProvider from './context/AppProvider.js';

function App() {

  return (
    <AppProvider className="wrapper">
      <TesteWriteFile />
      <CsvReader />
      <BrandSelector />
      <ColorSelector />
      <SubjectLineSelector />
      <HeaderSelector />
      <FundingSelector />
      <SkinnySelector />
      <HeroSelector />
      <EmailBuilder />
    </AppProvider>
  );
}

export default App;

// 
// <PluginSelector />
// <FpoSelector />
// <BannerSelector />
// <FooterSelector />
// <BirdseedSelector />
// <EmailBuilder />