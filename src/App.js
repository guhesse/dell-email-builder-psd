// Import de todas as fun\u00e7\u00f5es 

import React from 'react';
import TesteWriteFile from './TesteWriteFile.jsx';
import Navbar from './components/NavBar.jsx';
export const { dom, showAlert, storage } = require("uxp");
export const { core, app } = require('photoshop');
export const { batchPlay } = require('photoshop').action;
import Router from './view/Router.jsx';

import AppProvider from './context/AppProvider.js';

function App() {
  return (
    <AppProvider className="wrapper">
      <Navbar />
      <Router />
    </AppProvider>
  );
}

export default App;
// <TesteWriteFile />
// <EmailBuilder />