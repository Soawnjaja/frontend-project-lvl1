#!/usr/bin/env node
import startBrain from '../src/index.js';
import progressionGame from '../src/games/progression.js';

startBrain('What number is missing in the progression?', progressionGame);
