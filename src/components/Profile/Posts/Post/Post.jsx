import React from 'react';
import stl from './Post.module.css';

const Post = (probs) => {
    return (
        <div className={stl.item}>
            <img className={stl.ava} src='https://yt3.ggpht.com/a/AATXAJxRLR-iAGkjRrFynIKHOJXOCmzcxN229swDdSIB=s900-c-k-c0xffffffff-no-rj-mo' />
            <div className={stl.message}>
                {probs.message}
            </div>
            <div className={stl.like}>
                <span><img className={stl.likes} src='https://www.pinclipart.com/picdir/big/540-5405251_blues-clues-paw-print-clipart.png' /> {probs.likes} like</span>
            </div>
        </div>
    )
}

export default Post;