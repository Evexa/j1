//                                                                      СОБЫТИЯ
// let btn = document.querySelectorAll('button'),
// wrap = document.querySelector('wrapper'),
// link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку!');
// }

// btn[0].addEventListener('click', function(event) {
//     console.log(event);
//     let target = event.target;
//     target.style.display = 'none';
//     // console.log('Произошло событие: ' + event.type + 'на элементе' + event.target);
    
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });

// wrap.addEventListener('click', function() {
//     console.log('Произошло событие: ' + event.type + ' на эл-те ' + event.target);
// });

// link.addEventListener('click', function(event) {
//     event.preventDefault(); - Заставляет event работать в прежднем виде
//     console.log('Произошло событие: ' + event.type + ' на эл-те ' + event.target);
// });

// btn.forEach(function(item) {
//     item.addEventListener('mouseleave', function() {
//         console.log("Вышли");
//     });
// });

//                                                                         МОБИЛЬНЫЕ СОБЫТИЯ
// touchstart касание к элементу click так же срабатывает
// touchmove движение пальца
// touchend палец перестал соприкасаться с сенсором
// touchenter когда палец заходит на элемент
// touchleave когда палец покинул элемент
// touchcancel когда точка события больше не региструется на поверхности

// window.addEventListener('DOMContentLoaded', function() {
//     let box = document.querySelector('.box');

//     box.addEventListener('touchstart', function(e) {
//         e.preventDefault();
//         console.log("Red box: touchstart")
//     });
// }); выводит в лог сообщение каждый раз когда палец соприкасается с элементом

// box.addEventListener('touchmove', function(e) {
//      e.preventDefault();
//      console.log("Red box: touchmove")
// }); выводит в лог когда палец движется по элементу

// box.addEventListener('touchend', function(e) {
//      e.preventDefault();
//      console.log("Red box: touchend")
// }); выводит в лог когда палец отрывается от элемента

// console.log(e.touches); - получает все касания(пальцев), которые были задейтвованы
// console.log(e.changedTouches); - получает список касаний(пальцев), которые были задействованы
// console.log(e.targeTouches); - получает все касания(пальцы), которые были задействаны на элементе
// console.log(e.target); - указывает элемент по которому было касание
// console.log(e.touches[0].target); - указывает элемент по которому было первое касание
// console.log(e.touches[0].pageX); - указывает координаты по X первого касания(пальца)

//                                                                         РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
// new RegExp('pattern'. 'flags'); полная записать рег.выажения
// /pattern/flags - короткая запись, pattern - Это то что хотим найти, flag - это i,g,m

// let ans = prompt('Введите ваще имя');

// let reg = /n/;

// console.log(ans.search(reg)); в переменной ans с помощью метода search ищем его аргумент т.е. рег.выражение /n/
// в итоге в заданном пользователем prompt будет искать букву n и выведет ее индекс в том месте где ее найдет, но только первый
// если буквы n не будет то выведет -1

// i - флаг регистра, когда нужно искать вне зависимости от регистра
// g - флаг глобальности, ищет не только первое вхождение но и остальные, вывод в форме массива
// m - флаг многострочности

// /n/i; - поиск во всех регистрах

// ans.search - будет искать только первое совпадение по регулярному выражению, с фгалом g не работает

// console.log(ans.match(reg)) - match без флага g будет искать только первое совпадение но выведет его в массиве
// с флагом g выведет все совпадения, которые будут в строке в виде массива

// /n/gi; или /n/ig; - поиск глобально и вне зависимости от регистра

// let pass = prompt('Введите пароль');
// console.log(pass.replace(/./g, "*")); код выведет парроль в виде символов * т.е. заменит все символы(/./g) с помощью метода
// .replace

// alert('12-34-56'.replace(/-/g, ':')); код поменяет все символы /-/ на ":"

// let ans = prompt('Введите ваще имя');
//     reg = /n/;
// console.log(reg.test(ans)); код проверит совпадение в prompt на букву n и выведет true если ее найдет или false

// /\d/ найти все цифры digits   /D найти все НЕ цифры
// /\w/ найти все буквы words    /W найти все НЕ буквы
// /\s/ найти все пробелы spaces /S найти все НЕ пробелы

// let ans = prompt('Введите число');
//     reg = /\d/g;
// console.log(ans.match(reg)); выведет из prompt все числа в виде массива

// let str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i)); выведет комбинацию из буквы,числа,буквы,числа вне зависимости от регистра

// /\// - поиск спец символов, /\$/, /\|/ , /\?/ , /\[/ и т.д. / / так ищется пробел

//                                                               СКРИПТЫ И ВРЕМЯ ИХ ВЫПОЛНЕНИЯ
// setTimeout(sayHello, 3000); - через 3000 млсек выведет alert Hello World!
// function sayHello() {
//     alert('Hello World!');
// }

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);  - не дает выводить сообщение в консоль через каждые 3000 млсек
// function sayHello() {
//     console.log('Hello World!');
// }

