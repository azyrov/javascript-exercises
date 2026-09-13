// find the oldest in an object array
const findTheOldest = function(arr) {
  // get the current date
  // used for when the year of death is not given 
  let todayDate = new Date();
  // get the current year
  let year = todayDate.getFullYear();

  
  let oldest = arr.reduce(((highest, current) => {
    // if year of death is not provided, the year of death is this year
  if ((current.yearOfDeath === undefined) || (highest.yearOfDeath === undefined)) {
  current.yearOfDeath = year;
  highest.yearOfDeath = year;
  } else {
  // if year of death is provided, use the provided year
    current.yearOfDeath = current.yearOfDeath;
    highest.yearOfDeath = highest.yearOfDeath;
  }
  
  // get age of previous person (or the very first person)  
  let previousPerson = highest.yearOfDeath - highest.yearOfBirth;
  // get age of current person
  let currentPerson = current.yearOfDeath - current.yearOfBirth;

  if (previousPerson > currentPerson) {
    return highest
  } else {
    return current
  }
  }))

  return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
