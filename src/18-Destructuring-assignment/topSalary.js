"use strict";

function topSalary(salaries) {

    let topSal = 0;
    let topSalName = null;

    for (const [name, value] of Object.entries(salaries)) {
        if (topSal < value) {
            topSal = value;
            topSalName = name;
        };
    };

    return topSalName;

};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 200
};

console.log(topSalary(salaries));