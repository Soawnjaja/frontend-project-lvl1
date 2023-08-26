#!/usr/bin/env node

import startGame from '../src/index.js';

const gameRules = 'What number is missing in the progression?';
const gameData = () => {
  const lengthProgression = Math.floor(Math.random() * 5) + 6;
  const lostIndexInProgression = Math.floor(Math.random() * lengthProgression);
  const startIndex = Math.floor(Math.random() * 10) + 1;
  let currentStep = startIndex;
  const step = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = startIndex + lostIndexInProgression * step;
  const progression = [];
  for (let i = 0; i < lengthProgression; i++) {
    if (i === lostIndexInProgression) {
      progression.push('..');
    } else {
      progression.push(currentStep);
    }
    currentStep += step;
  }
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => startGame(gameRules, gameData);

progressionGame();
