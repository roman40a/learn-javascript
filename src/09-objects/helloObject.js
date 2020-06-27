'use strict';

const user = {};

user.name = 'Jhon';

alert(user.name);

user.surname = 'Smith';

alert(user.surname);

user.name = 'Pete';

alert(user['name']);

delete user.name;

alert(user.name);