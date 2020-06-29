'use strict'

const emptyObj = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};


alert(isEmpty(emptyObj));

emptyObj.time = 30

alert(isEmpty(emptyObj));