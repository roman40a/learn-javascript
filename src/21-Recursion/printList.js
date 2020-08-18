'use strict';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let val = list;
    while (val) {
        alert(val.value);
        val = val.next;
    };
};

printList(list);


function printListRec(list) {
    alert(list.value);

    if (list.next) {
        printListRec(list.next);
    }
};

printListRec(list);
