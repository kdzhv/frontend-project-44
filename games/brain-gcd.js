import readlineSync from 'readline-sync';
import { getRandomNumber, launchGame } from '../src/index.js';

const generateQuestionAndAnswer = () => {
    const randomNumberFirst = getRandomNumber();
    const randomNumberSecond = getRandomNumber();
    const getGcd = (a, b) => {return (!b) ? a : getGcd(b,a%b)};
    let correctAnswer =  getGcd(randomNumberFirst, randomNumberSecond);

    const question = `Question: ${randomNumberFirst} ${randomNumberSecond}`;
    return [question, correctAnswer];
}

const getUserResponse = () => {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`${question}\n`);
    return [Number(userAnswer), correctAnswer];
};

export default getUserResponse;