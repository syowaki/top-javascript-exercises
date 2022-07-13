const fibonacci = function(x) {
    //array with 1 and 1 
    let fibonacciArray = [1, 1];

    //changes a string to rounded whole number
    let z = parseInt(x)

    //push previous value + second previous value
    if(x > 2) {
        //for loop that starts at 2 and runs until x 
        for(i = 2; i <= z; i++){
            fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1])
        }
        return fibonacciArray[z-1]
    }else if(z <= 2 && z > 0) {
        return fibonacciArray[z-1]
    }
    else {
        return "OOPS"
    }

    
};

// Do not edit below this line
module.exports = fibonacci;
