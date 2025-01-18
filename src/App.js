import './App.css';
import Screen from './SplashScreen/screen';
import Home from './Home/home';
import MapToggle from './MapToggle/maptoggle';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={Screen}/>
          <Route path='/home' Component={Home}/>
          <Route path='/map' Component={MapToggle}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
