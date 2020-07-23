'use strict';

let user = {
    name: "John",
    years: 30,
    //isAdmin: true,
};

let { name = "Anonymuos", years: age, isAdmin = false } = user

console.log(name, age, isAdmin); // John, 30, false