import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const launchBrainEvenGame = () => {
    const getRandomNumber = () => {
        return Math.round(Math.random() * 100);
    };
    let amountOfCorrectAnswers = 0;
    const userName = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');                          

    while(amountOfCorrectAnswers < 3) {
        const randomNumber = getRandomNumber();
        const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`);

        if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
            amountOfCorrectAnswers++;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${randomNumber % 2 === 0 ? 'yes' : 'no'}'.\nLet's try again, ${userName}`);
        }
    }    
    return console.log(`Congratulations, ${userName}!`)                       
}

export default launchBrainEvenGame;
