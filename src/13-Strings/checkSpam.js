'use strict';

function checkSpam(str) {
    let lowStr = str.toLowerCase();
    return (lowStr.includes('viagra') || lowStr.includes('xxx'))
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));