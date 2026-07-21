// if condition should check if number has a remainder of 0 if divided by 4, return true
// next if condition checks if number has a remainder of 0 if divided by 400 AND if divisible by 100, return true

const leapYears = function(year) {
    const isDivisibleBy4 = (year % 4 === 0);
    const isDivisibleBy100 = (year % 100 === 0);
    const isDivisibleBy400 = (year % 400 === 0);

    if (isDivisibleBy4 || isDivisibleBy100) {
        if (isDivisibleBy100 && isDivisibleBy400) {
            return true
        }  else if (isDivisibleBy100 && (!isDivisibleBy400)) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

// Do not edit below this line
module.exports = leapYears;
