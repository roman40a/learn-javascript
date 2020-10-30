'use strict';

let tip;

document.addEventListener('mouseover', showToolTip);
document.addEventListener('mouseout', removeToolTip);

function showToolTip(event) {
    const elem = event.target.closest('[data-tooltip]');

    if (!elem) return;

    tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.innerHTML = elem.dataset.tooltip;
    document.body.append(tip);

    let coordsElem = elem.getBoundingClientRect();
    let left = coordsElem.left + ((elem.offsetWidth - tip.offsetWidth) / 2);
    let top = coordsElem.top - tip.offsetHeight - 5;

    if (left < 0) { left = 0 };
    if (top < 0) { top = coordsElem.top + elem.offsetHeight + 5 };

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
}

function removeToolTip(event) {
    if (tip) {
        tip.remove();
        tip = false;
    }
}