import { createTheme, Theme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

// Define base theme options explicitly to avoid TypeScript errors
const baseTheme = {
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    h1: { fontSize: "1.8rem" },
    h2: { fontSize: "1.6rem" },
    h3: { fontSize: "1.4rem" },
    h4: { fontSize: "1.2rem" },
    h5: { fontSize: "1.1rem" },
    h6: { fontSize: "1rem" },
    body1: { fontSize: "0.875rem" },
    body2: { fontSize: "0.75rem" },
    button: { fontSize: "0.75rem", textTransform: "none" as const },
    subtitle1: { fontSize: "0.9rem" },
    subtitle2: { fontSize: "0.8rem" },
    caption: { fontSize: "0.7rem" },
    overline: { fontSize: "0.7rem", textTransform: "uppercase" as const },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          padding: "4px 10px",
          minHeight: "30px",
          borderRadius: "6px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            fontSize: "0.85rem",
            padding: "6px 10px",
            minHeight: "32px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "0.85rem",
          padding: "6px 10px",
          minHeight: "32px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "6px 8px",
          fontSize: "0.85rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          minHeight: "30px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          minHeight: "30px",
          [theme.breakpoints.up("sm")]: {
            minHeight: "30px", // Ensures consistency on smaller screens
          },
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem", // Default icon size (slightly smaller than MUI's default)
        },
      },
    },
  },
};

// Light Theme
export const lightTheme = createTheme({
  ...baseTheme,
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
});

// Dark Theme
export const darkTheme = createTheme({
  ...baseTheme,
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
});
