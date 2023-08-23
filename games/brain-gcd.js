#!/usr/bin/env node

import startGame from '../src/index.js';
import randomNum from '../utils/randomNum.js';
import {gcd} from 'mathjs'

const gameRules = 'Find the greatest common divisor of given numbers.'
const gameData = () => {
    const number1 = randomNum();
    const number2 = randomNum();
    const question = `${number1} ${number2}`
    const correctAnswer = gcd(number1,number2)
    return [question,correctAnswer]
}

const gcdGame = () => startGame(gameRules,gameData)

gcdGame()