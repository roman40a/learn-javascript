import React from 'react';
import stl from './Avatar.module.css';

const Avatar = () => {
    return (
        <div className={stl.avatarWrapper}>
            <img className={stl.avatar} src='https://img.fotokonkurs.ru/cache/comment_image_big/comments/2020/1/9/7d215403ca77fedec4223bb450256114.jpeg' />
        </div>
    )
}

export default Avatar;