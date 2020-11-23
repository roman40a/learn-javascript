import React from 'react';
import Message from './Message/Message';
import stl from './Messages.module.css';

const messagesData = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'Мяу!' },
    { id: 4, message: 'Я - весёлый котёнок!' },
]

const Messages = (probs) => {

    const messagesElements = messagesData
        .map(item => <Message message={item.message} />);

    return (
        <div className={stl.messages}>
            {messagesElements}
        </div>
    );
}

export default Messages;