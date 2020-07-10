'use strict';

function readNumber() {
    let num;
    do {
        num = (prompt('Введите чило:', ''));

    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return Number(num);

};

alert(`Вы ввели: ${readNumber()}`);