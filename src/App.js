import './App.css';
import Screen from './SplashScreen/screen';
import Home from './Home/home';
import MapToggle from './MapToggle/maptoggle';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  console.log(bookmarks)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={Screen}/>
          <Route path='/home' element={<Home bookmarks={bookmarks} setBookmarks={setBookmarks}/>}/>
          <Route path='/map' element={<MapToggle bookmarks={bookmarks} setBookmarks={setBookmarks}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
