const removeFromArray = function(num, ...arg) {
    // remove argument from parameters##
    // identify the argument to be removed
    let newArray = []// create a variable to store the new array
    num.forEach((item) => {// loop through the array to find the argument to be removed
        if (!arg.includes(item)) {// if 'arg' is not in the array
            newArray.push(item) // add items to newArray
        }
    });// 
    return newArray // return array
};

/* Step-by-Step Explanation:
Parameters:

num: This is the array from which elements will be removed.
...arg: The spread operator (...) gathers all additional arguments into an array called arg. These represent the elements that should be removed from num.
Initialize newArray:

let newArray = []; creates an empty array that will store the elements of num that are not present in arg.
Loop Through num:

num.forEach((item) => { ... }); iterates over each element in the num array.
Inside the loop:
if (!arg.includes(item)) { ... }: This condition checks whether the current item from num is not included in the arg array.
If item is not in arg, it's added to newArray using newArray.push(item);.
Return Statement:

return newArray; returns newArray, which now contains only those elements from num that are not in arg.*/

// Do not edit below this line
module.exports = removeFromArray;
