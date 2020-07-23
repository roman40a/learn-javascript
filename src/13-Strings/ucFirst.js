'use strict';

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

alert(ucFirst("пуся"));
alert(ucFirst("альбус"));
alert(ucFirst("фродо"));
alert(ucFirst("северус"));
alert(ucFirst("сэм"));