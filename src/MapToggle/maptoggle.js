import Navbar from '../Navbar/navbar';
import { Link } from "react-router-dom";
import ParkingMap from '../MapToggle/map';
import './map-toggle.css';

function MapToggle() {
  return (
    <div className="map-body">
        <div className='map-nav-tools'>
            <Link to={`/home`}>{`<`}</Link>
        </div>
        <ParkingMap />   
        <div className='map-filters'>

        </div>
    </div>
  );
}

export default MapToggle;
