const additivePersistence = (int) => {
  let count = 0;
  while (int > 10) {
    let newInt = int
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b));
    int = newInt;
    count++;
  }
  return count;
};

const balanced = (word) => {
  const alphabet = "_abcdefghijklmnopqrstuvwxyz".split("");
  let arr = word.split("");
  let startSum, endSum, newArr;

  // newArr = arr.slice(0, Math.floor(arr.length / 2))
  // arr  = arr.slice(Math.ceil(arr.length / 2))
  if (arr.length % 2 === 0) {
    newArr = arr.splice(arr.length / 2);
  } else {
    newArr = arr.splice((arr.length + 1) / 2);
    arr.pop();
  }

  startSum = arr.reduce((a, b) => alphabet.indexOf(a) + alphabet.indexOf(b));
  endSum = newArr.reduce((a, b) => alphabet.indexOf(a) + alphabet.indexOf(b));

  return startSum === endSum ? true : false;
};

const squares = (a, b) => {
  let start = Math.ceil(Math.sqrt(a));
  let end = Math.floor(Math.sqrt(b));
  return end - start + 1;
};


const squares = (a, b) => {
  let counter = 0;
  while (a <= b) {
    if (Math.sqrt(a) % 1 === 0) {
      counter++;
    }
    a++;
  }
  return counter;
};

const squares2 = (a, b) => {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
};