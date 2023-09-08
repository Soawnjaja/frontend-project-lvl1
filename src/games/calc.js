import { getRandomNumber, calculate } from '../utils/utils.js';
import startGame from '../index.js';
const description = 'What is the result of the expression?';
const startCalculationGame = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operatorList = ['+', '-', '*'];
  const operator = operatorList[getRandomNumber(0, 2)];

  const question = `${num1} ${operator} ${num2}`;
  const result = calculate(num1, num2, operator);

  return [question, result];
};

 const runGame = () => startGame(description, startCalculationGame);
 export default runGame;
