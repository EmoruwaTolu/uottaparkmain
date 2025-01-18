import './spots.css';
import { IoIosPricetag } from "react-icons/io";
import { LuCircleParking } from "react-icons/lu";


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
                <IoIosPricetag id='priceTag'></IoIosPricetag>: {price}
                </div>
                <div className='spot-available'>
                <LuCircleParking id='parkingSign'></LuCircleParking>: {available}
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
