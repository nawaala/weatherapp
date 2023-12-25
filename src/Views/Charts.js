import './Charts.css'
import search from '../Assets/search.png';
import drizzle from '../Assets/drizzle.png';
import snow from '../Assets/snow.png';
import rain from '../Assets/rain.png';
import wind from '../Assets/wind.png';
import humidity from '../Assets/humidity.png';
import clear from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';

const Charts = () => {
    return(
        <div>
            <div className='container-one'>
                <div className='top-bar'>
                    <input type='text' className='cityInput' placeholder='search'/>
                    <div className='search-icon'>
                        <img src={search}/>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Charts