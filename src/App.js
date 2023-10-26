/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// import './App.css';

import React from "react";
import { Menu, MenuItem, MenuDivider } from "@swc-react/menu";
import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/theme/express/theme-light.js";
import "@spectrum-web-components/theme/scale-medium.js";
import "@spectrum-web-components/theme/express/scale-medium.js";
import { Theme } from "@swc-react/theme";

import HeaderSelector from "./HeaderSelector.js";
import SubjectLineSelector from "./SubjectLineSelector.js";

function App() {
  
  return (
    <div width="100" style={{paddingLeft: "15px", paddingTop: "10px", width:"100vw"}}>
      <Theme theme="spectrum" scale="medium" color="light">
          <SubjectLineSelector></SubjectLineSelector>
          <HeaderSelector></HeaderSelector >
          <sp-button style={{marginTop:"8px"}}>Montar layout</sp-button>
      </Theme>
    </div>
  );
}

export default App;
