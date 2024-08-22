const removeFromArray = function(array, ...args) { // the function accepts 2 types of parameters:
    // 'array': expected to be an array:
    // '...args': The rest parameter syntax (...args) allows the function to accept an indefinite number of arguments after the array parameter.
    let newArray = []; // create an empty array to store elements of the original array, and those to be removed.
    array.forEach((item) => { // loop through each element (item) in the original array
        if (!args.includes(item)) { // This conditional checks whether the current item is NOT included in the args array.
            newArray.push(item); // If the condition in the previous step is true, this line adds (pushes) the current item to the newArray.
        }
    }); // end the loop
    return newArray; // return the new array
};

// Do not edit below this line
module.exports = removeFromArray;
