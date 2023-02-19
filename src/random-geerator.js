'use strict';

function generateRandomFourDigitNumber() {
  const digits = [...Array(10).keys()]; // create an array of digits from 1 to 9
  let number = '';

  while (number.length < 4) {
    const index = Math.floor(Math.random() * digits.length);
    const digit = digits[index];

    digits.splice(index, 1);

    if (number.length === 0 && digit === '0') {
      continue;
    }

    number += digit;
  }

  return number;
}

module.exports = { generateRandomFourDigitNumber };
