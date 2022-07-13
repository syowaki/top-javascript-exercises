const palindromes = function (string) {
    //make string lower case and without any punctuation
    let stringLowerCase = string.toLowerCase();
    let stringAsArray = stringLowerCase.split("");
    let arrayNoPunctuation = stringAsArray.filter(function checkLetter(letter) {
        let testLetter = /^[a-z]+$/.test(letter);
        if(testLetter === true) {
            return letter;
        }
    });
    
    //creating a throw away array because .reverse() changes original array as well
    let destructArray = arrayNoPunctuation.map(x => x)
    console.log(destructArray);

    // reverse the string
    let reverseArray = destructArray.reverse();

    //make array into string to compare in if statement
    reverseArray = reverseArray.join();
    arrayNoPunctuation = arrayNoPunctuation.join();

    //if string array = reversed string array return true
    return (arrayNoPunctuation === reverseArray ? true : false)

};

// Do not edit below this line
module.exports = palindromes;
