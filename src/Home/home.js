import Navbar from '../Navbar/navbar';
import { Link } from "react-router-dom";
import ParkingMap from '../MapToggle/map';
import './home.css'

function Home() {
  return (
    <div className="home">
        <Navbar />
        <div>
            <div className='parking-watch-list'>
            </div>
            <div className='visit-map'>
                <Link to={'/map'}>
                  <button className='visitMapButton'>Visit Map</button>
                </Link>
            </div>
        </div>
        
    </div>
  );
}

export default Home;
