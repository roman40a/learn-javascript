import React from 'react';
import NewPost from './Newpost/NewPost';
import Post from './Post/Post';
import stl from './Posts.module.css';

const Posts = (probs) => {

    const postsElements = probs.postsData
        .map(post => <Post likes={post.likes} message={post.message} />);

    return (
        <div className={stl.posts}>
            <h3>Мои записи</h3>
            <NewPost />
            {postsElements}
        </div>
    )
}

export default Posts;