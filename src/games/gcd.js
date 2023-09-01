import { getRandomNumber, getGcd } from '../utils/mathOperators.js';

const gcdGame = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const result = getGcd(num1, num2);

  return [question, result];
};

export default gcdGame;
