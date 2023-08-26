#!/usr/bin/env node

import startGame from '../index.js';
import randomNum from '../utils/randomNum.js';
import isEven from '../utils/isEven.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const number = randomNum();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => startGame(gameRules, gameData);

evenGame()
