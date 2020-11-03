'use strict';

let isDragging = false;

document.addEventListener('mousedown', down);


function down(event) {

    let hero = event.target.closest('.draggable');
    if (!hero) return;

    event.preventDefault();
    hero.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });

    let shiftX;
    let shiftY;

    start(hero, event.clientX, event.clientY);

    function up(event) {
        stop();
    };

    function move(event) {
        moveAt(event.clientX, event.clientY);
    };

    function start(elem, clientX, clientY) {

        if (isDragging) {
            return;
        }

        isDragging = true;

        document.addEventListener('mousemove', move);
        elem.addEventListener('mouseup', up);

        shiftX = clientX - elem.getBoundingClientRect().left;
        shiftY = clientY - elem.getBoundingClientRect().top;

        elem.style.position = 'fixed';

        moveAt(clientX, clientY);
    }

    function stop() {
        if (!isDragging) {
            return;
        }

        isDragging = false;

        hero.style.top = parseInt(hero.style.top) + pageYOffset + 'px';
        hero.style.position = 'absolute';

        document.removeEventListener('mousemove', move);
        hero.removeEventListener('mouseup', up);

    }

    function moveAt(clientX, clientY) {

        let newLeft = clientX - shiftX;
        let newTop = clientY - shiftY;
        let newBottom = newTop + hero.offsetHeight;

        if (newBottom > document.documentElement.clientHeight) {
            let docBottom = document.documentElement.getBoundingClientRect().bottom;
            let scrollY = Math.min(docBottom - newBottom, 10);
            if (scrollY < 0) scrollY = 0;
            window.scrollBy(0, scrollY);
            newTop = Math.min(newTop, document.documentElement.clientHeight - hero.offsetHeight);
        }

        if (newTop < 0) {
            let scrollY = Math.min(-newTop, 10)
            if (scrollY < 0) scrollY = 0;
            window.scrollBy(0, -scrollY);
            newTop = Math.max(newTop, 0);
        }

        if (newLeft < 0) newLeft = 0;

        if (newLeft > document.documentElement.clientWidth - hero.offsetWidht) {
            newLeft = document.documentElement.clientWidth - hero.offsetWidht;
        };

        hero.style.left = newLeft + 'px';
        hero.style.top = newTop + 'px';
    }

};