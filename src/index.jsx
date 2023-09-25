import "./assets/scss/main.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store/index";
import { ThemeProvider } from "@mui/material";
import { cacheLtr, cacheRtl } from "./global/muiCustomConfig";
import { muiTheme } from "./global/Theme";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import { useEffect, useState } from "react";

const MyCacheProvider = (props) => {
  const { i18n } = useTranslation();
  const [cacheValue, setCacheValue] = useState(cacheRtl);
  const dir = i18n.dir;

  useEffect(() => {
    setCacheValue(dir === 'ltr' ? cacheLtr : cacheRtl);
  }, [dir]);

  return <CacheProvider value={cacheValue}>{props.children}</CacheProvider>;
};

const createApp = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <MyCacheProvider >
          <Router>
            <I18nextProvider i18n={i18n}>
              <App />
            </I18nextProvider>
          </Router>
        </MyCacheProvider>
      </Provider>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const app = createApp();
root.render(app);
