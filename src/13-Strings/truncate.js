'use strict';

function truncate(str, maxlength) {
    if (maxlength > str.length) {
        return str;
    } else {
        let cutStr = str.slice(0, (maxlength - 1)) + '…';
        return cutStr;
    }
};

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20))