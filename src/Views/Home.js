import './Home.css'
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
                                <div className="nav-buttons">
                                    <NavButton text="Home" path="/home"/>
                                </div>
                            </li>
                            <li>
                                <div className="nav-buttons">
                                    <NavButton text="Environment" path="/Environment"/>
                                </div>
                            </li>
                            <li>
                                <div className="nav-buttons">
                                    <NavButton text="Advice" path="/Advice"/>
                                </div>
                            </li>
                            <li>
                                <div className="nav-buttons">
                                    <NavButton text="Charts" path="/Charts"/>
                                </div>
                            </li>
                            <li>
                                <div className="nav-buttons">
                                    <NavButton  text="Account" path="/Account"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <header className='header'>
                    <div className='container'>
                        <div>
                            <h1>Health Advice group</h1>
                            <p>
                                View Weather forecasting now
                            </p>
                        </div>
                        <img src={weatherlogo}/>

                    </div>      
                </header>

                <section className='boxes'>
                    <div className='container'>
                        <div className='box'>
                            <h2>< i className='fas fa-arrows-alt-v'></i>Alignment and space</h2>
                            <p>
                                Explore more
                            </p>
                        </div>

                        <div className='box'>
                            <h2>< i className='fas fa-arrows-alt-v'></i>Alignment and space</h2>
                            <p>
                                Explore more
                            </p>
                        </div>

                        <div className='box'>
                            <h2>< i className='fas fa-arrows-alt-v'></i>Alignment and space</h2>
                            <p>
                                Explore more
                            </p>
                        </div>
                    </div>
                </section>  
            </body>

            

        </div>
    )
}

export default Home;