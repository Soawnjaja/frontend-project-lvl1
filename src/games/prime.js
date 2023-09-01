import { getRandomNumber, isPrime } from '../utils/mathOperators.js';

const isPrimeGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isPrime(num) ? 'yes' : 'no';

  return [question, result];
};

export default isPrimeGame;
