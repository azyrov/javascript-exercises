// convert f to c
// round vaue to 1 dp

const convertToCelsius = function(fahr) {
    fahr = ((fahr - 32) * (5/9))

    return Math.round(fahr * 10) / 10
};

// convert c to f
// round vaue to 1 dp

const convertToFahrenheit = function(celcius) {
  celcius = ((celcius * (9/5) + 32));

  return Math.round(celcius * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
