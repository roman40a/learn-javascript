import React from 'react';
import NewPost from './Newpost/NewPost';
import Post from './Post/Post';
import stl from './Posts.module.css';

const postsData = [
    { id: 1, message: 'Привет! Как дела?', likes: 10 },
    { id: 2, message: 'Тут мы будем изучать ReactJS', likes: 15 },
    { id: 3, message: 'Добро пожаловать ко мне на мой сайт!', likes: 30 },
    { id: 4, message: 'Вот и мой первый пост!=)', likes: 25 },
];

const postsElements = postsData
    .map(post => <Post likes={post.likes} message={post.message} />)

const Posts = () => {
    return (
        <div className={stl.posts}>
            <h3>Мои записи</h3>
            <NewPost />
            {postsElements}
            {/* <Post likes='10' message='Привет! Как дела?' />
            <Post likes='15' message='Тут мы будем изучать ReactJS' />
            <Post likes='30' message='Добро пожаловать ко мне на мой сайт!' />
            <Post likes='25' message='Вот и мой первый пост!=)' /> */}
        </div>
    )
}

export default Posts;