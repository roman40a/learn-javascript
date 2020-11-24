import React from 'react';
import stl from './Discription.module.css';

const Discription = () => {
    return (
        <div className={stl.discription}>
            <div>
                Name: Mr.Cat
            </div>
            <div>
                Age: 1 yaer
            </div>
            <div>
                City: Catwill
            </div>
            <div>
                Education: Micecatching
            </div>
        </div>
    )
}

export default Discription;