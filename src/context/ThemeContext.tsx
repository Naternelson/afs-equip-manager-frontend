"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ThemeProvider, CssBaseline, Theme } from "@mui/material";
import { lightTheme, darkTheme } from "../styles/theme";


type ThemeContextType = {
  themeMode: string;
  toggleTheme: () => void;
  setThemeMode: (theme: string) => void;
  availableThemes: string[];
};

const availableThemes: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("themeMode") as string) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", themeMode);
    }
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = availableThemes[themeMode] || lightTheme; // Fallback to light theme

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
        setThemeMode,
        availableThemes: Object.keys(availableThemes) as string[],
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
