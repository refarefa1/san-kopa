import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/scss/main.scss";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { router } from "./router";
import { store } from "./store/index";
import { ThemeProvider } from "@mui/material";
import { cacheRtl, muiTheme } from "./global/muiCustomConfig";

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
