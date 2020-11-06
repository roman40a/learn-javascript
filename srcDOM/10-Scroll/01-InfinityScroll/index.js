'use strict';

function addDate() {
    let date = new Date();
    while (true) {
        let endOfWindow = document.documentElement.getBoundingClientRect().bottom;

        if (endOfWindow > document.documentElement.clientHeight + 100) break;

        let elem = document.createElement('div');
        elem.innerHTML = `Дата: ${date}`;
        elem.style.margin = '15px 0';
        // elem.style.color = 'rgb(235, 219, 166)';
        document.body.append(elem);
    }
}

window.addEventListener('scroll', addDate);

addDate();