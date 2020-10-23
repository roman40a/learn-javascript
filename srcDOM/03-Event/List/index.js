'use strict';

document.querySelector(".title").onclick = function () {

    sweets.classList.toggle("open")

    // Альтернативное, более сложное и длинное решение:
    // switch (sweets.classList.value) {
    //     case ("menu"):
    //         sweets.classList.add("open")
    //         break;

    //     case ("menu open"):
    //         sweets.classList.remove("open")
    //         break;
    // };
};