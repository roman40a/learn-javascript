import React from 'react';
import stl from './Header.module.css';

const Header = (probs) => {
    return (
        <header className={stl.header}>
            <img className={stl.logo} src='https://pe56d.s3.amazonaws.com/o_1dtaism9l1i907a1tgf1g4pqq7.png' />
        </header>
    );
}

export default Header;