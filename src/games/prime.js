import getRandomNumber from '../utils/utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startPrimeGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isPrime(num) ? 'yes' : 'no';

  return [question, result];
};

const runGame = () => startGame(description, startPrimeGame);
export default runGame;
