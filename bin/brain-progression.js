#!/usr/bin/env node
import generateRound from '../src/index.js';
import { gameData, startProgressionGame } from '../src/games/progression.js';

generateRound(gameData, startProgressionGame);
