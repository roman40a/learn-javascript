'use strict';
const btnElem = document.querySelector('#arrowTop');
btnElem.style.display = 'none';

let winHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', hideBtnUp);

function hideBtnUp() {
    let windowScroll = window.pageYOffset;

    // btnElem.hidden = (windowScroll < winHeight);

    if (windowScroll > winHeight) {
        btnElem.style.display = '';
    } else {
        btnElem.style.display = 'none';
    }

    btnElem.addEventListener('click', up)

    function up() {
        window.scrollTo(pageXOffset, 0);
    }
}