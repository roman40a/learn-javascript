'use strict';

let bankAccount = prompt('Введите сумму баланса Вашего банковского счета', '0');
let cashLimit = 15; // мысленный предел трат

const devicePrice = 99.99;
const accessoryPrice = 5.99;

const tax = 0.08;

function getPriceWithTax(price, tax) {
    return Number((price + price * tax).toFixed(2));
}

function formatPrice(price) {
    return `$ ${price.toFixed(2)}`
}

// let sumAmount = 0;
let currentPrice = 0;

while (currentPrice <= bankAccount) {
    currentPrice += devicePrice;
    bankAccount -= devicePrice;
    // sumAmount = currentPrice;
}

let currentAccessoryPrice = 0;
while (currentAccessoryPrice <= cashLimit) {
    currentAccessoryPrice += accessoryPrice;
    cashLimit -= accessoryPrice;

}

currentPrice += currentAccessoryPrice;

let sumAmount = getPriceWithTax(currentPrice, tax)


alert(`Ваша итоговая сумма покупки составит: ${formatPrice(sumAmount)}`);


// let finalPrice = getPriceWithTax(devicePrice, tax);

// console.log(formatPrice(finalPrice));

