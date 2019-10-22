'use strict';

let menu = document.querySelector('.menu'),
	m = document.querySelectorAll('.menu-item'),
	m5 = document.createElement('m5'),
	title = document.getElementById('title'),
	promptForApple = document.getElementById('prompt'),
	adv = document.querySelector('.adv');


m5.classList.add('menu-item');
m5.innerHTML = 'Пятый пункт';
menu.appendChild(m5);
menu.insertBefore(m[2], m[1]);
adv.remove();
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.textContent = 'Мы продаем только подлинную технику Apple';
let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptForApple.textContent = yourOpinion;

