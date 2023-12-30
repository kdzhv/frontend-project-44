import greetUser from '../src/cli.js';

export const getRandomNumber = () => {
    return Math.round(Math.random() * 100);
};

export const launchGame = (getUserResponse) => {
    const userName = greetUser();
    let amountOfCorrectAnswers = 0;

    while (amountOfCorrectAnswers < 3) {
        const [userAnswer, correctAnswer] = getUserResponse();

        if (userAnswer === correctAnswer) {
            amountOfCorrectAnswers++;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
        }
    }

    console.log(`Congratulations, ${userName}!`);
};