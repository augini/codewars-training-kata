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
