import React from 'react';
import './profile.module.css';
import Wallpaper from './wallpaper/Wallpaper';
import Person from './person/Person'

const Profile = () => {
    return (
        <div className='profile'>
            <Wallpaper />
            <Person />
            {/* <Posts /> */}
        </div>
    );
}

export default Profile;