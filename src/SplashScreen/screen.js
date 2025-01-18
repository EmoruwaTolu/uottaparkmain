import './screen.css';

function Screen() {
  return (
    <div className="splash">
        <div className='text-body-intro'>
            <div className='mini-text'>Welcome To</div>
            <div className='app-title'>uOttaPark</div>
            <div className='mini-text'>Get it? You oughta park...</div>
        </div>
        <div className='get-started'>
            <button>Get Started</button>
        </div>
    </div>
  );
}

export default Screen;
