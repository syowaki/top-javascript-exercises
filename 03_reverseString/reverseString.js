//get a variable called string
//map out each letter of the string 

const reverseString = function(string) {
    let stringReverse = [];
    const stringArray = string.split("");
    const stringLength = stringArray.length
    for(i = stringLength; i >= 0; i--) {
        const letter = stringArray[i]
        stringReverse.push(letter)
    }
    return stringReverse.join("")
};

// Do not edit below this line
module.exports = reverseString;
