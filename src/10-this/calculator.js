"use strict"

let calculator = {
    read() {
        this.numberA = +prompt("Введите первое число:", "0");
        this.numberB = +prompt("Введите второе число:", "0");
    },

    sum() {
        return this.numberA + this.numberB;
    },

    mul() {
        return this.numberA * this.numberB;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());