const reverseString = function(words) {
    
    let array = words.split() // split string into an array?
    let arrayReverse = array.reverse()// reverse the order
    let arrayJoin = arrayReverse.join()//join it back together
    return arrayJoin

};

// Do not edit below this line
module.exports = reverseString;
