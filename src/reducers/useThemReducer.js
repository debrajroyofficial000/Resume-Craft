import { useReducer } from "react";

import { initialThemeState } from "../utils";
function reducer(themeState, action) {
  switch (action.type) {
    case "changeTheme": {
      return { ...themeState, currentTheme: action.payload };
    }
    default:
      return themeState;
  }
}
function useThemReducer() {
  const [themeState, themeDispatch] = useReducer(reducer, initialThemeState);
  const { currentTheme, allThemes } = themeState;
  return { currentTheme, allThemes, themeDispatch };
}

export default useThemReducer;
