// theme.ts (Standard Theme with MUI BlueGrey)
import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: blueGrey[500],
      light: blueGrey[100],
      dark: blueGrey[700],
    },
    secondary: {
      main: blueGrey[300],
    },
    background: {
      default: blueGrey[50],
      paper: "#FFFFFF",
    },
    text: {
      primary: blueGrey[800],
      secondary: blueGrey[600],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blueGrey[500],
      light: blueGrey[100],
      dark: blueGrey[700],
    },
    secondary: {
      main: blueGrey[300],
    },
    background: {
      default: blueGrey[900],
      paper: blueGrey[800],
    },
    text: {
      primary: blueGrey[100],
      secondary: blueGrey[300],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
