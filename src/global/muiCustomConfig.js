import createCache from "@emotion/cache";
import { createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#6358d8",
    },
    text: {
      disabled: "#727272",
    },
  },
  direction: 'rtl',
});
