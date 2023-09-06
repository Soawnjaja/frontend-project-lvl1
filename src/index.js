import readLineSync from 'readline-sync';

const roundsCount= 3;

export const generateRound = (gameDescription, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);



  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } if(userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`'Let's try again, ${userName}!'`)
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default generateRound;
