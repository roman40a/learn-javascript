import React from 'react';
import Avatar from './avatar/Avatar';
import Discription from './discription/Discription';
import stl from './Person.module.css';

const Person = () => {
    return (
        <div className={stl.person}>
            <Avatar />
            <Discription />
        </div>
    )
}

export default Person;