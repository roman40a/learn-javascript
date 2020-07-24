'use strict';

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month);

    date.setMonth(date.getMonth() + 1);

    date.setDate(date.getDate() - 1);

    return date.getDate();

};

console.log(getLastDayOfMonth(2012, 3))
console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28