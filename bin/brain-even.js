#!/usr/bin/env node
import generateRound from '../src/index.js';
import {gameData, startIsEvenGame} from '../src/games/even.js';

generateRound(gameData, startIsEvenGame);
