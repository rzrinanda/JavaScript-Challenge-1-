//Play with numbers
let arrayEven = [];
let arrayOdd = [];
let arrayMultiply5 = [];
let arrayPrime = [];
let arrayPrimelt100 = [];
const playNumbers = function(firstY, endY) {
  for (let num = firstY; num <= endY; num++) {
    let even = num % 2 === 0 ? true : false;
    let odd = !even;
    let multiply5 = num % 5 === 0 ? true : false;
    let prime = isPrime(num);
    // let primelt100 = num === 2 ? true : (endY % num === 0 && num < 100) ? false: true;
    if (even) {
      arrayEven.push(num);
    }
    if (odd) {
      arrayOdd.push(num);
    }
    if (multiply5) {
      arrayMultiply5.push(num);
    }
    if (prime) {
      arrayPrime.push(num);
    }
    if (prime && num < 100) {
      arrayPrimelt100.push(num);
    }
  }
};

const isPrime = n => {
  if (n < 2) return false;

  var q = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
};
playNumbers(0, 1000);
console.log(arrayOdd.join(", "));
console.log(arrayEven.join(", "));
console.log(arrayMultiply5.join(", "));
console.log(arrayPrime.join(", "));
console.log(arrayPrimelt100.join(", "));
