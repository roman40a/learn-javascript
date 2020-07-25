'use srtict';

let user = {
    name: "Василий Иванович",
    age: 35
};

console.log(user);

let json = JSON.stringify(user);

console.log(json);

user2 = JSON.parse(json);

console.log(user2);