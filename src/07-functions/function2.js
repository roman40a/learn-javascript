'use strict'

let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');

function min(a, b) {
    return (a > b) ? b : a;
}

min(a, b);
alert('Меньшее из введенных чисел: ' + min(a, b));