import getRandomNumber from '../utils/utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const startIsEvenGame = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const result = isEven(num) ? 'yes' : 'no';

  return [question, result];
};

const runGame = () => startGame(description, startIsEvenGame);
export default runGame;
