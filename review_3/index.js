//Scott 1

//stackoverflow.com/questions/14930516/compare-two-javascript-arrays-and-remove-duplicates

// https: array1 = array1.filter((val) => !array2.includes(val));
// const scramble = (str1, str2) => {
//   let counter = 0;
//   str1 = str1.split("").sort();
//   str2 = str2.split("").sort();

//   let filtered = str1.filter((e) => str2.includes(e));

//   return JSON.stringify(filtered) === JSON.stringify(str2);
// };

// Top Answer
// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => {
//     arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//     return arr;
//   }, {});
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);

    return arr;
  }, {});

  console.log(--occurences["r"]);

  return str2.split("").every((character) => --occurences[character] >= 0);
}
console.log(scramble("rkqodlw", "world"));
