'use strict';



/**
         * Проверка видимости элемента (в видимой части страницы)
         * Достаточно, чтобы верхний или нижний край элемента был виден
         */
function isVisible(elem) {
    let elemTop = elem.getBoundingClientRect().top;
    let elemBotttom = elem.getBoundingClientRect().bottom;
    let winHeight = document.documentElement.clientHeight;

    let topVisible = elemTop > 0 && elemTop < winHeight;
    let bottomVisible = elemBotttom < winHeight && elemBotttom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
            // отключение кеширования
            // эта строка должна быть удалена в "боевом" коде
            // realSrc += '?nocache=' + Math.random();

            img.src = realSrc;

            img.dataset.src = '';
        }
    }

}

window.addEventListener('scroll', showVisible);
showVisible();