#!/usr/bin/env node

import startGame from '../src/index.js';
import randomNum from '../utils/randomNum.js';
import isEven from '../utils/isEven.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const number = randomNum();
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => startGame(gameRules, getData);

evenGame()
