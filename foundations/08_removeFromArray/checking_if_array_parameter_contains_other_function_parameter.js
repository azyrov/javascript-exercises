// 1
// // add a rest parameter with 1 other parameter (which should contain the array)
//i the first paramter contains the array
//i the rest parameter now holds the additional values 
// filter through the initial parameter by comparing the values with the rest parameter
// use NOT include to filter out array items which are not in the rest parameter

function removeFromArray(array, ...removeNum) {
    return array.filter(item => !removeNum.includes(item))
}

console.log(removeFromArray([1, 2, 3, 4, 5], 3))

//2
// forEach
// add a rest parameter with 1 other parameter (which should contain the array)
//i the first paramter contains the array
//i the rest parameter now holds the additional values 
// create new array to hold new array items
// loop each item using foreach toremove items which are not present in the rest parameter

let updatedArray = [];

function removeFromArray(array, ...removeNum) {
    array.forEach(item => {

        if (!removeNum.includes(item)) {
            updatedArray.push(item);
        }
    });
    return updatedArray
}

console.log(removeFromArray([1, 2, 3, 4, 5], 4))

