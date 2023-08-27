#!/usr/bin/env node

import { gcd } from 'mathjs';
import startGame from '../index.js';
import randomNum from '../utils/randomNum.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const gameData = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [question, correctAnswer];
};

const gcdGame = () => startGame(gameRules, gameData);

gcdGame();
