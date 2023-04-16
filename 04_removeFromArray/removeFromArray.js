const removeFromArray = function (an_array, an_argument) {
    ROUNDS = an_array.length
    for (let i = 0; i < ROUNDS; i ++) {
        if (an_array[i] === an_argument) {
            let X = an_array.splice(i);
        }
    } return X;
};

// Do not edit below this line
module.exports = removeFromArray;
