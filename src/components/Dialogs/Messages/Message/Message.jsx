import React from 'react';
import './Message.css';

const Message = (probs) => {

    return (
        <div className={probs.className}>
            {probs.message}
        </div>
    );
}

export default Message;