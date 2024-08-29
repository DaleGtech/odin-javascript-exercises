const reverseString = function(words) {
    const myArray = words.split()// split string into an array
    const reverseArray = myArray.reverse()//reverse the array order
    const joinArray = reverseArray.join()// stitch it back together
    return joinArray


};

// Do not edit below this line
module.exports = reverseString;
