import React from 'react';
import stl from './NewPost.module.css';
import { addPostCreator, addChangeNewPostText } from '../../../../redux/profilePageReducer';

const NewPost = (probs) => {
    let addPost = () => {
        probs.dispatch(addPostCreator());
    }

    let rendChangeText = (e) => {
        const text = e.target.value;
        probs.dispatch(addChangeNewPostText(text));
    }

    return (
        <div className={stl.newPost}>
            Новая запись:
            <div>
                <textarea onInput={rendChangeText} value={probs.textareasValue} placeholder='Введите текст...' />
            </div>
            <div>
                <button onClick={addPost}>Добавить запись</button>
            </div>
        </div>
    )
}

export default NewPost;