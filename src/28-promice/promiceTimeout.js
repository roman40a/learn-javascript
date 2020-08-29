'use strict';

function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), ms)
    });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));