import { getRandomNumber, getGcd } from '../utils/utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const result = getGcd(num1, num2);

  return [question, result];
};

const runGame = () => startGame(description, startGcdGame);
export default runGame;
