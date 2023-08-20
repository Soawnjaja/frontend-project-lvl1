import readlineSync from 'readline-sync';

function greetingsUser() {
const userName = readlineSync.question('May I have your name?')
console.log('Hello' + " " + userName + '!');
}


export default greetingsUser