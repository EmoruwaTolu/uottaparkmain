import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './navbar-styling.css';
import TitleImage from "../SplashScreen/TitleImage.png";

function Navbar() {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const links = [
        { name: 'Events', url: '/events' },
        { name: 'Blog', url: '/blog' },
        { name: 'Volunteer', url: '/volunteer' },
        { name: 'Minutes', url: '/minutes' },
        { name: 'About', url: '/about' },
    ];
    
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'>
                    <img src={TitleImage}/>
                </Link>
            </div>
            <ul className={showDropdown ? 'navbar-links dropdown-menu active' : 'navbar-links'}>
                {links.map((link, index) => (
                <li className='navbar-link' key={index}>
                    <Link to={link.url}>{link.name}</Link>
                </li>
                ))}
            </ul>
            <div className='dropdown-button' onClick={toggleDropdown}>
                &#9776; {/* Unicode for three horizontal bars (Hamburger menu icon) */}
            </div>
        </div>
    );
};

export default Navbar;