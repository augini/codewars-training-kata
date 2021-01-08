const finder = (item) => {
  // create an array  SPLIT WORDS and lowerCase them
  const arr = item.split(" ");

  let highestCount = 0;

  // create an empty array which will be use to push the highest new word
  maxWord = "";

  for (let i = 0; i < arr.length; i++) {
    // first array for the word
    let count = 0; // reset count for each word

    for (let j = 0; j < arr[i].length; j++) {
      // second for the letter of the word
      count += arr[i][j].charCodeAt(0) - 96;
    }
    //  we check if count bigger than highest if so we assign count to highest and also add it to the array
    if (count > highestCount) {
      highestCount = count;
      maxWord = arr[i];
    }
  }

  return `${maxWord} got the highest score with a total of ${highestCount}`;
  // return `${newArray}` // switch to that line for codewars test
};

console.log(finder("wxxa aa zz xxx"));
