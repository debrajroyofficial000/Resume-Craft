import { createContext, useContext } from "react";
import { initialThemeState } from "../../utils";
export const themeContext = createContext(initialThemeState);

export const ThemeProvider = themeContext.Provider;

function useTheme() {
  const { currentTheme, allThemes, themeDispatch } = useContext(themeContext);
  return { currentTheme, allThemes, themeDispatch };
}
export default useTheme;
