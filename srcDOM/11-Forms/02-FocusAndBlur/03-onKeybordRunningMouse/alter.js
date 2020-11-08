'use strict';

const mouse = document.querySelector('#mouse');
mouse.tabIndex = "0";

mouse.addEventListener('click', selectElem);

function selectElem() {
    this.style.left = this.getBoundingClientRect().left + 'px';
    this.style.top = this.getBoundingClientRect().top + 'px';

    this.style.position = 'fixed';
}

mouse.addEventListener('keydown', move);

function move(event) {
    switch (event.key) {
        case 'ArrowRight':
            this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
            break;
        case 'ArrowLeft':
            this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
            break;
        case 'ArrowDown':
            this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
            break;
        case 'ArrowUp':
            this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px'
            break;

    };
};