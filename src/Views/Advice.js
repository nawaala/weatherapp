import "./Advice.css";
import MenuList from "../Components/MenuList";
import MenuItem from "../Components/HealthAdviceItem";
import menu from '../Assets/menu.png';
import Toggle from "../Components/Toggle";

const Advice = () => {
    return (
      <div>
        <div className="toggle-color">
          <Toggle />
        </div>
        <div className="advice-title">
          Advice For you
        </div>
        <div className="menu">
          <div className="menuList">
            {MenuList.map((menuItem, key) => {
              return (
                <div className="p-details" key={key}>
                  <img
                    className="image-sizes"
                    src={menuItem.image}
                    alt={menuItem.name}
                  />
                  <p>{menuItem.details}</p>
                  <h2> Read more...</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default Advice;