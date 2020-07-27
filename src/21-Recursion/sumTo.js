'use strict';

function sumToCycle(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    };
    return result;
};

console.log(sumToCycle(100)); // 5050


function sumToRecursion(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumToRecursion(n - 1);
    };
};

console.log(sumToRecursion(100)); // 5050


function sumToProgression(n) {
    return ((1 + n) / 2) * n;
};

console.log(sumToProgression(100)); // 5050