const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(x) {
	let sumTotal = x.reduce(function(result, item) {
    return result + item;
  }, 0)
  return sumTotal
};

const multiply = function(y) {
  let multiplyTotal = y.reduce(function(result, item) {
    return result * item
  }, 1)
  return multiplyTotal
};

const power = function(x,y) {
  let powerTotal = 1;
  for(i = 0; i < y; i++) {
    powerTotal *= x
  }
  return powerTotal
};

const factorial = function(x) {
  let factorialTotal = 1
	for(i = x; i > 0; i--) {
    factorialTotal *= i
  }
  return factorialTotal;
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
