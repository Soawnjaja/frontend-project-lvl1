import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

function greetingsUser() {
  console.log(`Hello ${userName}!`);
}

export { greetingsUser, userName };
