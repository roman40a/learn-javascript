"use strict";

function Calculator() {
    this.read = function () {
        this.numA = +prompt("Введите первое число:", '0');
        this.numB = +prompt("Введите первое число:", '0');
    };

    this.sum = function () {
        return this.numA + this.numB
    };

    this.mul = function () {
        return this.numA * this.numB
    };
}

let calculator = new Calculator();
calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());