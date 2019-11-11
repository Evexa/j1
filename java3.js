// // localStorage.setItem("number", 1);// - создает ключ и значение

// // console.log(localStorage.getItem("number"));// - получает значение из ключа

// // localStorage.removeItem("number"); // удаляет ключ

// // localStorage.clear(); // очищает полностью

// window.addEventListener("DOMContentLoaded", function() {
//     let checkbox = document.getElementById("rememberMe"),
//         change = document.getElementById('change'),
//         form = document.getElementsByTagName('form')[0];

//     if(localStorage.getItem("isChecked") === "true") {
//         checkbox.checked = true;
//     };

//     if(localStorage.getItem('bg') === "changed") {
//         form.style.backgroundColor = "#FF4766"
//     };

//     checkbox.addEventListener("click", function() {
//         localStorage.setItem("isChecked", true);
//     });

//     change.addEventListener('click', function() {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = "#FF4766"
//     });

//     let persone = {
//         name: "Alex",
//         age: 25,
//         tech: ["mobile", 'notebook']
//     }

//     let serializedPersone = JSON.stringify(persone);
//     localStorage.setItem("Alex", serializedPersone);

//     console.log(JSON.parse(localStorage.getItem("Alex")));
// });

// ПРОВЕРКА НА ОШИБКИ
// let json = '{"id":2}'

// try {
//     let user = JSON.parse(json);
//     console.log(user);

//     if(!user.name){
//         throw new Error("В этих данных нет имени!")
//     }
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log('Мы получили ошибку: ${error.name}')
// } finally {
//     console.log('Будет выполняться всегда!')
// }

// console.log('А я буду работать дальше')

// QJUERY

// $(document).ready(function() {

//     $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
//         $('.overlay').fadeIn(1000);
//         $('.modal').slideDown(1000);
//     });

//     $('.close').click(function() {
//         $('.modal').slideUp(1000);
//         $('.overlay').fadeOut(1000);
//     });

// });