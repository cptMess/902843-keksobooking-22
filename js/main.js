//ДЗ2
// случпйное целое число
const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 101);
console.log(getRandomInt(0, 101));


// случайное число с плавающей точкой
const getRandomFloat = function (min, max, symbol) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(symbol));
}
getRandomFloat(0, 1001, 1);
console.log(getRandomFloat(0, 1001, 4));
