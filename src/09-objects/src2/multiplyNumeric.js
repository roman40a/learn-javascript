'use strict'

const menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

alert(menu.width);
alert(menu.height);
alert(menu.title);