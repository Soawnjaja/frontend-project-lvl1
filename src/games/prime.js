import { getRandomNumber, isPrime } from '../utils/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isPrime(num) ? 'yes' : 'no';

  return [question, result];
};

const runGame = () => startGame(description, startPrimeGame);
export default runGame;
