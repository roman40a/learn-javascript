'use strict';

function preloadImages(sources, callback) {
    let j = 0;

    function onLoad() {
        j++;
        if (j == sources.length) callback();
    }

    sources.forEach((item, index) => {
        let img = document.createElement('img');
        img.src = item;
        img.addEventListener('load', onLoad);
        img.addEventListener('error', onLoad);
    })
}

// ---------- тест ----------

let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
];

// добавляем случайные символы к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
}

// для каждого изображения
// создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.width;
    }
    alert(widthSum);
}

// каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
preloadImages(sources, testLoaded);