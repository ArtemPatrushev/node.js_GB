const colors = require('colors');
const color = {
  0: 'red',
  1: 'green',
  2: 'yellow',
};

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); ++i) if (n % i === 0) return false;
  return n;
};

const printPrimeNumber = (x) => {
  // проработать пустую строку ''
  num = +x;
  if (typeof num !== 'number' || isNaN(num))
    return console.error(colors.yellow('Переданное значение не является числом'));
  if (num < 2) console.error(colors.red('Простые числа в данном диапазоне отсутствуют'));

  const arr = [];
  for (let n = num; n > 0; n--) if (isPrime(n)) arr.push(n);
  arr.forEach((num, i) => console.log(colors[color[i % 3]](num)));
};

printPrimeNumber(process.argv[2]);
