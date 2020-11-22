import React from 'react';
import stl from './Wallpaper.module.css';

const Wallpaper = () => {
    return (
        <div className={stl.wallpaper}>
            <img src='https://get.wallhere.com/photo/landscape-mountains-villages-nature-reflection-snow-winter-Lofoten-Norway-panoramas-panorama-fjord-mountain-landform-geological-phenomenon-mountain-range-135474.jpg' />
        </div>
    );
}

export default Wallpaper;