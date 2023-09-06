import { getRandomNumber, isPrime } from '../utils/mathOperators.js';

const gameData = '"yes" if the number is even, otherwise answer "no".';

const startPrimeGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isPrime(num) ? 'yes' : 'no';

  return [question, result];
};

export { gameData, startPrimeGame };
