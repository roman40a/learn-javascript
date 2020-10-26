'use strict';
const content = document.querySelector('#contents');

content.addEventListener('click', confirmExit);

function confirmExit(event) {
    const elem = event.target.closest('a');

    if (elem.tagName != 'A') return;
    const ref = elem.getAttribute('href');

    const answer = confirm('Вы действительно желаете покинуть сайт и перейти на "' + ref + '"?');

    if (!answer) {
        event.preventDefault();
    }
}