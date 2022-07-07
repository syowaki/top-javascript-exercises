//for loop that pushes into new array between two numbers passed as the functions argument
//add each number in the array
const sumAll = function(x, y) {
    //puts all the numbers that need to be added into add array
    let addArray = []
    if(x < 0 || y < 0) {
        return ("ERROR")
    } else if(typeof x !== "number" || typeof y !== "number") {
        return("ERROR")
    } else if(x === y) {
        addArray.push(x)
        console.log("equal: " + x)
    } else if(x < y) {
        for(i = x; i <= y; i++) {
            addArray.push(i)
        }
        console.log("x less than: " + addArray)
    } else if(x > y) {
        for(i = y; i <= x; i++) {
            addArray.push(i)  
        }
        console.log("x greater than: " + addArray)
    } 

    console.log("Checking addArray" + addArray)
    //adds all numbers in add array
    let sum = 0;
    for(i = 0; i < addArray.length; i++) {
        sum = sum + addArray[i]
        console.log("adding each number: " + sum)
    }    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
