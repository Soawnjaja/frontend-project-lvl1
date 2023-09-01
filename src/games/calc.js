import { getRandomNumber, calculate } from '../utils/mathOperators.js';

const calculationGame = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operations = ['+', '-', '*'];
  const operator = operations[getRandomNumber(0, 3)];

  const question = `${num1} ${operator} ${num2}`;
  const result = calculate(num1, num2, operator);

  return [question, result];
};

export default calculationGame;
