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

console.log(duplicateEncode("Success"));
