import React from 'react';
import stl from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={stl.newPost}>
            Новая запись:
            <textarea></textarea>
            <button>Добавить запись</button>
        </div>
    )
}

export default NewPost;