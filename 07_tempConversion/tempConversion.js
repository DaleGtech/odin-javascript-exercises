const convertToCelsius = function(f) { // x °F ≘ (x − 32) * 5/9⁠ °C
  
  f = Math.round((f - 32) * (5/9) * 10) / 10;
  return f;
};

const convertToFahrenheit = function(c) { // x °C ≘ (x * 9/5⁠ + 32) °F
  c = Math.round((c * 9/5 + 32) * 10) / 10;
  return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
