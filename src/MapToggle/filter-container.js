import './map-toggle.css';
import { useState } from 'react';

function Filter() {

    const [filterInfo, setFilterInfo] = useState(null);

    return (
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

  );
}

export default Filter;
