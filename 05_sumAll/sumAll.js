const sumAll = function(num1, num2) {
    let totalSum = 0; // create a variable to hold the final sum
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) { // if num1 or num2 are negative numbers return error, check if num1 and num2 are integers, non-numbers 
        return "ERROR";
    } 
    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) { // loop through the given numbers
            totalSum += i;// on each iteration add the number to the sum
        }
    } else if (num2 < num1) { // if num2 larger than num1
        for (let i = num2; i <= num1; i++) { // loop through the given numbers
            totalSum += i;
        }
    }     
        
    return totalSum;// return the sum after finishing the loop

};

// Do not edit below this line
module.exports = sumAll;
