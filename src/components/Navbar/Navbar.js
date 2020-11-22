import React from 'react';
import stl from './Navbar.module.css';

const Navbar = (probs) => {
    return (
        <nav className='navbar'>
            <div>
                <a className={`${stl.item} ${stl.active}`} href='/profile'>Profile</a>
            </div>
            <div>
                <a className={stl.item} href='/dialogs'>Messages</a>
            </div>
            <div>
                <a className={stl.item} href='/news'>News</a>
            </div>
            <div>
                <a className={stl.item} href='/music'>Music</a>
            </div>
            <div>
                <a className={stl.item} href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;