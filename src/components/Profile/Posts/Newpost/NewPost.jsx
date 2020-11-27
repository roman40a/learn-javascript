import React from 'react';
import stl from './NewPost.module.css';

const NewPost = (probs) => {
    let textareaElement = React.createRef();

    let addPost = () => {
        probs.store.addPost();
    }

    let rendChangeText = () => {
        let text = textareaElement.current.value;
        probs.store.addChangeNewPostText(text);
    }

    return (
        <div className={stl.newPost}>
            Новая запись:
            <div>
                <textarea ref={textareaElement} onInput={rendChangeText} value={probs.textareasValue} />
            </div>
            <div>
                <button onClick={addPost}>Добавить запись</button>
            </div>
        </div>
    )
}

export default NewPost;