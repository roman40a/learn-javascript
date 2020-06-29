'use strict'

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

const emptyObj = {};

isEmpty(emptyObj);

alert(isEmpty(emptyObj));

emptyObj.test = 'test';

alert(isEmpty(emptyObj));