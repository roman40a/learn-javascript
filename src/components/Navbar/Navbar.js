import React from 'react';
import { NavLink } from 'react-router-dom';
import stl from './Navbar.module.css';

const Navbar = (probs) => {
    return (
        <nav className={stl.navbar}>
            <div className={stl.item}>
                <NavLink activeClassName={stl.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink activeClassName={stl.active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink activeClassName={stl.active} to='/news'>News</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink activeClassName={stl.active} to='/music'>Music</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink activeClassName={stl.active} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;