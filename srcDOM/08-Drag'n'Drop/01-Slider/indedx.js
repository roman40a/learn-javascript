'use strict';

let thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', down);
thumb.addEventListener('dragstart', (event) => {
    event.preventDefault();
});

function down(event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);


    function move(event) {
        let newLeft = event.pageX - shiftX;
        if (newLeft < 0) newLeft = 0;
        if (newLeft > 300) newLeft = 300;
        thumb.style.left = newLeft + 'px';
    }

    function up() {
        document.removeEventListener('mouseup', up);
        document.removeEventListener('mousemove', move);
    }

};

