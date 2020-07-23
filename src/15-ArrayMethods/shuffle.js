'use strict';

function shuffle(array) {
    function compareRandom(a, b) {
        a = Math.random();
        b = Math.random();
        return a - b;
    }
    array.sort(compareRandom)
};

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]
console.log(arr);

shuffle(arr);
// arr = [2, 1, 3]
console.log(arr);

shuffle(arr);
// arr = [3, 1, 2]
console.log(arr);