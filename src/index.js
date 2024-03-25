import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {I18nextProvider} from "react-i18next"; //para que las traducciones esten disponibles en toda la app
import i18next from "i18next";
import global_es from "./Translations/es/global.json"
import global_en from "./Translations/en/global.json"
import { BrowserRouter } from "react-router-dom";

i18next.init({
  interpolation: {escapeValue:false},
  lng: "en", //lenguaje por default
  resources: {
    es: {
      global: global_es
    },
    en:{
      global: global_en
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <React.StrictMode>
      <BrowserRouter>
      <I18nextProvider i18n={i18next}>
      <App />
      </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
