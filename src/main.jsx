import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/scss/main.scss";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import createCache from "@emotion/cache";
import { router } from "./router";
import { store } from "./store/index";
import { ThemeProvider, createTheme } from "@mui/material";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#6358d8"
    },
  },
});
const createApp = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <CacheProvider value={cacheRtl}>
          <RouterProvider router={router} />
        </CacheProvider>
      </Provider>
    </ThemeProvider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createApp());
