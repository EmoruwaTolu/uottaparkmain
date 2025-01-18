import './spots.css';

function Spot({name, price, available, rating}) {

  return (
    <div className="bookmark-container">
        <div className='spot-img'>

        </div>
        <div className='bookmark-details'>
            <div className='location'>
                {name}
            </div>
            <div className='spot-minor'>
                <div className='spot-price'>
                    {price}
                </div>
                <div className='spot-available'>
                    {available}
                </div>
                <div className='spot-rating'>
                    {rating}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Spot;
