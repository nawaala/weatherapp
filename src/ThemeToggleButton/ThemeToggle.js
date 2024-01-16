import "./ThemeToggle.css";
import { useTheme } from "../Contexts/ThemeContext.js";
import { ReactComponent as sunIcon } from "../Assets/clear.png";
import { ReactComponent as darktheme } from "../Assets/nightmode.png";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={"theme-toggle-button ${theme}"} onClick={toggleTheme}>
      {theme === "light" ? <darktheme /> : <sunIcon />}
    </button>
  );
};

export default ThemeToggleButton;
