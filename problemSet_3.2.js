//Problem number one
const duplicateEncode = (word) => {
  let duplicates = new Set();
  let splitWord = word.toLowerCase().split("");

  splitWord.forEach((e, i) => {
    if (splitWord.slice(i + 1).includes(e)) {
      duplicates.add(e);
    }
  });

  let result = splitWord.map((e) => (duplicates.has(e) ? ")" : "("));

  return result.join("");
};

//Problem number two
const moveZeros = (arr) => {
  arr.forEach((e, index) => {
    if (e === 0) {
      arr.push(0);
      arr.splice(arr.indexOf(e), 1);
    }
  });
  return arr;
};

//Problem test
const incrementString = (strng) => {
  let word = strng.split("").filter((e) => isNaN(e));
  let number = strng.split("").filter((e) => !isNaN(e));

  if (number.length !== 0) {
    let numberValue = parseInt(number.join("")) + 1;
    return word.join("").concat(numberValue);
  } else {
    return word.join("").concat("1");
  }
};

console.log(incrementString("foobar099"));
