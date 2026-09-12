const palindromes = function (str) {

    // create variable to store true/false state of palindrome (palindomeState)
    // store palindromeState as undefined
    // convert string to lowercase
    // remove spaces, commas, anything that is not a word
    // use (while?) for loop to loop through chars
    
    // CONFIRM IF i used is the INDEX or LENGTH
    // IF we are using INDEX instead of length,confirm that the loop condition will have to compensate for being less than the length
    // confirm that we don't need at(-1)
    // the increment conditions will have to change as well

    // condition of for loop is for i to be less than math floor rounding of half of the length of the string AND palindromeState === true
    // in each loop, palindromeState is flipped to true
    // if i !== -i, palindromeState is flipped to false, break out of loop
    // if i === -i, increment by 1 
    // outside loop, return palindromeState to the function
     let palindromeState = undefined;
  let divisor;

  str = str.toLowerCase();

  if ((str = str.match(/[A-Za-z0-9]/g)) === null) {
    return palindromeState = false;
  }


  if (str.length / 2 === 0) {
    divisor = (str.length / 2)
  } else {
    divisor = Math.ceil((str.length / 2) - 1)
  }

  if (str[0] === str.at(-1)) {
    for (let i = 1; i <= divisor; i++) {
      if (str[i] === (str[(str.length - i - 1)])) {
            palindromeState = true;
      } else {
        return palindromeState = false;
      }
    }
  } else {
    return palindromeState = false;
  }

  return palindromeState;
};

// Do not edit below this line
module.exports = palindromes;
