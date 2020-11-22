import React from 'react';
import NewPost from './Newpost/NewPost';
import Post from './Post/Post';
import stl from './Posts.module.css';

const Posts = () => {
    return (
        <div className={stl.posts}>
            <NewPost />
            <Post likes='10' message='Привет! Как дела?' />
            <Post likes='15' message='Тут мы будем изучать ReactJS' />
            <Post likes='30' message='Добро пожаловать ко мне на мой сайт!' />
            <Post likes='25' message='Вот и мой первый пост!=)' />
        </div>
    )
}

export default Posts;