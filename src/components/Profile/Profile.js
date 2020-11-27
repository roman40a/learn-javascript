import React from 'react';
import stl from './Profile.module.css';
import Wallpaper from './wallpaper/Wallpaper';
import Person from './person/Person'
import Posts from './Posts/Posts';

const Profile = (probs) => {
    return (
        <div className={stl.profile}>
            <Wallpaper />
            <Person />
            <Posts store={probs.store} />
        </div>
    );
}

export default Profile;