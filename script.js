'use strict'

let guessNumber
let userInput
let userNum
let game

const createGame = function () {
    guessNumber = Math.floor(Math.random() * 100) + 1;
    


    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }

    const guess = function start() {

        userInput = prompt("Угадай число  от 1 до 100");

        if (userInput === null) {
            confirm("Игра окончена");
            return
        }

        if (!isNumber(userInput)) {
            alert("Введи число!");
            guess();
            return
        }

        userNum = parseFloat(userInput);

        if (userNum > guessNumber) {
            alert("Загаданное число меньше");
            guess();
        } else if (userNum < guessNumber) {
            alert("Загаданное число больше");
            guess();
        } else {
            alert("Поздравляю, Вы угадали!!!")
        }

    }
    return guess;
}

game = createGame();
game();