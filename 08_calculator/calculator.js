const add = function(a, b) {
	return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(array) {
  let value = 0;
	for (let i = 0; i < array.length; i ++) {
    value += array[i];
  }
  return value;
};

const multiply = function(array) {
  let value = 1;
  for (let i = 0; i < array.length; i ++) {
    value *= array[i];
  }
  return value;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } 
  else {
      let factArray = [];
    let value = 1;
    do {
      factArray.unshift(num);
      num -= 1;
    }
    while (num > 0);
    for (let i = 0; i < factArray.length; i ++) {
      value *= factArray[i];
    }
    return value;
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
