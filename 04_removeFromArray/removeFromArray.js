//array, and the rest are numbers


const removeFromArray = function(ogArray, a, b, c, d) {
    const newArray = []
    for(const number of ogArray) {
        let found = false;
        if(number === a) {
            found=true;
        }
        if(number === b) {
            found=true;
        }
        if(number === c) {
            found=true;
        }
        if(number === d) {
            found=true;
        }
        if(found === false) {
            newArray.push(number)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
