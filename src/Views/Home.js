import './Home.css'
import { useNavigate } from "react-router-dom";

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
            <h1>The weather channel</h1>
            
      

        </div>
    )
}

export default Home;