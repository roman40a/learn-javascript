'use strict';

let tip = document.createElement('div');

document.addEventListener('mouseover', showToolTip);
document.addEventListener('mouseout', removeToolTip);

function showToolTip(event) {
    const elem = event.target;
    if (!elem.dataset.tooltip) return;



    tip.className = 'tooltip';
    tip.innerHTML = elem.dataset.tooltip;
    document.body.append(tip);
    console.log(tip);

}

function removeToolTip(event) {
    const elem
    tip.remove();
};