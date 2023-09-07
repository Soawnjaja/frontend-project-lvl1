import { getRandomNumber, isPrime } from '../utils/mathOperators.js';

const gameData = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isPrime(num) ? 'yes' : 'no';

  return [question, result];
};

export { gameData, startPrimeGame };
