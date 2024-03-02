import { ThemeProvider } from "../contexts";
import useThemReducer from "../reducers/useThemReducer";
import PDF from "./PDF";
import ThemeButton from "./ThemeButton";
function ResumePdf({ show }) {
  const { currentTheme, allThemes, themeDispatch } = useThemReducer();

  return (
    <ThemeProvider value={{ currentTheme, allThemes, themeDispatch }}>
      <div className="w-[900px] max-w-full border h-screen p-4">
        <ThemeButton />
        {show ? (
          <PDF />
        ) : (
          <h2 className="text-center font-bold text-3xl">
            Fill up and Generate Resume
          </h2>
        )}
      </div>
    </ThemeProvider>
  );
}

export default ResumePdf;
