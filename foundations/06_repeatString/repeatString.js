
// convert string to array
// multiply array by the provided num parameter
// create a variable to hold the strings (after the array elements are loopedin next step)
// loop through the elements
// for each loop, concatenate iterated item to previous looped item

const repeatString = function(string, num) {

    let array = [string];

    let strArray = array.flatMap((item => Array(num).fill(item)));

    let finalResult = "";

    for (let i = 0; i < strArray.length; i++) {
        finalResult += strArray[i];
    }

    return finalResult;
};

// 2
// use if to immediately remove numbers less than 0
// create a variable to hold the strings 
// use for loop to concatenate string to previous string

/*
let repeatString = (str, num) => {

    if (num < 0) return "Error"

    let finalString = "";

    for (let i = 0; i < num; i++) {
        finalString += str;
    }

    return finalString;

}
*/

// Do not edit below this line
module.exports = repeatString;
