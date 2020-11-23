import React from 'react';
import stl from './Discription.module.css';

const Discription = () => {
    return (
        <div className={stl.discription}>
            <div>
                Name
            </div>
            <div>
                Age
            </div>
            <div>
                City
            </div>
            <div>
                Education
            </div>
        </div>
    )
}

export default Discription;