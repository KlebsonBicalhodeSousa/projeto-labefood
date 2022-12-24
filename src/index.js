import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createGlobalStyle} from 'styled-components'
import { secondaryColor } from "./constants/colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
