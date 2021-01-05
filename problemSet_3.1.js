//Problem number 1
const scramble = (str1, str2) => {
  let counter = 0;
  str1 = str1.split("");
  str2 = str2.split("");

  if (str1.length >= str2.length) {
    str2.forEach((e) => {
      if (str1.includes(e)) {
        counter++;
        str1.splice(str1.indexOf(e), 1);
      }
    });

    return str2.length === counter ? true : false;
  }

  return false;
};

//Problem number 2 //mine
const expandedForm = (num) => {
  let counter = 1;
  let collection = [];

  while (num >= 1) {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    if (remainder !== 0) {
      collection.push(remainder * counter);
    }
    counter = counter * 10;
  }

  return collection.reverse().join(" + ");
};

//most upvoted solution on Codewars
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");

//Problem number 3
const solution = (number) => {
  let collection = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      collection.push(i);
    }
  }

  let sum = collection.reduce((a, b) => a + b, 0);
  return sum;
};

//Problem number 4
const moveZeros = (arr) => {
  arr.forEach((e, index) => {
    if (e === 0) {
      arr.push(0);
      arr.splice(arr.indexOf(e), 1);
    }
  });
  return arr;
};

console.log(expandedForm(12));
