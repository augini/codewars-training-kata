//Number 1
var uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  return iterable.filter((letter, index) => letter !== iterable[index + 1]);
};

//Number 2
const DNAStrand = (dna) => {
  //your code here
  const complement = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((a) => complement[a])
    .join("");
};

//Number 3
const validatePIN = (pin) => {
  //return true or false
  return pin.length === 4 || pin.length === 6
    ? pin.split("").every((p) => !isNaN(parseInt(p)))
    : false;
};

//sorting the minimum number
const handleSum = (input) => {
  input.sort((a, b) => a - b);

  return input[0] + input[1];
};

//count the vowels
const countVowel = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").filter((letter) => vowels.includes(letter)).length;
};
