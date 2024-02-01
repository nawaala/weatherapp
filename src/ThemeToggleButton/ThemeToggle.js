import "./ThemeToggle.css"
import { useTheme } from "../Contexts/ThemeContext";
import {ReactComponent as SunIcon} from "../Assets/clear.png"
import {ReactComponent as MoonIcon} from "../Assets/nightmode.png"
const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();
    
    return <button className={`theme-toggle-button ${theme}`} onClick={toggleTheme}>
        {
            theme === "light-theme"
            ? <MoonIcon/>
            : <SunIcon/> 
            }
        </button>
}

export default ThemeToggleButton;