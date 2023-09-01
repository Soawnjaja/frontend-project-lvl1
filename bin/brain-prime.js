#!/usr/bin/env node
import startBrain from '../src/index.js';
import isPrimeGame from '../src/games/prime.js';

startBrain('Answer "yes" if given number is prime. Otherwise answer "no".', isPrimeGame);
