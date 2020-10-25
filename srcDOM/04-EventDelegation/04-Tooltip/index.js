'use strict';

function showTooltip(event) {
    const tip = event.target.dataset.tooltip;
    if (!tip) { return };

    const tooltip1 = document.createElement('div');
    tooltip1.className = 'tooltip';
    tooltip1.innerHTML = tip;
    document.body.append(tooltip1);

    let targetCoords = event.target.getBoundingClientRect();

    let tipLeft = targetCoords.left + ((targetCoords.width - tooltip1.offsetWidth) / 2);
    if (tipLeft < 0) {
        tipLeft = 5
    };

    let tipTop = targetCoords.top - tooltip1.offsetHeight - 5;
    if (tipTop < (targetCoords.height + 5)) {
        tipTop = targetCoords.top + targetCoords.height + 5;
    };

    tooltip1.style.left = tipLeft + 'px';
    tooltip1.style.top = tipTop + 'px';
}

function removeTooltip(event) {
    const tip = event.target.dataset.tooltip;
    if (!tip) { return };

    const tooltip1 = document.querySelector('.tooltip');
    tooltip1.remove();
}

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', removeTooltip);