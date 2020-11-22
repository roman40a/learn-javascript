import React from 'react';
import Message from './Message/Message';
import stl from './Messages.module.css';

const Messages = (probs) => {
    return (
        <div className={stl.messages}>
            <Message message="Привет" />
            <Message message="Как дела?" />
            <Message message="Мяу!" />
            <Message message="Я - весёлый котёнок!" />
        </div>
    );
}

export default Messages;