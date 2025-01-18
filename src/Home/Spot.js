import './spots.css';
import { IoIosPricetag } from "react-icons/io";
import { LuCircleParking } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


function Spot({name, price, available, rating}) {

  return (
    <div className="bookmark-container">
        <div className='spot-img'>

        </div>
        <div className='bookmark-details'>
            <div className='location'>
                <FaLocationDot></FaLocationDot>{name}
            </div>
            <div className='spot-minor'>
                <div className='spot-price'>
                <IoIosPricetag id='priceTag'></IoIosPricetag>: {price}/Hour
                </div>
                <div className='spot-available'>
                <LuCircleParking id='parkingSign'></LuCircleParking>: {available} Spots
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
