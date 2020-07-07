"use strict"

let calculator = {
    sum() {
        return this.numberA + this.numberB;
    },

    mul() {
        return this.numberA * this.numberB;
    },

    read() {
        this.numberA = +prompt("Введите первое число:", "0");
        this.numberB = +prompt("Введите второе число:", "0");
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());