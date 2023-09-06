import { getRandomNumber, isEven } from '../utils/mathOperators.js';

const gameData = 'Answer "yes" if the number is even, otherwise answer "no".';

const startIsEvenGame = () => {
  const num = getRandomNumber();
  const question = num;
  const result = isEven(num) ? 'yes' : 'no';

  return [question, result];
};

export default startIsEvenGame;
