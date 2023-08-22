#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingsUser, userName } from '../src/cli.js'




function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  greetingsUser()
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const questionNumber = Math.floor(Math.random() * 100) + 1;

    const userAnswer = readlineSync.question(`'Question: '${questionNumber} `);

    if (
      (questionNumber % 2 === 0 && userAnswer === 'yes')
      || (questionNumber % 2 !== 0 && userAnswer === 'no')
    ) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was, ${questionNumber % 2 === 0 ? 'yes' : 'no'}`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

brainEven();
