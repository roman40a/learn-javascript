import React from 'react';
import stl from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (probs) => {
    const path = '/dialogs/' + probs.id;
    return (
        <div className={stl.item}>
            <NavLink to={path} activeClassName={stl.active}>
                {probs.name}
            </NavLink>
        </div>
    );
}

export default Dialog;