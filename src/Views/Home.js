import './Home.css'
import { useNavigate } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.PNG";
import Header from '../Components/Header';
import sky from "../Assets/sky.mp4";
import Search from "../Components/Search"
const NavButton = ({text, path}) =>{
    const navigate = useNavigate()

    return(
    <button className="nav-button" onClick={() => navigate(path)}>
        {text}
    </button>
    )
}


const Home = () =>{
    const handleOnSearchChange = (searchData) => {
        console.log (searchData);
    }
    
    return(
        <div>
            <Header/>
            <Search onSearchChange={handleOnSearchChange}/>
            <title>Health Advice Group</title>
            <body>
                <header className='header'>
                    <div className='container'>
                        <video autoPlay muted loop id="video-background">
                            <source src={sky} type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
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