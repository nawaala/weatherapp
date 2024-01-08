import './Advice.css'
import  MenuList from '../Components/MenuList';
import MenuItem from '../Components/HealthAdviceItem';

const Advice = () => {
    return (
      <div>
        <div className='advice-title'>
          Advice For you
        </div>
        <div className='menu'>
          <div className='menuList'>
            {MenuList.map((menuItem, key) => {
              return (
                <div key={key}>
                  <img src={menuItem.image} alt={menuItem.name} />
                  <p>{menuItem.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default Advice;