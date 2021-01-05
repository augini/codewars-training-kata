//Problem set 2.1
const additivePersistence = (n) => {
  let digits = Array.from(String(n), Number);

  let counter = 0;

  while (digits.length > 1) {
    digits = Array.from(String(digits.reduce((a, b) => a + b)), Number);
    counter++;
  }

  return counter;
};

const multiplicativePersistence = (n) => {
  let digits = Array.from(String(n), Number);

  let counter = 0;

  while (digits.length > 1) {
    digits = Array.from(String(digits.reduce((a, b) => a * b)), Number);
    console.log(digits);
    counter++;
  }

  return counter;
};

const balanced = (input) => {
  const firstHalf = input.slice(0, Math.floor(input.length / 2));
  const secondHalf = input.slice(Math.ceil(input.length / 2));

  let sum1 = 0,
    sum2 = 0;

  [...firstHalf].forEach((a, i) => {
    sum1 += firstHalf.charCodeAt(i) - 96;
  });

  [...secondHalf].forEach((a, i) => {
    sum2 += secondHalf.charCodeAt(i) - 96;
  });

  return sum1 === sum2 ? true : false;
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

console.log(squares2(1, 1000000000));
