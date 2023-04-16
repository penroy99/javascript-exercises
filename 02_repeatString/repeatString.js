const string = 'hey'
const num = 3

const repeatString = function repeatString(string, num) {
    let result = ''
    for (let i = 0; i < num; i ++) {
        result += string;
    } 
    return result; 
};



// Do not edit below this line
module.exports = repeatString;
