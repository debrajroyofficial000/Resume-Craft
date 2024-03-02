import { useTheme } from "../contexts";
function ThemeButton() {
  const { allThemes, themeDispatch } = useTheme();
  return (
    <div className="flex justify-center items-center gap-4">
      {allThemes.map((theme, index) => (
        <button
          key={index}
          className={`rounded-full p-4 ${theme} text-white`}
          onClick={() => themeDispatch({ type: "changeTheme", payload: theme })}
        ></button>
      ))}
    </div>
  );
}

export default ThemeButton;
