'use strict';

function sumInput() {
    let arr = [];
    let sum = 0;
    while (true) {
        let num = prompt('Input number:', '0');
        if (num === "" || num === null || !isFinite(num)) break;
        arr.push(Number(num));
    }

    for (let key of arr) {

        sum += key;
    }

    return sum;

};

alert(sumInput());