import React from 'react';
import stl from './Header.module.css';

const Header = (probs) => {
    return (
        <header className={stl.header}>
            <img className={stl.logo} src='https://svgsilh.com/png-512/2982227-673ab7.png' />
        </header>
    );
}

export default Header;