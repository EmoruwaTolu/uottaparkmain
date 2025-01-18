import Navbar from '../Navbar/navbar';
import { Link } from "react-router-dom";
import './home.css';
import EarthIcon from './earth-outline.svg';

function Home() {
  return (
    <div className="home">
        <Navbar />
        <div>
            <div className='parking-watch-list'>

            </div>
            <div className='visit-map'>
                <Link to={'/map'}>
                  <button className='visit-map-button'>
                    <img className='globeIcon' src={EarthIcon} alt='globe'></img> <span className='buttonTextMap'> Map</span>
                  </button>
                </Link>
            </div>
        </div>
        
    </div>
  );
}

export default Home;
