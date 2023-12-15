import './Home.css'
import { useNavigate } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.png";
const NavButton = ({text, path}) =>{
    const navigate = useNavigate()

    return(
    <button className="nav-button" onClick={() => navigate(path)}>
        {text}
    </button>
    )
}


const Home = () =>{
    return(
        <div>
            <h1>Health Advice Group</h1>
            <body>
                <nav className='navbar'>
                    <div className='container'>
                        <div className='logo'> Health Advice Group</div>
                        <ul className='nav'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Environment</a>
                            </li>
                            <li>
                                <a href="#">Advice</a>
                            </li>
                            <li>
                                <a href="#">Charts</a>
                            </li>
                            <li>
                                <a href="#">Account</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <header>
                    <div className='container'>
                        <div>
                            <h1>Health Advice group</h1>
                            <p>View Weather forecasting now</p>
                        </div>
                        <div>
                      
                        


                    </div>
                </header>
                
            </body>

            

        </div>
    )
}

export default Home;