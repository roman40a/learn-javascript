'use strict';

console.log(ball.clientHeight)


field.onclick = function (event) {

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2
    };

    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.top < 0) ballCoords.top = 0;

    if (ballCoords.left > field.clientWidth - ball.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    };
    if (ballCoords.top > field.clientHeight - ball.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    };


    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};