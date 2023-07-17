import { createTheme } from "@mui/material";

const theme = {
    palette: {
        primary: {
            main: "#6358d8",
        },
        secondary: {
            main: '#ffffff'
        },
        text: {
            disabled: "#727272",
        },
    },
    layout: {
        padding: 2
    },
    sizes: {
        headerHeight: 66,
        headerZIndex: 100,
        inputHeight:56
    },
    direction: 'rtl',
}

export const muiTheme = createTheme(theme);
