'use strict';

function runOnKeys(func, ...codes) {
    let keys = new Set();

    document.addEventListener('keydown', run);

    function run(event) {
        let key = event.code;
        keys.add(key);

        for (let code of codes) {
            if (!keys.has(code)) {
                return;
            }
        }
        keys.clear();

        func();
    }
    document.addEventListener('keyup', (event) => {
        keys.delete(event.code)
    });

}

const show = function (message) {
    let elem = document.createElement('div');
    elem.innerHTML = message;
    elem.style.color = '#3c763d;';
    elem.style.padding = "15px";
    elem.style.border = "1px solid #d6e9c6";
    elem.style.borderRadius = "4px";
    elem.style.backgroundColor = "#dff0d8";
    elem.style.textAlign = "center";

    document.body.append(elem);
}

runOnKeys(
    () => show("Получилось!"),
    "KeyQ",
    "KeyW"
)
