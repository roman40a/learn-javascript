'use strict';

function getLocalDay(date) {
    let localDays = ['7', '1', '2', '3', '4', '5', '6'];

    return localDays[date.getDay()];
};

let date = new Date(2014, 0, 3);
console.log(getLocalDay(date)); //5