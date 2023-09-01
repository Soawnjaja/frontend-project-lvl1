import { getRandomNumber, isEven } from '../utils/mathOperators.js';

const isEvenGame = () => {
  const num = getRandomNumber();
  const question = num;
  const result = isEven(num) ? 'yes' : 'no';

  return [question, result];
};

export default isEvenGame;
