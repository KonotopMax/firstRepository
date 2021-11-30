let title = "lesson03";
let screens = "Simple, Complex, Interactive";
let screenPrice = 10;
let rollback = 99;
let fullPrice = 999999999;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

let priceOfScreens;
console.log(priceOfScreens + "$");

let allFullPrice;
console.log(allFullPrice + "$");

let str = screens.toLowerCase();
console.log(str.split(", "));

console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать? \nпример: Простые, Сложные, Интерактивные");
screenPrice = parseInt(prompt("Сколько будет стоить данная работа? \nпример: 12000"));
adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен? \nнапример service1, service2");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить? \nнапример servicePrice1, servicePrice2"));
let service2 = prompt("Какой дополнительный тип услуги нужен? \nнапример service1, service2");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить? \nнапример servicePrice1, servicePrice2"));

fullPrice = screenPrice + servicePrice1 + servicePrice2;
l
servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

if (fullPrice > 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else {
  onsole.log("Скидка не предусмотрена");
}