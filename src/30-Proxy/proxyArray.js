'use strict';

let array = [1, 2, 3];

array = new Proxy(array, {
    get(array, id) {
        if (id >= 0) {
            return array[id];
        } else {
            console.log('Id:' + id)
            console.log('array.length - N:' + (array.length + id))
            return array[(Number(array.length) + Number(id))];
        }
    }
});

alert(array[1]); // 2
alert(array[-2]); // 2
alert(array[-1]); // 3
alert(array[-3]); // 1