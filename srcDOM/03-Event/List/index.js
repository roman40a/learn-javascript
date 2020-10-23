'use strict';

const titleList = document.querySelector(".title")
const sweetsInList = document.querySelector('.menu')

titleList.addEventListener('click', () => {
    sweetsInList.classList.toggle("open")
});

// document.querySelector(".title").onclick = function () {



    // Альтернативное, более сложное и длинное решение:
    // switch (sweets.classList.value) {
    //     case ("menu"):
    //         sweets.classList.add("open")
    //         break;

    //     case ("menu open"):
    //         sweets.classList.remove("open")
    //         break;
    // };
// };