import getRandomNumber from '../utils/utils.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const progressionNumbers = [];
  let currentNumber = start;

  while (progressionNumbers.length < length) {
    progressionNumbers.push(currentNumber);
    const nextNumber = currentNumber + step;
    currentNumber = nextNumber;
  }

  return progressionNumbers;
};

const startProgressionGame = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(10, 20);

  const progression = createProgression(start, step, length);

  const randomIndex = getRandomNumber(1, progression.length - 1);
  const hiddenNumber = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';

  const question = `${progression.join(' ')}`;

  return [question, hiddenNumber];
};

const runGame = () => startGame(description, startProgressionGame);
export default runGame;
