'use strict';

const containerMsg = document.querySelector('#container');

function removeMsg(e) {
    if (e.target.className != 'remove-button') return;
    const msg = e.target.parentNode
    msg.remove();
};

containerMsg.addEventListener('click', removeMsg);