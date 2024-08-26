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

// Do not edit below this line
module.exports = removeFromArray;
