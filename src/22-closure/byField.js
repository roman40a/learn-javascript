'use strict';

function byField(fieldName) {
    return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    };
};

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.forEach(user => console.log(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => console.log(user.name)); // Pete, Ann, John