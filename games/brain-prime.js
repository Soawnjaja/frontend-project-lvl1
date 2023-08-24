import startGame from "../src/index.js";

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
let answer = '';
const randomNum = Math.floor(Math.random() *100) + Math.floor(Math.random() * 5);
const question = randomNum;
if(randomNum >2) {
for (let i = 2; i < Math.sqrt(randomNum); i++) {
    if(randomNum % i === 0) {
        answer = 'no';
    }
  }
} else {
    answer = 'yes';
}

const correctAnswer = answer;
return [question, correctAnswer];
}

const primeGame = () => startGame(gameRules,gameData);
primeGame();