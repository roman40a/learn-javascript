'use strict';

function formatDate(date) {

    let diffDate = Date.now() - Number(date);


    if (diffDate <= 1000) { return "прямо сейчас" };

    let sec = Math.floor(diffDate / 1000);
    if (diffDate <= 60000) { return `${sec} сек. назад` };

    let min = Math.floor(diffDate / 60000);
    if (diffDate <= 3600000) { return `${min} мин. назад` }

    else {

        //  let year = 

        return (`${date.getDate()}.${date.getMonth() + 1}.${(date.getFullYear()).toString().slice(-2)} ${date.getHours()}:${date.getMinutes()}`)
    };
}; // 


console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));