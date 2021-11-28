let title = "lesson02";
let screens = "Simple, Complex, Interactive";
let screenPrice = 10;
let rollback = 99;
let fullPrice = 999999999;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

let priceOfScreens = screenPrice + "$";
console.log(priceOfScreens);

let allFullPrice = fullPrice + "$";
console.log(allFullPrice);

let str = screens.toLowerCase();
console.log(str.split(", "));

console.log(fullPrice * (rollback / 100));