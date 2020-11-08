'use strict';

const mouse = document.querySelector('#mouse');

mouse.addEventListener('click', moveMouse);

function moveMouse() {
    mouse.tabIndex = "0";
    // mouse.style.display = 'block';
    mouse.style.position = 'fixed';
    mouse.focus();

    mouse.addEventListener('keydown', move);

    function move(event) {
        let coords = mouse.getBoundingClientRect();
        let newCoords = {
            left: coords.x,
            top: coords.y
        };

        let key = event.key;
        switch (key) {
            case 'ArrowRight':
                mouse.style.left = newCoords.left + mouse.offsetWidth + 'px';
                break;
            case 'ArrowLeft':
                mouse.style.left = newCoords.left - mouse.offsetWidth + 'px';
                break;
            case 'ArrowDown':
                mouse.style.top = newCoords.top + mouse.offsetHeight + 'px';
                break;
            case 'ArrowUp':
                mouse.style.top = newCoords.top - mouse.offsetHeight + 'px'
                break;

        };
    };
}