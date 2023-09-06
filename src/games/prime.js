import { getRandomNumber, isPrime } from '../utils/mathOperators.js';

const startPrimeGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isPrime(num) ? 'yes' : 'no';

  return [question, result];
};

export default startPrimeGame ;
