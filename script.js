let money, time;
time = prompt('Введите дату в формате YYYY-MM-DD', '');
money = +prompt("Ваш бюджет на месяц?", '');
if (isNaN(money) || money == '' || money == null) {
  console.log('chlen');
} else {
console.log(money);
};