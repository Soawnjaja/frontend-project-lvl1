#!/usr/bin/env node

import startGame from '../src/index.js';
import randomNum from '../utils/randomNum.js';
import randomMathOperator from '../utils/randomMathOperator.js';
import { evaluate } from 'mathjs';
const gameRules = 'What is the result of the expression?';


const gameData = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const operator = randomMathOperator();
  const question = `Question: ${number1.toString()} ${operator} ${number2.toString()}`;
  const correctAnswer = evaluate(`${number1}${operator}${number2}`);
  return [question, correctAnswer];
};

  const calcGame = () => startGame(gameRules, gameData);
  
  calcGame();