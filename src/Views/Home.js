import './Home.css'
import { useNavigate } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.PNG";
import Header from '../Components/Header';

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
            <Header/>
            <title>Health Advice Group</title>
            <body>
                <header className='header'>
                    <div className='container'>
                        <div>
                            <h1>Health Advice group</h1>
                            <p>
                                View Weather forecasting now
                            </p>
                        </div>
                        
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