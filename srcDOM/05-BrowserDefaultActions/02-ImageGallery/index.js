'use strict';

const previewGallery = document.querySelector('#thumbs');

previewGallery.addEventListener('click', showBigImg);

function showBigImg(event) {
    const elem = event.target.closest('a');
    if (!elem) return;

    const bigImg = document.querySelector('#largeImg');

    bigImg.src = elem.href;
    bigImg.title = elem.title;

    event.preventDefault();
}


// Альтернативная функция

// function showBigImg(event) {
//     event.preventDefault();

//     const bigImg = document.querySelector('#largeImg');
//     const elem = event.target;
//     const tag = elem.tagName;
//     let ref;

//     if (tag != 'IMG' && tag != 'A') return;

//     switch (tag) {
//         case "IMG":
//             ref = elem.parentNode.getAttribute('href')
//             break;

//         case "A":
//             ref = elem.getAttribute('href')
//             break;
//     }

//     bigImg.src = ref;
// };