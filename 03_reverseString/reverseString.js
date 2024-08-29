const reverseString = function(words) {
    let reversedWords = "";
    for (let i = words.length -1; i >= 0; i --) {
        reversedWords += words[i]
    }
    return reversedWords

};

/* Initialization of for loop:

The function initializes an empty string reversedWords that will hold the reversed version of words.
Loop Setup:

The for loop is set up to start from the last character of the words string (i = words.length - 1) and moves towards the first character (i >= 0).
i-- decrements the loop counter by 1 on each iteration.
Character-by-Character Reversal:

On each iteration, the character at position i in words is appended to the reversedWords string.
This builds the reversed string character by character.*/

// Do not edit below this line
module.exports = reverseString;
