import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./redux/store";
import "./i18n";
import "moment/locale/uz-latn";
import App from "./App";
import "./index.css";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </UserProvider>
    </HelmetProvider>
  </React.StrictMode>
);
