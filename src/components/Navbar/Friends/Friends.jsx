import React from 'react';
import Friend from './Friend/Friend';
import stl from './Friends.module.css';

const Friends = (probs) => {

    const friendsElements = probs.friendsData
        .map(friend => <Friend avUrl={friend.avUrl} name={friend.name} />);

    return (
        <div className={stl.friends}>
            <div className={stl.title}>
                Friends
            </div>
            <div className={stl.friendsContainer}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;