import Filter from "./filter-container";
import LotDetails from "./LotDetails";
import { Link } from "react-router-dom";
import ParkingMap from '../MapToggle/map';
import './map-toggle.css';
import ChevronIcon from './chevron-back-outline.svg';
import { useState } from 'react';

function MapToggle({bookmarks, setBookmarks}) {

    const [filterInfo, setFilterInfo] = useState(null);
    console.log(filterInfo)

    return (
        <div className="map-body">
            <div className='map-nav-tools'>
                <Link to={`/home`}>
                <img src={ChevronIcon} className='chevronIcon'/>
                </Link>
            </div>
            <ParkingMap setSpot={setFilterInfo} spot={filterInfo}/>   
            <div className='map-filters'>
                {filterInfo === null && <Filter />}
                {filterInfo !== null && <LotDetails spot={filterInfo} setBookmarks={setBookmarks} bookmarks={bookmarks}/>}
            </div>
        </div>

  );
}

export default MapToggle;
