const convertToCelsius = function(fahr) {
  return 5 * (fahr - 32) / 9;
};

const convertToFahrenheit = function(cel) {
  return (9 * cel + 160) / 5;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


/*  convert to celsius: (°F) - 32) * 5/9. */ 

/* convert to fahrnheit: (9*(°C) + 160) / 5  */