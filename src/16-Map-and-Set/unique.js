'use strict';

function unique(arr) {
    let set = new Set();
    for (let value of arr) {
        set.add(value);
    };
    return set;
};


let values = ["Господи помилуй", "Господи помилуй", "Подай, Господи", "Подай, Господи",
    "Подай, Господи", "Подай, Господи", "Господи помилуй", "Господи помилуй", ":-O"
];

console.log(unique(values)); // Господи помилуй, Подай, Господи, :-O