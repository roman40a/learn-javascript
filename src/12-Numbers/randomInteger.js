'use strict';

function randomInteger(min, max) {
    let randNum = (min + (Math.random()) * ((max + 1) - min));
    return Math.floor(randNum);
};

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));