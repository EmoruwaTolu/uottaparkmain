import Navbar from '../Navbar/navbar';
import { Link } from "react-router-dom";
import ParkingMap from '../MapToggle/map';

function Home() {
  return (
    <div className="home">
        <Navbar />
        <div>
            <div className='parking-watch-list'>

            </div>
            <div className='visit-map'>
                <Link to={'/map'}>Visit Map</Link>
            </div>
        </div>
        
    </div>
  );
}

export default Home;
