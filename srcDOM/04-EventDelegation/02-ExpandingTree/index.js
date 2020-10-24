'use strict';

const listTree = document.querySelector('.tree');

function hidderList(event) {
    if (event.target.tagName != 'SPAN') return; //'LI'
    // let hiddenUl = event.target.parentNode.querySelector('UL');
    let hiddenUl = event.target.nextElementSibling;
    hiddenUl.hidden = !hiddenUl.hidden;
};

listTree.addEventListener('click', hidderList);

// function selectList(event) {
//     if (event.target.tagName != 'LI') return;
//     const selectedLi = event.target;
//     selectedLi.style.fontWeight = 'bold';
//     selectedLi.style.cursor = 'pointer';
// };

// function unSelectList(event) {
//     if (event.target.tagName != 'LI') return;
//     const selectedLi = event.target;
//     selectedLi.style.fontWeight = 'normal';
//     selectedLi.style.cursor.remove();
// };


// listTree.addEventListener('mouseover', selectList);
// listTree.addEventListener('mouseout', unSelectList);
