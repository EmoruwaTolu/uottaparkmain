import Navbar from '../Navbar/navbar';
import { Link } from "react-router-dom";
import ParkingMap from '../MapToggle/map';
import './map-toggle.css';
import ChevronIcon from './chevron-back-outline.svg';

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
                    <div className='filter-header'>Filter Search</div>
                    <div className='location-filters'>
                        <div className='pill'>On-Campus</div>
                        <div className='pill'>Off-Campus</div>
                        <div className='pill'>Both</div>
                    </div>
                    <div className='location-filters'>
                        <div className='pill'>Indoor</div>
                        <div className='pill'>Outdoor</div>
                    </div>
                    <div className='price-filters'>Price Filter (Hourly Rate)</div>
                    <div className='price-controllers'>
                        <label for="Min">Min. :</label>
                        <input type="number" id="Min" name="Min"></input>
                        <label for="Max">Max. :</label>
                        <input type="number" id="Max" name="Max"></input>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default MapToggle;
