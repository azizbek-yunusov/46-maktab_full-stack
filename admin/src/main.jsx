import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
import "./index.css";
import { theme } from "./theme";
import "moment/locale/uz-latn";
// import 'moment/locale/ru';
import App from "./App";
import "./assets/styles/swipper.css";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import UserProvider from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <GoogleOAuthProvider
        clientId={
          "532347017019-c21cgrptkv5qc4baibh3ub2uud60684v.apps.googleusercontent.com"
        }
      >
        <UserProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </UserProvider>
      </GoogleOAuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
