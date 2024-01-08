import "./Home.css";
import { useNavigate } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.PNG";
import Header from "../Components/Header";
import sky from "../Assets/sky.mp4";
import Search from "../Components/Search";
import Charts from "./Charts";
import videoforecast from "../Assets/weathersea.mp4";
import videoicon from "../Assets/videoicon.png";
import weatheradvice from "../Assets/weatheradvice.JPG";
import sick from "../Assets/sick.jpg";
import menu from "../Assets/menu.png";

const NavButton = ({ children, path }) => {
  const navigate = useNavigate();

  return (
    <button className="nav-button" onClick={() => navigate(path)}>
      {children}
    </button>
  );
};

const Home = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div>
      <Header />
      <Search onSearchChange={handleOnSearchChange} />
      <title>Health Advice Group</title>
      <body>
        <header className="header">
          <div className="container" > 
            <video autoPlay muted loop id="video-background">
              <source src={sky} type="video/mp4" />
              Your browser does not support the video tag
            </video>
            <div className="video-text">
              <h1>Health Advice group</h1>
              <p>View Weather forecasting now</p>
            </div>
          </div>
        </header>

        <section className="boxes">
          <div className="container">
            <div className="box">
              <h2>
                <i className="fas fa-arrows-alt-v"></i>Alignment and space
              </h2>
              <p>Explore more</p>
            </div>

            <div className="box">
              <h2>
                <i className="fas fa-arrows-alt-v"></i>Alignment and space
              </h2>
              <p>Explore more</p>
            </div>

            <div className="box">
              <h2>
                <i className="fas fa-arrows-alt-v"></i>Alignment and space
              </h2>
              <p>Explore more</p>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <div className="videoForecast">
          <h1>Video Forecast</h1>
          <img src={videoicon} width={80} height={80} />
          <video width={450} height={200} controls>
            <source src={videoforecast} type="video/mp4" />
          </video>
        </div>
        
        <br />
        <br />
        <div className="info-container">
          <div className="info-row">
            <div className="info-section">
              <img src={weatheradvice} width={450} height={500} />
            </div>
          </div>
          <div className="column">
            <div className="info-row">
              <div className="advice-container">
                <img src={sick} width={170} height={100} />
                <h1>
                  Tips for surviving
                  <br />
                  allergies
                </h1>
                <div className="row-menu">
                  <NavButton path="/Advice" className="menu-button">
                    <h2>Explore</h2>
                  </NavButton>
                  <div className="spacer"></div>
                  <NavButton path="/Advice" className="menu-button">
                    <img src={menu} width={50} height={50} />
                  </NavButton>
                </div>
              </div>
            </div>

            <div className="info-row">
              <div className="advice-container">
                <img src={sick} width={170} height={100} />
                <h1>
                  Tips for surviving
                  <br />
                  allergies
                </h1>
                <div className="row-menu">
                  <NavButton path="/Advice" className="menu-button">
                    <h2>Explore</h2>
                  </NavButton>
                  <div className="spacer"></div>
                  <NavButton path="/Advice" className="menu-button">
                    <img src={menu} width={50} height={50} />
                  </NavButton>
                </div>
              </div>
            </div>

            <div className="info-row">
              <div className="advice-container">
                <img src={sick} width={170} height={100} />
                <h1>
                  Tips for surviving
                  <br />
                  allergies
                </h1>
                <div className="row-menu">
                  <NavButton path="/Advice" className="menu-button">
                    <h2>Explore</h2>
                  </NavButton>
                  <div className="spacer"></div>
                  <NavButton path="/Advice" className="menu-button">
                    <img src={menu} width={50} height={50}  />
                  </NavButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
