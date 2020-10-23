'use strict';

// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let i = 1;
for (let li of document.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

// ...ваш код, который сделает карусель рабочей

let positionList = 0;
const numberOfImg = 3;

const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');

const widthImg = document.querySelector('img').width;
const imgList = document.querySelector('ul');

const lengthList = document.querySelectorAll('li').length;
const maxRightSlip = widthImg * (lengthList - numberOfImg);

function prev() {
    positionList += widthImg * numberOfImg;
    positionList = Math.min(positionList, 0)
    imgList.style.marginLeft = positionList + 'px';
};

function next() {
    positionList -= widthImg * numberOfImg;
    positionList = Math.max(positionList, -maxRightSlip)
    imgList.style.marginLeft = positionList + 'px';
};

prevArrow.addEventListener('click', prev);
nextArrow.addEventListener('click', next);