//Solution 1
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", ""];
  str = str.split("");
  return str.filter((char) => !vowels.includes(char)).join("");
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

//Solution 2
function findOutlier(integers) {
  const oddNumbers = integers.filter((i) => i % 2 !== 0);
  const evenNumbers = integers.filter((i) => i % 2 === 0);
  return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0];
}

//Solution 3
function inArray(array1, array2) {}

// console.log(inArray([2, 4, 0, 100, 4, 11, 2602, 36]));

//Solution 4
function zero(input) {
  return typeof input === "function" ? input(0) : 0;
}
function one(input) {
  return typeof input === "function" ? input(1) : 1;
}
function two(input) {
  return typeof input === "function" ? input(2) : 2;
}
function three(input) {
  return typeof input === "function" ? input(3) : 3;
}
function four(input) {
  return typeof input === "function" ? input(4) : 4;
}
function five(input) {
  return typeof input === "function" ? input(5) : 5;
}
function six(input) {
  return typeof input === "function" ? input(6) : 6;
}
function seven(input) {
  return typeof input === "function" ? input(7) : 7;
}
function eight(input) {
  return typeof input === "function" ? input(8) : 8;
}
function nine(input) {
  return typeof input === "function" ? input(9) : 9;
}

function plus(input) {
  return (arg) => {
    return input + arg;
  };
}
function minus(input) {
  return (arg) => {
    return input - arg;
  };
}
function times(input) {
  return (arg) => {
    return input * arg;
  };
}
function dividedBy(input) {
  return (arg) => {
    return Math.round(input / arg);
  };
}

console.log(five(minus(eight())));
