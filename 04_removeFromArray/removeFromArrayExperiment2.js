const removeFromArray = function(num1, ...arg) { // add arguments with spread and rest 
    let newArray = []; // Initialize an empty array to store the result
    for (let i = 0; i < num1.length; i++) { // Loop through each element in 'num1'
        if (!arg.includes(num1[i])) { // Check if 'num1[i]' is not in 'arg'
            newArray.push(num1[i]); // Add the item to newArray if it's not in 'arg'
        }
    }
    return newArray; // Return the new array
};



    /*    let newArray = []// empty array
    for (let i = 0; i <= arg; i++) {// try a loop method
        newArray += num1
    } return newArray
};*/

// Do not edit below this line
module.exports = removeFromArray;
