import React from 'react';
import stl from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={stl.newPost}>
            Новая запись:
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Добавить запись</button>
            </div>
        </div>
    )
}

export default NewPost;