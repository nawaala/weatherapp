import './Header.css';
import { useNavigate } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.PNG";
import Toggle from "./Toggle.js";
import Charts from '../Views/Charts.js';
import Register from '../Views/Register.js';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggle'

const NavButton = ({text, path}) =>{
    const navigate = useNavigate()

    return(
    <button className="nav-button" onClick={() => navigate(path)}>
        {text}
    </button>
    )
}
 
const Header = () => {
    return(
        <nav className='navbar'>
            <div className='container'>
                <Toggle/>
                <div className='logo'><img src={weatherlogo} height={80}/></div>
                <ul className='nav'>
                    <li>       
                        <NavButton text="Home" path="/home"/>           
                    </li>
                    <li>                
                        <NavButton text="Environment" path="/Environment"/>             
                    </li> 
                    <li>       
                        <NavButton text="Advice" path="/Advice"/>                 
                    </li>
                    <li>                   
                        <NavButton text="Charts" path="/Charts"/>              
                    </li>
                    <li>                  
                        <NavButton  text="Account" path="/Register"/>
                    </li>
                    <li>
                        <ThemeToggleButton/>
                    </li>
                    
                </ul>
        
                
            
        
            </div>
        </nav> 
    )
}

export default Header