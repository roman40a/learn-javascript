'use strict';

function unique(arr) {
    let result = [];

    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
};

let strings = ["Господи помилуй", "Господи помилуй", "Подай, Господи", "Подай, Господи",
    "Подай, Господи", "Подай, Господи", "Господи помилуй", "Господи помилуй", ":-O"
];

console.log(unique(strings)); // Господи помилуй, Подай, Господи, :-O