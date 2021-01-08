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

//Problem number 5
const incrementString = (strng) => {
  let word = strng.split("").filter((e) => isNaN(e) || e === "0");
  let number = strng.split("").filter((e) => !isNaN(e) && e !== "0");

  if (number.length !== 0) {
    let numberValue = parseInt(number.join("")) + 1;

    if (numberValue % 10 === 0 && word[word.length - 1] === "0") {
      word = word.slice(0, word.length - 1);
    }
    return word.join("").concat(numberValue.toString());
  } else {
    if (word[word.length - 1] === "0") {
      return word
        .slice(0, word.length - 1)
        .join("")
        .concat("1");
    } else {
      return word.join("").concat("1");
    }
  }
};

//Problem number 2
const dirReduc = (arr) => {
  //slice array in between the conditions
  const customizeArray = (inputArr, index) => {
    let firstHalf = inputArr.slice(0, index);
    let secondHalf = inputArr.slice(index + 2);
    inputArr = firstHalf.concat(secondHalf);

    return inputArr;
  };

  arr.forEach((e, i) => {
    if (
      (e.toLowerCase() === "north" &&
        arr[i + 1] &&
        arr[i + 1].toLowerCase() === "south") ||
      (e.toLowerCase() === "north" &&
        arr[i - 1] &&
        arr[i - 1].toLowerCase() === "south")
    ) {
      arr = customizeArray(arr, i);
    } else if (
      (e.toLowerCase() === "south" &&
        arr[i + 1] &&
        arr[i + 1].toLowerCase() === "north") ||
      (e.toLowerCase() === "south" &&
        arr[i - 1] &&
        arr[i - 1].toLowerCase() === "north")
    ) {
      arr = customizeArray(arr, i);
    } else if (
      (e.toLowerCase() === "east" &&
        arr[i + 1] &&
        arr[i + 1].toLowerCase() === "west") ||
      (e.toLowerCase() === "east" &&
        arr[i - 1] &&
        arr[i - 1].toLowerCase() === "west")
    ) {
      arr = customizeArray(arr, i);
    } else if (
      (e.toLowerCase() === "west" &&
        arr[i + 1] &&
        arr[i + 1].toLowerCase() === "east") ||
      (e.toLowerCase() === "west" &&
        arr[i - 1] &&
        arr[i - 1].toLowerCase() === "east")
    ) {
      arr = customizeArray(arr, i);
    }
  });

  return arr;
};

//Problem number 3
const high = (x) => {
  let maxWord = { sum: 0 };

  x.split(" ").forEach((e) => {
    let sum = 0;
    e.split("").forEach((char, i) => {
      sum += e.charCodeAt(i) - 96;
    });

    if (sum > maxWord.sum) {
      maxWord = { word: e, sum };
    }
  });

  return maxWord.word;
};

//problem number 4
const validParentheses = (parens) => {
  let left = 0,
    right = 0;

  parens.split("").forEach((e) => (e === "(" ? left++ : right++));

  if (parens.length > 100) {
    return false;
  }
  return left === right && left && right ? true : false;
};

//found online
function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
console.log(validParentheses("(()(()))"));
