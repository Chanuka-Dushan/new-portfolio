import { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) {
  // Always set the theme to dark
  const [theme] = useState<Theme>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "system");
    root.classList.add("dark");
  }, []);

  const value = {
    theme,
    // For compatibility, keep the setTheme function but don't allow any changes
    setTheme: (_: Theme) => {
      // Always store dark theme in localStorage
      localStorage.setItem("theme", "dark");
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
