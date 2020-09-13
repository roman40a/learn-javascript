'use strict';

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let inst = prompt('Введите пункт списка', '');

    if (!inst) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = inst;
    ul.append(li);
};