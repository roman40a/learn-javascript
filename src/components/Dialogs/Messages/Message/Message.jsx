import React from 'react';
import stl from './Message.module.css';

const Message = (probs) => {
    return (
        <div className={stl.message}>
            {probs.message}
        </div>
    );
}

export default Message;