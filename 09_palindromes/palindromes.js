function isPalindrome(a, b) {
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}

 const palindromes = function (str) {
    let newString = (str.toLowerCase()).replaceAll('.', ' ');
    newString = newString.replaceAll(', ', ' ');
    newString = newString.replaceAll(' ', '');
    newString = newString.replaceAll('!', '');
    let reversed = newString.split("").reverse().join("");
    return isPalindrome(newString, reversed);
}

// Do not edit below this line
module.exports = palindromes;