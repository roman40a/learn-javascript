import React from 'react';
import Message from './Message/Message';
import stl from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';

const Messages = (probs) => {

    const messagesElements = probs.messagesData
        .map((item) => {
            const c1 = 'message';
            const c2 = 'messageMe';
            if (item.me) {
                return <Message className={c1} message={item.message} />
            } else if (!item.me) {
                return (
                    <Message className={c2} message={item.message} />
                )
            }
        }
        );

    return (
        <div className={stl.messagesWrapper}>
            <div className={stl.messages}>
                {messagesElements}
            </div>
            <div className={stl.newMessage}>
                <NewMessage store={probs.store}
                    textareasValue={probs.messagesData.textareasValue} />
            </div>


        </div>
    );
}

export default Messages;