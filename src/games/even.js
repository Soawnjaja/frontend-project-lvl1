import { getRandomNumber, isEven } from '../utils/mathOperators.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startIsEvenGame = () => {
  const question = getRandomNumber();
  const result = isEven(num) ? 'yes' : 'no';

  return [question, result];
};

export { description, startIsEvenGame};
