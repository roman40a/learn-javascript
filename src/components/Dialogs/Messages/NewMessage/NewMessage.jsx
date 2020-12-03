import React from 'react';
import stl from './NewMessage.module.css';
import { addMessageCreator, addChangeNewMessageText } from '../../../../redux/store';

const NewMessage = (probs) => {


    let rendChangeText = (e) => {
        let text = e.target.value;
        probs.dispatch(addChangeNewMessageText(text));
    }

    const sendMessage = () => {
        probs.dispatch(addMessageCreator());
    }
    return (
        <div className={stl.newMessage}>
            <div className={stl.textareaElement}>
                <textarea onInput={rendChangeText} value={probs.textareasValue} placeholder='Введите сообщение...' />
            </div>
            <div className={stl.sendButton}>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default NewMessage;