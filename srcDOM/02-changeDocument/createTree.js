'use strict';

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let chUl = createTreeDom(obj[key]);
        if (chUl) {
            li.append(chUl);
        }

        ul.append(li);
    }

    return ul;
}

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере