const repeatString = function(string, amount) { // add string and the amount of times it's repeated as arguments
    if (amount < 0) {
        return "ERROR"
    }
    let newString = ""// create variable to hold the new string
    for (let i = 0; i < amount; i++) {// create a loop that repeats the given number of times
        newString += string // add the given string to the result on each loop.
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
