'use strict';

function printNumbers(from, to) {
    let i = from;

    let timeId = setTimeout(function run() {
        alert(i);

        if (i < to) {
            setTimeout(run, 1000);
        };
        i++;
    }, 1000);
};

printNumbers(5, 10);