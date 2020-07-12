'use strict';

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word = word[0].toUpperCase() + word.slice(1)
        )
        .join('');
};


const a = camelize("background-color");
const b = camelize("list-style-image");
const c = camelize("-webkit-transition");

alert(`${a}\n${b}\n${c}`);