import React from 'react';
import Message from './Message/Message';
import stl from './Messages.module.css';

const Messages = (probs) => {

    const messagesElements = probs.messagesData
        .map(item => <Message message={item.message} />);

    return (
        <div className={stl.messages}>
            {messagesElements}
        </div>
    );
}

export default Messages;