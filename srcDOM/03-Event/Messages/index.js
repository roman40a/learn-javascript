"use strict";

let messageContainer = document.querySelectorAll(".pane");
console.log(messageContainer);

let removeBtns = document.querySelectorAll(".remove-button")

removeBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        const message = e.target.parentNode;
        message.remove();
    });
})


