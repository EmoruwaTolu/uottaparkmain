import './lot-details.css';

import { useState } from 'react';

function LotDetails({spot, setBookmarks}) {
    console.log(spot)
    return (
        <div className='spot-container'>
            <div className='left-side'>
                <div className='img-container'>
                    
                </div>
                <div className='star-rating'>
                    <div>
                        Review:
                    </div>
                    <div>
                        {spot.RATING}
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <div className='parking-details'>
                    <div className='park-name'>{spot.ADDRESS}</div>
                    <div className='price-and-available'>
                        <div className='available-num'>{spot.AVAILABLE_SPACES}</div>
                        <div className='price-num'>{spot.HOURLY_RATE}</div>
                    </div>
                    <div className='indoor-offcampus'>
                        <div className='indoor-outdoor'>{spot.CATEGORY}</div>
                        <div className='offcampus'>{spot.LOCATION}</div>
                    </div>
                </div>
                <div className='bookmark-slab'>
                    <div className='bookmark-button' onClick={() => {
                        setBookmarks((prevBookmarks) => [...prevBookmarks, spot]); 
                        
                    }}>Bookmark</div>
                </div>
            </div>
        </div>
    );
}

export default LotDetails;
