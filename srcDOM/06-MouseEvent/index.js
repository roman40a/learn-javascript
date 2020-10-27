'use strict';

const list = document.querySelector('#ul');

list.addEventListener('click', selectList);

function selectList(event) {
    const allElems = list.querySelectorAll('li');

    const elem = event.target;
    if (elem.tagName != 'LI') return;

    if (event.ctrlKey || event.metaKey) {
        elem.classList.toggle('selected');
    } else {
        allElems.forEach((item) => {
            item.classList.remove('selected');
        });
        elem.classList.add('selected');
    };
}

list.addEventListener('mousedown', (e) => {
    e.preventDefault();
});

// Альткрнативное решение отмены выделения
// только в пунктах списка:
// list.childNodes.forEach((key) => {
//     key.addEventListener("mousedown", (e) => {
//         e.preventDefault();
//     });
// });