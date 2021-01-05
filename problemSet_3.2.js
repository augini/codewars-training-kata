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

console.log(duplicateEncode("Success"));
