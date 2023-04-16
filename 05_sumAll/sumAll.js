const sumAll = function(first_int, final_int) {
    let sum = Number()
    for (let i = Number(first_int); i <= Number(final_int); i++) {
      sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
