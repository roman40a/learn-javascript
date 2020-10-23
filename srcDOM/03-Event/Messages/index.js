"use strict";

let removeBtns = document.querySelectorAll(".remove-button")

removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const message = e.target.parentNode;
        message.remove();
    });
})


