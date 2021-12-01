let rollback = 20;
let adaptive = true;

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? \nПример: Простые, Сложные, Интерактивные");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа? \nПример: 12000"));
adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен? \nПример: Планшет");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить? \nПример: 5000"));
let service2 = prompt("Какой дополнительный тип услуги нужен? \nПример: Планшет");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить? \nПример: 5000"));

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

if (fullPrice > 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else {
  console.log("Скидка не предусмотрена");
}