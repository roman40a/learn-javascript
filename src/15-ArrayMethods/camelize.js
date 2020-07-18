'use strict';

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const map = (arr, func) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}

// [a1, a2, a3] -> [func(a1), func(a2), func(a3)]

const forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : (word[0].toUpperCase() + word.slice(1))
        )
        .join('');
};


const a = camelize("background-color");
const b = camelize("list-style-image");
const c = camelize("-webkit-transition");

console.log(`${a}\n${b}\n${c}`);