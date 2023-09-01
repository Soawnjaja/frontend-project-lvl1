#!/usr/bin/env node
import startBrain from '../src/index.js';
import isEvenGame from '../src/games/even.js';

startBrain('Answer "yes" if the number is even, otherwise answer "no".', isEvenGame);
