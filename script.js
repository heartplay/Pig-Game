'use strict';
// Selecting elements
const player1Elem = document.querySelector(`.player--0`);
const score1Elem = document.querySelector(`#score--0`);
const curScore1Elem = document.getElementById(`current--0`);

const player2Elem = document.querySelector(`.player--1`);
const score2Elem = document.getElementById(`score--1`);
const curScore2Elem = document.getElementById(`current--1`);

const diceElem = document.querySelector(`.dice`);
const btnRollDice = document.querySelector(`.btn--roll`);
const btnNewGame = document.querySelector(`.btn--new`);
const btnHoldScore = document.querySelector(`.btn--hold`);

// Starting conditions
const totalScores = [0, 0];
score1Elem.textContent = 0;
score2Elem.textContent = 0;
diceElem.classList.add(`hidden`);
let currentScore = 0;
let currentPlayer = 0;

// Dice roll
btnRollDice.addEventListener(`click`, function () {
    // Get random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);

    // Display dice according to dice roll
    diceElem.classList.remove(`hidden`);
    diceElem.src = `dice-${diceRoll}.png`;

    // Check roll
    if (diceRoll !== 1) {
        // Add dice roll to current score
        currentScore += diceRoll;
        activePlayer(currentPlayer).textContent = currentScore;
    } else {
        // Switch player if dice roll is 1 and reset current score
        currentScore = 0;
        activePlayer(currentPlayer).textContent = currentScore;

        currentPlayer = currentPlayer == 0 ? 1 : 0;
        player1Elem.classList.toggle(`player--active`);
        player2Elem.classList.toggle(`player--active`);
    }
});

btnHoldScore.addEventListener(`click`, function () {});

const activePlayer = function (currentPlayer) {
    return document.getElementById(`current--${currentPlayer}`);
};
