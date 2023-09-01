#!/usr/bin/env node
import startBrain from '../src/index.js';
import gcdGame from '../src/games/gcd.js';

startBrain('Find the greatest common divisor of given numbers.', gcdGame);
