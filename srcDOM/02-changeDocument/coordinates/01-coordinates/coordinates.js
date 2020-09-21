'use strict';

let field = document.getElementById('field');

let coordinates1 = field.getBoundingClientRect();

// let coordinates2 = field.getBoundingClientRect();

// console.log('1.x:' + coordinates1.x + ' y:' + coordinates1.y);
console.log('1.x:' + coordinates1.left + ' y:' + coordinates1.top);
console.log('2.x:' + coordinates1.right + ' y:' + coordinates1.bottom);
// console.log('2.x:' + (coordinates1.x + coordinates1.width) + ' y:' + (coordinates1.y + coordinates1.height));
console.log('3.x:' + (coordinates1.left + field.clientLeft) + ' y: ' + (coordinates1.top + field.clientTop));
console.log('4.x:' + (coordinates1.left + field.clientLeft + field.clientWidth) + ' y: ' + (coordinates1.top + field.clientTop + field.clientHeight));