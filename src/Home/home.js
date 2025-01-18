import Navbar from '../Navbar/navbar';
import Spot from './Spot';
import { Link } from "react-router-dom";
import './home.css';
import EarthIcon from './earth-outline.svg';
import { useState } from 'react';

function Home({bookmarks, setBookmarks}) {

  const [savedSpots, setSavedSpots] = useState([]);
  console.log(bookmarks)

  return (
    <div className="home">
        <Navbar />
        <div>
            <div className='parking-watch-list'>
              <div className='scroller'>
                {bookmarks.map((spot, index) => (
                  <Spot key={index} name={spot.ADDRESS} price={spot.HOURLY_RATE} rating={spot.RATING} available={spot.AVAILABLE_SPACES}/>
                ))}
              </div>
            </div>
            <div className='visit-map'>
                <Link to={'/map'}>
                  <button className='visit-map-button'>
                    <img className='globeIcon' src={EarthIcon} alt='globe'></img> <span className='buttonTextMap'>Map</span>
                  </button>
                </Link>
            </div>
        </div>
        
    </div>
  );
}

export default Home;
