import Navbar from '../Navbar/navbar';
import Spot from './Spot';
import { Link } from "react-router-dom";
import './home.css';
import EarthIcon from './earth-outline.svg';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

function Home({ bookmarks, setBookmarks }) {
  const [savedSpots, setSavedSpots] = useState([]);
  console.log(bookmarks);

  return (
    <div className="home">
      <Navbar />
      <div>
        <div className="parking-watch-list">
          <div className="scroller">
            {bookmarks.map((spot, index) => (
              <div key={index} className="spot-container">
                <div className="spot-details">
                  <div className="spot-name">{spot.ADDRESS}</div>
                  <div className="spot-price">Price: ${spot.HOURLY_RATE}</div>
                  <div className="spot-availability">Available: {spot.AVAILABLE_SPACES}</div>
                  <div className="spot-rating">
                    Rating:{" "}
                    {[...Array(spot.RATING)].map((_, i) => (
                      <FaStar
                        key={i}
                        color="gold"
                        className="star-icon"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="visit-map">
          <Link to={'/map'}>
            <button className="visit-map-button">
              <img className="globeIcon" src={EarthIcon} alt="globe" />{" "}
              <span className="buttonTextMap">Map</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
