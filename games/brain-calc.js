import readlineSync from 'readline-sync';
import { getRandomNumber, launchGame } from '../src/index.js';

const listOfOperands = ['+', '-', '*'];

const generateQuestionAndAnswer = () => {
    const randomNumberLeft = getRandomNumber();
    const randomNumberRight = getRandomNumber();
    const getRandomOperand = () => listOfOperands[Math.floor(Math.random() * listOfOperands.length)];
    const operand = getRandomOperand();

    let correctAnswer;
    switch(operand) {
        case '+':
            correctAnswer = randomNumberLeft + randomNumberRight;
            break;
        case '-':
            correctAnswer = randomNumberLeft - randomNumberRight;
            break;
        case '*':
            correctAnswer = randomNumberLeft * randomNumberRight;
            break;
        default:
            correctAnswer = null;
    }

    const question = `Question: ${randomNumberLeft} ${operand} ${randomNumberRight}`;
    return [question, correctAnswer];
};

const getUserResponse = () => {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`${question}\n`);
    return [Number(userAnswer), correctAnswer];
};

export default getUserResponse;