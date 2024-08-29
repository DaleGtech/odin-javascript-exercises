const repeatString = function(string, amount) { // add string and the amount of times it's repeated as arguments
    if (amount < 0) {// return ERROR for negative numbers
        return "ERROR";
    } 
    let newString = ""
    for (let i = 0; i < amount; i++) {
        newString += string
    }
    return newString
};      

/*Explanation of 'for loop' code:
Loop Initialization (let i = 0): Starts the loop counter at 0.
Condition (i < amount): The loop continues as long as i is less than amount.
Increment (i++): Increases i by 1 after each loop iteration.
Loop Body (newString += string;): On each iteration, the string is concatenated to newString. If amount is 3 and string is "abc", the loop will concatenate "abc" three times, resulting in "abcabcabc".
Final Output:
After the loop completes, newString contains the input string repeated amount times, and this value is returned by the function. If amount is negative, the function returns "ERROR" instead.*/

// Do not edit below this line
module.exports = repeatString;
