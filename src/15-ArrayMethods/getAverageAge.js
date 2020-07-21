'use strict';

function getAverageAge(users) {
    let sumAge = users.reduce((sum, current) => sum + current.age, 0);
    console.log(sumAge);
    return (sumAge / users.length);
};


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28