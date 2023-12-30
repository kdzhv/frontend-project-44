import readlineSync from 'readline-sync';
import { getRandomNumber, launchGame } from '../src/index.js';

const generateQuestionAndAnswer = () => { 
    const randomNumber = getRandomNumber();
    const isPrime = (randomNumber) => {
        for(let i = 2, s = Math.sqrt(randomNumber); i <= s; i++) {
            if(randomNumber % i === 0) return false;
        }
        return randomNumber > 1;
    }

    let correctAnswer;
    switch(isPrime()) {
        case true:
            correctAnswer = 'yes';
            break;
        case false:
            correctAnswer = 'no';
            break;
        default:
            correctAnswer = null;
    }

    //console.log(correctAnswer);

    const question = `Question: ${randomNumber}`;
    return [question, correctAnswer];
}

const getUserResponse = () => {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`${question}\n`);
    return [userAnswer, correctAnswer];
};

export default getUserResponse;