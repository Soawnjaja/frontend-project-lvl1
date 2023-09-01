#!/usr/bin/env node
import startBrain from '../src/index.js';
import calculationGame from '../src/games/calc.js';

startBrain('What is the result of the expression?', calculationGame);
