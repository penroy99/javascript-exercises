const fibonacci = function(input) {
    const n = parseInt(input);
    let array = [0, 1];
    if (n < 1) {
        return "OOPS";
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    } else {
        let i = 2;
        while (n + 1 > i) {
            array[i] = array[i-1] + array[i-2];
            i ++;
        }
    }
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
