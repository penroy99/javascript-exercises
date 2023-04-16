const leapYears = function(someYear) {
    if (someYear % 4 != 0) {
        return false; 
    } else if (someYear % 100 != 0) {
        return true;
    } else if (someYear % 400 != 0) {
        return false;
    } else { 
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;


/* 

check if divisible by 4:

-- if yes go next --
-- if no return NOT A LEAP YEAR --

check if divisible by 100:

-- if yes go next --
-- if not return A LEAP YEAR --

check if divisible by 400:

-- if yes return A LEAP YEAR --
-- if not return NOT A LEAP YEAR --

*/