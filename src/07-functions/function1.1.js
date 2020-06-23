'use strict'

let age = +prompt('Ваш возраст?', '18');

function checkAge(age) {
    return (age > 18) ? true :
        confirm('Родители разрешили?');
}
checkAge(age);