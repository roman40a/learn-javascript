'use strict';

function getWeekDay(date) {
    let WeekDay = date.getDay();
    if (WeekDay == 0) { return "ВС" };
    if (WeekDay == 1) { return "ПН" };
    if (WeekDay == 2) { return "ВТ" };
    if (WeekDay == 3) { return "СР" };
    if (WeekDay == 4) { return "ЧТ" };
    if (WeekDay == 5) { return "ПТ" };
    if (WeekDay == 6) { return "СБ" };
};

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"