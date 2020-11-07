'use strict';

const musicGenres = document.querySelector('#genres');
console.log(musicGenres);

let sltdIndx = musicGenres.selectedIndex;

let sltd = musicGenres.options[sltdIndx];

let sltdText = sltd.text;
let sltdVal = sltd.value;

console.log('Текст: ' + sltdText, ', Значение: ' + sltdVal);

// let text = Array.from(musicGenres.options)
//     .filter(option => option.selected)
//     .map(option => option.text);

// let selValue = Array.from(musicGenres.options)
//     .filter(option => option.selected)
//     .map(option => option.value);
// console.log('Текст: ' + text, ', Значение: ' + selValue);

const classic = new Option('Классика', "classic");

musicGenres.append(classic);

classic.selected = true;

// text = Array.from(musicGenres.options)
//     .filter(option => option.selected)
//     .map(option => option.text);

// selValue = Array.from(musicGenres.options)
//     .filter(option => option.selected)
//     .map(option => option.value);


// console.log('Текст: ' + text, ', Значение: ' + selValue);

sltdIndx = musicGenres.selectedIndex;
sltd = musicGenres.options[sltdIndx];

// console.log(sltd);

sltdText = sltd.text;
sltdVal = sltd.value;

console.log('Текст: ' + sltdText, ', Значение: ' + sltdVal);
