import { getRandomNumber, createProgression } from '../utils/utils.js';

const description = 'What number is missing in the progression?';

const startProgressionGame = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(10, 20);

  const progression = createProgression(start, step, length);

  const randomIndex = getRandomNumber(1, progression.length - 1);
  const hiddenNumber = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = `${progression.join(' ')}`;

  return [question, hiddenNumber];
};

const runGame = () => startGame(description, startProgressionGame);
export default runGame;
