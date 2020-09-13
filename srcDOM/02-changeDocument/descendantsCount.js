'use strict';

let lis = document.getElementsByTagName('li');
// console.log(lis);

for (let li of lis) {
    let descendantsCount = li.getElementsByTagName('li').length;
    // console.log(descendantsCount);
    if (!descendantsCount) continue;

    li.firstChild.data += ' [' + descendantsCount + ']';
}