const ftoc = function(f) {
  if(typeof f !== "number") {
    return "ERROR"
  }
  let celsius = (f-32)*5/9
  let celsiusRounded = Math.round(celsius * 10) / 10
  return celsiusRounded
};

const ctof = function(c) {
  if(typeof c !== "number") {
    return "ERROR"
  }
  let farenheit = (c*9/5)+32
  let farenheitRounded = Math.round(farenheit * 10) / 10
  return farenheitRounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
