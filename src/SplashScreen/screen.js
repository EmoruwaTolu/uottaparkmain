import './screen.css';
import TitleImage from './TitleImage.png'

import { Link } from "react-router-dom";

function Screen() {
  return (
    <div className="splash">
        <div className='text-body-intro'>
            <div className='pre-title-text'>Welcome To</div>
            {/* <div className='app-title'>uOttaPark</div> */}
            <img className='app-title-image' src={TitleImage} />
            <div className='mini-text'>Get it? You oughta park...</div>
        </div>

        <div className='screen-button-container'>
            <div className='get-started'>
              <Link to={'/home'}>
              <button className='screen-button-button'>Get Started</button>
              </Link>
            </div>
        </div>
    </div>
  );
}

export default Screen;
