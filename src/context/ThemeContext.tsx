/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { createContext, useContext, useEffect, type ReactNode } from "react";
type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeProviderProps = { children: ReactNode };
function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorageState<"dark" | "light">(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
    "theme",
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext is used outside of ThemeProvider ");
  return context;
}
export { useTheme, ThemeProvider };
