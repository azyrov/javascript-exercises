const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
  return arr.reduce(((sum, current) => sum + current), 0);
};

const multiply = function(arr) {
  return arr.reduce(((sum, num) => sum * num), 1)
};

const power = function(numOne, numTwo) {
  return numOne ** numTwo;
};

const factorial = function(num) {

  if ((num === 0) || (num === 1)) {
    return 1
  }

  let result = 1;

  for (let i = 1;i <= num; i++) {

    result *= i;
  }

  return result;
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
