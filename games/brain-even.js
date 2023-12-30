import readlineSync from 'readline-sync';
import { getRandomNumber, launchGame } from '../src/index.js';

const generateQuestionAndAnswer = () => {
    const randomNumber = getRandomNumber();
    const isEven = (randomNumber % 2 === 0) ? 'yes' : 'no';

    let correctAnswer;
    switch(isEven) {
        case 'yes':
            correctAnswer = 'yes';
            break;
        case 'no':
            correctAnswer = 'no';
            break;
        default:
            correctAnswer = null;
    }

    const question = `Question: ${randomNumber}`;
    return [question, correctAnswer];
};

const getUserResponse = () => {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`${question}\n`);
    return [userAnswer, correctAnswer];
};

launchGame(getUserResponse);