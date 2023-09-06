#!/usr/bin/env node
import generateRound from '../src/index.js';
import { gameData, startCalculationGame } from '../src/games/calc.js';

generateRound(gameData, startCalculationGame);
