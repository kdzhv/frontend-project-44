import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const launchCalcGame = () => {
    const getRandomNumber = () => {
        return Math.round(Math.random() * 100);
    };
    const listOfOperands = ['+', '-', '*'];
    const getOperandIndex = () => {
        return Math.floor(Math.random() * listOfOperands.length);
    };
    let amountOfCorrectAnswers = 0;
    const userName = greetUser();
    console.log('What is the result of the expression?');

    while(amountOfCorrectAnswers < 3) {
        const randomNumberLeft = getRandomNumber();
        const randomNumberRight = getRandomNumber();
        const getRandomOperand = listOfOperands[getOperandIndex()];
        let result;
        switch(getRandomOperand) {
            case '+':
                result = randomNumberLeft + randomNumberRight;
                break;
            case '-':
                result = randomNumberLeft - randomNumberRight;
                break;
            case '*':
                result = randomNumberLeft * randomNumberRight;
                break;
            default:
                result = 'Oops!';
        }

        const userAnswer = readlineSync.question(`Question: ${randomNumberLeft} ${getRandomOperand} ${randomNumberRight}\n`);

        if (result === Number(userAnswer)) {
            amountOfCorrectAnswers++;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}`);
        }
    }    
    return console.log(`Congratulations, ${userName}!`)                       
}

export default launchCalcGame;