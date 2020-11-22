import React from 'react';
import stl from './Dialog.module.css';

const Dialog = (probs) => {
    return (
        <div className={stl.dialog + ' ' + probs.className}>
            {probs.name}
        </div>
    );
}

export default Dialog;