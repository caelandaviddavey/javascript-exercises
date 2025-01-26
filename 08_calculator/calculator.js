const add = function(a, b) {
	let addedNumbers = a + b;
  return addedNumbers;
};

const subtract = function(a, b) {
	let subtractedNumber = a - b;
  return subtractedNumber;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let result = 1;
  if (n === 0) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }





};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
