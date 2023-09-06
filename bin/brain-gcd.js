#!/usr/bin/env node
import generateRound from '../src/index.js';
import {gameData,startGcdGame} from '../src/games/gcd.js';

generateRound(gameData, startGcdGame);
