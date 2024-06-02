// Import de todas as fun\u00e7\u00f5es 

import React from 'react';
import { BannerSelector, BirdseedSelector, BrandSelector, ColorSelector, FooterSelector, FpoSelector, FundingSelector, HeaderSelector, HeroSelector, PluginSelector, SkinnySelector, SubjectLineSelector } from './components/Selectors/Selectors.jsx';
import EmailBuilder from './components/EmailBuilder.jsx';
import CsvReader from './CsvReader.js';
import TesteWriteFile from './TesteWriteFile.jsx';
import ShowModal from './showModal.jsx';
import { Provider } from '@adobe/react-spectrum';
import { defaultTheme } from '@adobe/react-spectrum';
export const { dom, showAlert } = require("uxp");
export const { core, app } = require('photoshop');
export const { storage } = require('uxp');
export const { batchPlay } = require('photoshop').action;

import AppProvider from './context/AppProvider.js';

function App() {

  return (
    <AppProvider className="wrapper">
      <Provider colorScheme="light" theme={defaultTheme}>
        <ShowModal />
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
        <BannerSelector />
        <FooterSelector />
        <BirdseedSelector />
        <EmailBuilder />
      </Provider>
    </AppProvider>
  );
}

export default App;
// <TesteWriteFile />
// <EmailBuilder />