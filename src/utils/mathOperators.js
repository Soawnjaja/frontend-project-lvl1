export const getRandomNumber = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const calculate = (num1, num2, defineOperation) => {
  let result = 0;
  switch (defineOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return result;
};

export const getGcd = (n1, n2) => {
  let a = Math.abs(n1);
  let b = Math.abs(n2);
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const createProgression = (start, step, length) => {
  const progressionNumbers = [];
  progressionNumbers[0] = start;

  for (let i = 1; i < length; i += 1) {
    const nextNumber = progressionNumbers[i - 1] + step;
    progressionNumbers.push(nextNumber);
  }

  return progressionNumbers;
};

export default getRandomNumber;
