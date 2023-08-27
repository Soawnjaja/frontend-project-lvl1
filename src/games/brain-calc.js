#!/usr/bin/env node

import { evaluate } from 'mathjs';
import startGame from '../index.js';
import randomNum from '../utils/randomNum.js';
import randomMathOperator from '../utils/randomMathOperator.js';

const gameRules = 'What is the result of the expression?';
const gameData = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const operation = randomMathOperator();
  const question = number1 + operation + number2;
  const correctAnswer = evaluate(`${number1} ${operation} ${number2}`);
  return [question, correctAnswer];
};

const calcGame = () => startGame(gameRules, gameData);
calcGame();
