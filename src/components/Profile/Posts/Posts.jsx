import React from 'react';
import NewPost from './Newpost/NewPost';
import Post from './Post/Post';
import stl from './Posts.module.css';

const Posts = (probs) => {

    const postsElements = probs.store.getState().profilePage.postsData
        .map(post => <Post likes={post.likes} message={post.message} />);

    return (
        <div className={stl.posts}>
            <h3>Мои записи</h3>
            <NewPost
                textareasValue={probs.store.getState().profilePage.textareasValue}
                store={probs.store}
                dispatch={probs.dispatch}
            />
            {postsElements}
        </div>
    )
}

export default Posts;