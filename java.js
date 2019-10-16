'use strict';

/*
var leftBorderWidth = 4;
let second = 2;
const pi = 3.14;


console.log(second)


// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

console.log(4/0);
console.log('string'*9);

let somthing;
console.log(somthing);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);
console.log(persone.age);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);

//alert("Hello World");

//let answer = confirm("Are you here?")

//console.log(answer);

//let answer = +prompt("are you 18?", "Yes")

//console.log(typeof(answer));

//console.log("arr" + " - object");
//console.log(4 + +" - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClose = false;

console.log(isChecked && isClose); //оператор И
console.log(isChecked || isClose); //оператор ИЛИ
console.log(isChecked || !isClose); //оператор ИЛИ и !NOT

if (2*4 == 8) {
    console.log("Верно!")
} else {
    console.log("Неверно!")
}

let num = 50;

if (num < 49) {
    console.log('Неверно!') 
} else if (num > 100) {
    console.log('Много!')
} else {
    console.log('Верно!')
}
// тернарный оператор (в его работе 3 аргумента)
(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!')
        break;
    case num > 80:
        console.log('Все еще много!');
        break;
    case 50: //проверка на соответсвие значению т.е. 50 == 50
        console.log('Верно!');
        break;
    default: //выполняется когда ни одно условие не верно
        console.log('Что-то пошло не так!');
        break;
}

//цикл while
let numa = 50;
// while (numa < 55) { // пока переменная num < 55 цикл будет выполнять действия
//    console.log(numa);
//    numa++;
//}

do {
    console.log(numa);
    numa++;
}
while (numa < 55);

for (let i = 1; i < 8; i++) { // 0, undefind, null, пустая строка == false, все остальное true
    if (i == 6) {
        continue; //or continue Для продолжения цикла но с пропуском условия if т.е. 6
    }
    console.log(i);
}

do {
    console.log(i);
    i++;
    if (i == 6) {
        continue;
    }
}
while (i < 8);
//let i = 1;
while (i < 8) {
    console.log(i);
    i++;
    if (i == 6) {
        break;
    }
}
*/
// Функции

/*function showFristMessage(text) {
    alert(text);
}

showFristMessage("Hello World") */

/*function showFristMessage(text) {
    alert(text);
    let num = 20; // локальная переменная
}

showFristMessage("Hello World")
console.log(num); // ее не будет видно т.к. она локальная и обьявлена внутри ф-ции. */

/*let num = 20; // создана глобальная переменная за пределами ф-ции
function showFristMessage(text) {
    alert(text);
    num = 10; // обращение к глобальной переменной
}

showFristMessage("Hello World")
console.log(num); */

// let num = 20; // создана глобальная переменная за пределами ф-ции
// function showFristMessage(text) {
//     alert(text);
//     let num = 10; // создана локальная переменная, замыкание ф-ции, если удалить эту
// //строчку то консоль выведет значение глобальной переменной num
//     console.log(num);
// }

// showFristMessage("Hello World")
// console.log(num);

// function calc(a,b) { // - function declaration - ф-ция обьявленная в потоке кода, 
//     //функция обьявленная до начала кода, ее можно вызывать до обьявления
//     return (a + b);
// }

// console.log(calc(3,4));
// console.log(calc(8,3)); // если переставить эти вызовы в начала кода, то ничего не поменяется

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);


// let calc  = function(a,b) { // function expretion - функциональное выражение, 
//     // создается когда код до нее доходит
//     return (a + b);
// }
// console.log(calc(3,4)); // если поставить перед ф-цией будет ошибка

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

let calc = (a,b) => a+b // стрелочная ф-ция, не имеет своего контекста вызова

console.log(calc(5,4));
console.log(calc(8,4));

function retVar() {
    let num = 48;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

// методы - вспомогательные ф-ции, свойства - вспомогательные значения

let str = "test";
console.log(str.length); // св-во lenght выводит длинну строки или др. типов данных

console.log(str.toUpperCase()); // методы позволяют изменять содержимое в данном случае переменной
console.log(str.toLowerCase());

let twelve = "12.2";
console.log(Math.round(twelve)); // команда округления 

let twelve = "12.2px";
console.log(parseInt(twelve)); /* команда перевода чисел в другю систему исчисления
(двоичную, десятичную и т.д.) 
нужно указывать в какую через запятую, в данном случае округлит до целого числа.*/
console.log(parseFloat(twelve)); /* команда возвращает десятичное число, 
в данном случае откинет строку "px" */