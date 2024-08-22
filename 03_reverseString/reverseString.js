const reverseString = function(words) {
    let reversedWords = "";
    for (let i = words.length -1; i >= 0; i --) {
        reversedWords += words[i]
    }
    return reversedWords

};

// Do not edit below this line
module.exports = reverseString;
