const leapYears = function(year) {
    year = parseInt(year)  // make string an integer
    if (year % 400 == "0") { // if divisible by 400
        return true; 
    } else if (year % 100 == 0) { // if divisible by 100
        return false;
    } else if (year % 4 == 0) {// if divisible by 4   
        return true;
    } else { //if not
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
