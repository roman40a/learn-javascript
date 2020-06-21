'use strict';

const number = +prompt('Введите цифру от 0 до 3', '');

switch (number) {
    case (0):
        alert('Вы ввели цифру 0');
        break;

    case (1):
        alert('Вы ввели цифру 1');
        break;
    case (2):
    case (3):
        alert('Вы ввели цифру 2 или 3');
        break;

    default:
        break;
}