// setInterval(sayHello, 3000); - будет выводить в консоль сообщение с интервалом 3000 млсек
// function sayHello() {
//     console.log('Hello World!'); 
// }

// let timerId = setTimeout(function log() { - рекурсивный setTimeout, когда ф-ция вызывает сама себя(дает время чтобы выполнилась ф-ция + задержку в 2000 млсек)
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');
// function myAnimation() {
//     let pos = 0; - изначально позиция равна 0
//         id = setInterval(frame, 10); - через setInterval каждые 10 млсек запускается ф-ция frame
//         function frame() {
//             if (pos == 300) { - если позиция равна 300
//                 clearInterval(id); - сработает clearInterval для переменной id и она перестанет запускаться
//             } else { - если позиция 300 не достигнута
//                 pos++; - позиция будет увеличитьваться на 1 каждый раз, когда ф-ция запускается т.е каждые 10 млсек
//                 elem.style.top = pos + 'px'; - также элемент будет изменять свои стили top и left на 1px соответственно
//                 elem.style.left = pos + 'px';
//             }
//         }
// }
// btn.addEventListener('click', myAnimation);

// let btnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.tagName == 'BUTTON') { - деллигирование событий, если пользователь нажмет в нужное место задданое условием
//         console.log('Hello!');
//     }
// });

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('Hello!');
//     }
// });

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.matches('button.first')) {
//         console.log('Hello!');
//     }
// });
// ВСЕ ЭТИ ПАРАМЕТРЫ ДОСТУПНЫ ТОЛЬКО ДЛЯ ЧТЕНИЯ, ИЗМЕНЯТЬ ИХ НЕЛЬЗЯ:
// width = .clientWidth, - Отображает ширину элемента с padding + контент без видимой полосы прокрутки и границ
// height = .clientHeight ; - Отображает высоту элемента с padding + контент без видимой полосы прокрутки и границ

// .offsetWidth - отображает ширину эл-та с Padding + контент + видимую полосу прокрутки и границы
// .offsetHeight - отображает ширину эл-та с Padding + контент + видимую полосу прокрутки и границы

// .scrollWidth - Отображает ширину элемента с padding + контент + границы + ширину прокрутки
// .scrollHeight - Отображает ширину элемента с padding + контент + границы + высоту прокрутки

// btn.addEventListener('click', function() {
//     box.style.height = box.scrollHeight + 'px';  - изменяет высоту эл-та box на полную высоту учитывая scroll
// });

// ИЗМЕНЯЕМЫЕ ПАРАМЕТРЫ:
// .scrollTop - показывает то, что пользователь пролистал сверху в px
// .scrollLeft - то что слева в px

// box.scrollTop = 0; переместит прокрутку документа в самый верх

// console.log(box.getBoudingClientRect()); - метод, который показывает параметры: лево, право, верх, низ элемента box

// console.log(box.getBoudingClientRect().left); покажет только левый параметр эл-та

// console.log(document.documentElement.clientWidth); покажет ширину документа(элемента, страницы)
// console.log(document.documentElement.clientHeight); покажет высоту от url строки до низа окна(консоли и т.д.)

// console.log(document.documentElement.scrollTop); получит значение сколько в px пользователь отмотал от страницы сверху
// documentElement.scrollTop = 0; команда переместит в самый верх страницы

// scrollBy(x, y); метод, который перемещает страницу от текущего положения
// scrollBy(0, 200); на 200 px вниз

// scrollTo(x, y); метод, который переместит страницу к указанным координат от (0, 0);

//                                        КОНСТРУКТОРЫ И КЛАССЫ
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello!' + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25), - когда создается новый объект через new контекстом вывода для всех
// созданных методов и свойств будет только что созданным обьектом
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

// function showThis() {
//     console.log(this); - this контекст вызова, выведет контекст вывозова данной ф-ции, т.е. window
// }

// function showThis(a, b) {
//     console.log(this); - так же будет вызван в консоль window
//     function sum() {
//         console.log(this); -так же будет вызван в консоль window
//         return this.a + this+b; - NaN, даже при условии что заданны аргументы в вызове ф-ции потому что this обращается к внутренним свойствам ф-ции
//     }
// }
// showThis(4, 5);
// showThis(5, 5);

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         return a + b; - при замыкании ф-ции сложится сумма аргументов задданых при вызове, потому что если она
// // не находит аргументов внутри она ищет их вне себя
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);
// // в формате ES6 при использовании строго режима 'use strict'; контекст вызова ф-ций не будет window а станет undefind

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout(); - при вызове этой ф-ции внутри метода sum контекстом для нее будет window/undefined
//     }
// };
// obj.sum(); - при вызове данного метода this вызовет весь объект obj потому что обьект является его контекстом

// let user = {
//     name: "john"
// };
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith')); - с помощью метода call привязывает ф-цию sayName к обьекту user + аргумент ф-ции в виде строки
// console.log(sayName.apply(user, ['Snow'])); - с помощью метода call привязывает ф-цию sayName к обьекту user + аргумент ф-ции в виде массива

