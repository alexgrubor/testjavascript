let validPin = (pin) => {
  let isNum = () => {
    
    return (
      !isNaN(+pin) &&
      typeof +pin === "number" &&
      !pin.includes(".") &&
      !pin.includes("-")
    );
  };
  if (
    isNum() &&
    pin.length === 4 &&
    +pin[pin.length - 1] % 2 === 0 &&
    pin[0] !== pin[pin.length - 1]
  ) {
    return true;
  }
  return false;
};

console.log("1:" + validPin("1234"));
console.log("2:" + validPin("1235")); // last number should be even
console.log("3:" + validPin("12ww")); // should only consist of numbers
console.log("4:" + validPin("12.4")); // should only consist of numbers
console.log("5:" + validPin("-234")); // should only consist of numbers
console.log("6:" + validPin("12345")); // should be 4 digits, not 5
console.log("7:" + validPin("2222")); // first and last digits should be different
console.log("8:" + validPin("2224"));
