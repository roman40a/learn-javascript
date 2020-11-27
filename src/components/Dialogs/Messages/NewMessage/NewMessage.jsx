import React from 'react';
import stl from './NewMessage.module.css';

const NewMessage = (probs) => {
    let textareaElement = React.createRef();

    let rendChangeText = () => {
        let text = textareaElement.current.value;
        probs.store.addChangeNewMessageText(text);
    }

    const sendMessage = () => {
        probs.store.addMessage();
    }
    return (
        <div className={stl.newMessage}>
            <div className={stl.textareaElement}>
                <textarea onInput={rendChangeText} ref={textareaElement} value={probs.textareasValue} />
            </div>
            <div className={stl.sendButton}>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
}

export default NewMessage;