import './Header.css';
import { useNavigate } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.PNG";

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
                <div className='logo'><img src={weatherlogo}/></div>
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
                        <NavButton  text="Account" path="/Account"/>
                    </li>
                </ul>
                
            
        
            </div>
        </nav> 
    )
}

export default Header