/* ~~~~~~~~~~~~~~~~~~~~~~~~~~additive Persistence~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const additivePersistence = (number) => {
  let digits = Array.from(String(number), Number);
  let counter = 0;

  while (digits.length > 1) {
    digits = Array.from(
      String(digits.reduce((sum, digit) => sum + digit)),
      Number
    );
    counter++;
  }

  return `${counter} iterations needed`;
};

const balanced = (input) => {
  let firstHalf = input.slice(0, Math.floor(input.length / 2));
  let secondHalf = input.slice(Math.ceil(input.length / 2));
  let sum1,
    sum2 = 0;

  [...firstHalf].forEach(
    (char, index) => (sum1 += firstHalf.charCodeAt(index) - 96)
  );

  [...secondHalf].forEach(
    (char, index) => (sum2 += secondHalf.charCodeAt(index) - 96)
  );
  return sum1 === sum2 ? true : false;
};

const name = [2, 3, 4, 5];

for (let i = 0; i < name.length; i++) {
  name[i] = name[i] * 2;
}

name.forEach((element) => {
  element = element * 2;
});
