import getRandomNumber from '../utils/utils.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (n1, n2) => {
  let a = Math.abs(n1);
  let b = Math.abs(n2);
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const startGcdGame = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const result = getGcd(num1, num2);
  const correctAnswer = `${result}`;
  return [question, correctAnswer];
};

const runGame = () => startGame(description, startGcdGame);
export default runGame;
