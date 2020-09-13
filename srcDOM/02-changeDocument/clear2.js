'use strict';

function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}

setTimeout(() => clear(elem), 5000);