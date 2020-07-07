'use strict';

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {
        let num = +prompt("Введите прибавляемое число:", '0');
        this.value += num;
    };
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений