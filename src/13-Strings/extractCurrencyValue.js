'use strict';

function extractCurrencyValue(str) {
    return Number(str.slice(1))
};

alert(extractCurrencyValue('$120'));
alert(extractCurrencyValue('$120000'));