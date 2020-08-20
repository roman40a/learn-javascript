'use strict';

function printNumbers(from, to) {

    let i = from;

    let timerId = setInterval(
        function () {
            alert(i);
            if (i == to) {
                clearInterval(timerId);
            }
            i++;
        }, 1000);
}

printNumbers(2, 5);