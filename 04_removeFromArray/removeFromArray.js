const removeFromArray = function() {
    //saves the first argument as ogArray the rest of the arguments are in argumentArray
    let argumentArray = [].slice.call(arguments);
    let arrayLength = argumentArray.length
    let ogArray = argumentArray[0];
    let removeArray = []
    //loop to add numbers that match in ogArray and argumentArray
    for(const number of ogArray) {
        console.log("This should run through all numbers in ogArray: " + number)
        for(i = 1; i <= arrayLength; i++) {
            if(number === argumentArray[i]) {
                removeArray.push(number);
            }
        }
    }
    //if ogArray and argumentArray have overlapping values: delete from ogArray
    ogArray = ogArray.filter(item => !removeArray.includes(item));
    console.log("The answer array is " + ogArray)
    return ogArray;


//Below belongs after const removeFromArray =
//function(ogArray, a, b, c, d) {
    //A SOLUTION
    // const newArray = []
    // for(const number of ogArray) {
    //     let found = false;
    //     if(number === a) {
    //         found=true;
    //     }
    //     if(number === b) {
    //         found=true;
    //     }
    //     if(number === c) {
    //         found=true;
    //     }
    //     if(number === d) {
    //         found=true;
    //     }
    //     if(found === false) {
    //         newArray.push(number)
    //     }
    // }
    // return newArray


};
removeFromArray(["hey", 1, 2, 4], 1,2,"hey");

// Do not edit below this line
module.exports = removeFromArray;
