import Navbar from '../Navbar/navbar';
import { Link } from "react-router-dom";
import ParkingMap from '../MapToggle/map';
import './map-toggle.css';
import ChevronIcon from './chevron-back-outline.svg'

function MapToggle() {
  return (
    <div className="map-body">
        <div className='map-nav-tools'>
            <Link to={`/home`}>
              <img src={ChevronIcon} className='chevronIcon'/>
            </Link>

        </div>
        <ParkingMap />   
        <div className='map-filters'>
            <div className='filter-container'>
                <div className='location-filters'>
                    <div className='pill'>On-Campus-</div>
                    <div className='pill'>Off-Campus</div>
                    <div className='pill'>Both</div>
                </div>
            </div>
        </div>
    </div>

    
  );
}

export default MapToggle;
