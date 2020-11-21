import React from 'react';
import Avatar from './avatar/Avatar';
import Discription from './discription/Discription';
import './person.module.css';

const Person = () => {
    return (
        <div className='person'>
            <Avatar />
            <Discription />
        </div>
    )
}

export default Person;