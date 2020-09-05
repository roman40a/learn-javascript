'use strict';

let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                return new ReferenceError(`свойства ${prop} не существует`);
            }
        }
    });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка