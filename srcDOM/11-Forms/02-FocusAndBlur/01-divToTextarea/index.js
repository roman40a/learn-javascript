'usr strict';

let text = null;
let box = document.querySelector('#view');

box.addEventListener('click', editBox);

function editBox() {
    text = document.createElement('textarea');
    text.classList.add('edit');
    text.value = box.innerHTML;

    text.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            text.blur();
        }
    });

    text.addEventListener('blur', saveBox);

    box.replaceWith(text);
    text.focus();

}

function saveBox() {
    box.innerHTML = text.value;
    text.replaceWith(box);

}

box.addEventListener('focus', editBox);