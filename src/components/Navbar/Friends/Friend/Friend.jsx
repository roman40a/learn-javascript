import React from 'react';
import stl from './Friend.module.css';

const Friend = (probs) => {
    return (
        <span className={stl.item}>
            <div className={stl.ava}>
                <img src={probs.avUrl} alt={probs.name} />
            </div>
            <div className={stl.name}>
                {probs.name}
            </div>
        </span>
    );
}

export default Friend;