#!/usr/bin/env node

import startGame from "../src/index.js";
import isPrime from "../utils/isPrime.js";

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
const randomNum = Math.floor(Math.random() *100) + Math.floor(Math.random() * 5);
const question = randomNum;
const answer = isPrime(randomNum);
const correctAnswer = answer;
return [question, correctAnswer];
}

const primeGame = () => startGame(gameRules,gameData);
primeGame();