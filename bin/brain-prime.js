#!/usr/bin/env node
import generateRound from '../src/index.js';
import {gameData, startPrimeGame}from '../src/games/prime.js';

generateRound(gameData, startPrimeGame);
