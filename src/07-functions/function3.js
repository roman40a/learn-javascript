'use strict'

let x = +prompt('Введите основание', '');
let n = +prompt('Введите степень', '');

function pow(x, n) {
    return (x ** n);
}
pow(x, n);

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else if (n > 1) {
    alert(`Результат возведения в степень:  ${pow(x, n)}`);
} else {
    alert('Ошибка вычисления. Проверте ввод данных')
}