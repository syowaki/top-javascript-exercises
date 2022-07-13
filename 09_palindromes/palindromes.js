const palindromes = function (string) {
    let stringLowerCase = string.toLowerCase();
    let stringAsArray = stringLowerCase.split("");
    let arrayNoPunctuation = stringAsArray.filter(function checkLetter(letter) {
        let testLetter = /^[a-z]+$/.test(letter);
        if(testLetter === true) {
            return letter;
        }
    });
    
    let destructArray = arrayNoPunctuation.map(x => x)
    console.log(destructArray);

    // reverse the string
    let reverseArray = destructArray.reverse();

    //make array into string
    reverseArray = reverseArray.join();
    arrayNoPunctuation = arrayNoPunctuation.join();

    //TEST
    console.log("stringArray: " + arrayNoPunctuation)
    console.log("reverse array: " + reverseArray)

    //if string array = reversed string array return true
    if(arrayNoPunctuation === reverseArray) {
        return true;
    }else {
        return false;
    }
    
    //might have to make the array back to string to compare

    

};
//TEST
palindromes("yes");

// Do not edit below this line
module.exports = palindromes;
