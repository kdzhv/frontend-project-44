import readlineSync from 'readline-sync';
import { getRandomNumber, launchGame } from '../src/index.js';

const generateQuestionAndAnswer = () => {
    const randomNumberFirst = getRandomNumber();
    const randomNumberSecond = getRandomNumber();
    const minRandomNumber = Math.min(randomNumberFirst, randomNumberSecond);
    const difference = Math.abs(randomNumberFirst - randomNumberSecond);

    // Создаю массив с арифметической прогрессией и записываю его в константу
    const getArithmeticProg = () => {
        const arr = [];

        for (let i = minRandomNumber; i < minRandomNumber + difference * 10; i += difference) {
            arr.push(i)
        }

        //console.log(arr);
        return arr;
    }

    const arithmeticProg = getArithmeticProg();

    // Генерирую случайный элемент на основе длинны массива
    const getRandomArrIndex = () => Math.floor(Math.random() * arithmeticProg.length);
    const randomArrIndex = getRandomArrIndex();

    // Создаю новый массив, в котором заменяю случайный элемент
    const hideOneElement = () => {
        const newArr = arithmeticProg;
        return newArr.splice(randomArrIndex, 1, '..');
    }
    
    // Записываю скрытый элемент в константу с правильным ответом
    const hiddenElement = hideOneElement();
    let correctAnswer = hiddenElement[0];

    const question = `Question: ${arithmeticProg}`;
    return [question, correctAnswer];
}

const getUserResponse = () => {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(`${question}\n`);
    return [Number(userAnswer), correctAnswer];
};

export default getUserResponse;