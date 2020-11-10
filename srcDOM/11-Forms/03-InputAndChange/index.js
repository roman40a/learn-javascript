'use strict';

let form = document.forms.calculator;

const money = document.getElementsByName('money')[0];
const months = document.getElementsByName('months')[0];
const interest = document.getElementsByName('interest')[0];
const heightAfter = document.querySelector('#height-after');
const moneyBefore = document.querySelector('#money-before');
const moneyAfter = document.querySelector('#money-after');

function getValue(event) {
    event.value = this.value;
}

money.addEventListener('input', getValue);
months.addEventListener('input', getValue);
interest.addEventListener('input', getValue);

function showResultDiagramm() {
    let initial = money.value;
    let procent = interest.value / 100;
    let years = months.value / 12;

    let result = Math.round(initial * (1 + procent * years));
    let resultHeight = result * 100 / initial;

    heightAfter.style.height = resultHeight + 'px';

    moneyBefore.innerHTML = `<b>${initial}</b>`;
    moneyAfter.innerHTML = `<b>${result}</b>`;
}

form.addEventListener('input', showResultDiagramm);
showResultDiagramm();