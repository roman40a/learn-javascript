'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

/* 
delete salaries.John;
delete salaries.Ann;
delete salaries.Pete;
 */

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
}

alert(sum);