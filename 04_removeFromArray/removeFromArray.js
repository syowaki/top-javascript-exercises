//array, and the rest are numbers


const removeFromArray = function() {
    let argumentArray = [].slice.call(arguments);
    console.log("argumentArray = " + argumentArray)
    console.log(argumentArray.typeOf)
    let arrayLength = argumentArray.length
    console.log("arrayLength = " + arrayLength)
    let ogArray = argumentArray[0];
    console.log("ogArray = " + ogArray)
    let removeArray = []
    for(const number of ogArray) {
        console.log("This should run through all numbers in ogArray: " + number)
        for(i = 1; i <= arrayLength; i++) {
            if(number === argumentArray[i]) {
                //if the number in ogArray and the argumentArray are equal
                //Then remove from original array
                //But can not remove in this step with array position because it will shift 
                removeArray.push(number);
            }
        }
    }
    ogArray = ogArray.filter(item => !removeArray.includes(item));
    console.log("The answer array is " + ogArray)
    return ogArray;


    //The error is that the ogArray's item is being deleted before all the numbers are run

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
