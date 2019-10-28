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