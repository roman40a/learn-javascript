'use strict';

let styles = ["Джаз", " Блюз"]; //1

alert(styles);

styles.push(" Рок-н-Ролл"); //2

alert(styles);

styles[Math.floor((styles.length - 1) / 2)] = " Классика";

alert(styles);//3

alert(styles.shift("0"));

alert(styles); //4

styles.unshift("Рэп", " Регги");

alert(styles); //5