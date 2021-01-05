//problem first
const scramble = (str1, str2) => {
  str1 = str1.split("");
  str2 = str2.split("");

  let counter = 0;

  str2.forEach((e) => {
    if (str1.includes(e)) {
      counter++;
      str1.splice(str1.indexOf(e), 1);
    }
  });

  return counter === str2.length ? true : false;
};

//problem two
const expandedForm = (number) => {
  let collection = [];
  let counter = 1;

  while (number >= 1) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    if (remainder !== 0) {
      collection.push(remainder * counter);
    }
    counter = counter * 10;
  }

  return collection.reverse().join(" + ");
};

//problem number three
const sum = (numb) => {
  let myArray = [];

  for (let i = 1; i < numb; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      myArray.push(i);
    }
  }

  return myArray.reduce((sum, value) => sum + value, 0);
};

//problem four
const moveZeros = (array) => {
  const nonZeroArray = array.filter((x) => x !== 0);
  const zeroArray = array.filter((x) => x === 0);

  return nonZeroArray.concat(zeroArray);
};

console.log(expandedForm(70304));
