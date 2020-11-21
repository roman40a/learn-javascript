import React from 'react';
import './navbar.module.css';

const Navbar = (probs) => {
    return (
        <nav className='navbar'>
            <div>
                <a href='#s'>Profile</a>
            </div>
            <div>
                <a href='#s'>Messages</a>
            </div>
            <div>
                <a href='#s'>News</a>
            </div>
            <div>
                <a href='#s'>Music</a>
            </div>
            <div>
                <a href='#s'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;