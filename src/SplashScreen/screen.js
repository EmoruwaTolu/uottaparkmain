import './screen.css';
import { Link } from "react-router-dom";

function Screen() {
  return (
    <div className="splash">
        <div className='text-body-intro'>
            <div className='mini-text'>Welcome To</div>
            <div className='app-title'>uOttaPark</div>
            <div className='mini-text'>Get it? You oughta park...</div>
        </div>
        <div className='get-started'>
            <Link to={'/home'}>Get Started</Link>
        </div>
    </div>
  );
}

export default Screen;
