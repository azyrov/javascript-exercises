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
  
  let sum = 0;

  for (let i = num; i > 2; --i) {

    let reduced = (i - 1);

    if (num === i) {
      sum += num * reduced;
    } else if (num > i) {
      sum += sum * (reduced - 1);
    } 
  }

  return sum
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
