export const getRandomNumber = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const calculate = (num1, num2, defineOperation) => {
  let answer = 0;
  switch (defineOperation) {
    case '+':
      answer = `${num1 + num2}`;
      break;
    case '-':
      answer = `${num1 - num2}`;
      break;
    case '*':
      answer = `${num1 * num2}`;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
  return answer;
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