// function count(number) {
//     return this * number; - если запустить эту ф-ция ее контекст будет window/undefined
// }
// let double = count.bind(2) - переменная вызывает ф-цию count и с помощью метода bind привязыет контекст вызова 2
// console.log(double(3)); - вызовет ф-цию double в которой ф-ция count(number) где this = bind(2) 2 * 3 = 6
// console.log(double(10)); - 20

// let btn = document.querySelector('button');

// btn.addEventListener('click', fucntion() {
//     console.log(this); - котекстом вызова в данном случае будет сама кнопка, которую вызвали
//     this.style.backgroundColor = 'red'; - при клике на кнопку она станет красного цвета
//     function showThis() {
//         console.log(this); - для ф-ции внутри ф-нции контекст вызова будет window/undefined
//     }
//     showThis();
// });

//                                    ИНТЕРПОЛЯЦИЯ
// переменные let, const - видны только в блоке кода и создаются только тогда,
// когда до них дошла очередь. При использовании в цикле для каждой итерации
// создается своя переменная.

// переменная var существует изначально.

// let name = "Ivan",
//     age = 30,
//     mail = 'ex@mail.ru';

// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// function makeArray() {
//     var = items = [];

//     for(var i = 0; i < 10; i++) { - переменная i создана с var и она будет одна на весь цикл
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7](); - в ответе будет 3 раза по 10. если заменить на let то выведет как надо

// let fun = () => { - стрелочная ф-ция
//     console.log(this); - контекст вызова будет window/undefined
// };
// fun();

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this); - стрелочная ф-ция берет контекст вызова у родителя
//         };
//         say();
//     }
// }
// obj.sayNumber();

// letn btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this); - контекст вызова будет родитель, а у родителя кнопка btn
//     }
//     show();
// });

// function calcOrDouble(number, basis) {
//     basis = basis || 2; - Если задан второй аргумент basis то он будет true и ф-ция использует Его
//     // если не задан использует 2
//     console.log(number*basis);
// }
// calcOrDouble(3,5); - 15
// calcOrDouble(6); - 12

// function calcOrDouble(number, basis = 2) { - тоже самое только в формате ES6
//     console.log(number*basis);
// }
// calcOrDouble(3,5);
// calcOrDouble(6);

// class Rectangle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }
// const square = new Rectangle(10);
// console.log(square.calcArea());

//                        ОПЕРАТОР РАЗВОРОТА SPREAD ...
// let video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet); - выведет все три массива предварительно развернув их содержимое

// fucntion log(a, b, c) {
//     console.log(a); - выведет элементы из массива numbers
//     console.log(b);
//     console.log(c);
//     console.log(a + b + c); - сложит все аргументы из переменной numbers
// }
// let numbers = [2, 5, 7];

// log(...numbers); - развернет переменную numbers

// class Options {
// 	constructor(height, width, bg, fontSize, textAlign) {
// 		this.height = height;
// 		this.width = width;
// 		this.bg = bg;
// 		this.fontSize = fontSize;
// 		this.textAlign = textAlign;
// 	}

// 	createDiv() {
// 		let elem = document.createElement('div');
// 		document.body.appendChild(elem);
// 		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
// 		elem.style.cssText = param;
// 	}
// }

// const item = new Options(300, 350, "red", 14, "center");

// item.createDiv();

// let name = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };
// console.log(JSON.stringify(name)); преобразование в JSON
// console.log(JSON.parse(JSON.stringify(name))); преобразование из JSON в обычный обьект

//                          PROMISES
// ТАК ВЫГЛЯДИТ БЕЗ ПРОМИСА, РАЗРОСТАЮЩИЕСЯ КОЛБЭК Ф-ЦИИ

// let drink = 0;

// function shoot(arrow, headshot, fail) {
//     console.log('Вы сделали выстрел...');

//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
//     }, 3000)
// };

// function win() {
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function giveMoney() {
//     console.log('Вы выйграли деньги!')
// }

// function buyBeer() {
//     console.log('Вам купили пиво')
// }

// function loose() {
//     console.log('Вы проиграли!')
// }

// shoot({},
//         function(mark) {
//             console.log('Вы попали в цель!');
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             loose();
//         }
//     )

//                        ТАК ВЫГЛЯДИТ С ПРОМИСОМ

// let drink = 0;

// function shoot(arrow) {
//     console.log('Вы сделали выстрел...');
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
//         }, 3000);
//     });

//     return promise;
    
// };

// function win() {
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function giveMoney() {
//     console.log('Вы выйграли деньги!')
// }

// function buyBeer() {
//     console.log('Вам купили пиво')
// }

// function loose() {
//     console.log('Вы проиграли!')
// }

// shoot({})
//         .then(mark => console.log('Вы попали в цель!'))
//         .then(win)
//         .catch(loose)