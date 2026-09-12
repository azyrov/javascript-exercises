const fibonacci = function(numPosition) {

    // lets say the parameter is a variable called numPosition
    // create an array (arr) with [1, 1] since the fibonacci sequence (seq) we are using starts from 1
    // start a loop
    // sum of the iterating array item and the next iterating item is pushed into the array arr
    // stop the loop one item before the argument
    // create a varaible to store the actual value in the arguent position provided
    // we get the value by using the argument - 1 to get the indexed position 

    numPosition = parseInt(numPosition);
    typeof(num)

    let initialArr = [1, 1];

    if (numPosition === 0) {
        return 0;
    } else if (numPosition === 1) {
        return 1;
    } else if (numPosition === 2) {
      return 1;
    } else if (numPosition < 0) {
        return "OOPS"
    } else if ((typeof(numPosition) !== "number")) {
        return 0
    }

    for (let i = 0; i <= (numPosition - 1); i++) {
      let nextValue = initialArr[i] + initialArr[i + 1]
      initialArr.push(nextValue); 
    }

    let fibonacciValue = initialArr[numPosition - 1];

    return fibonacciValue;
};

// Do not edit below this line
module.exports = fibonacci;
