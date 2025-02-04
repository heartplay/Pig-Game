'use strict';
// Selecting elements
// For player 1
const player1Elem = document.querySelector(`.player--0`);
const score1Elem = document.getElementById(`score--0`);
const curScore1Elem = document.getElementById(`current--0`);
// For player 2
const player2Elem = document.querySelector(`.player--1`);
const score2Elem = document.getElementById(`score--1`);
const curScore2Elem = document.getElementById(`current--1`);
// For everything else
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
        document.getElementById(`current--${currentPlayer}`).textContent =
            currentScore;
    } else {
        // Switch player and reset current score if dice roll is 1
        switchPlayer();
    }
});

btnHoldScore.addEventListener(`click`, function () {
    // Add current score to current player's score
    totalScores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
        totalScores[currentPlayer];

    // Check if player's score hit 100
    if (totalScores[currentPlayer] >= 100) {
        alert(`Player ${currentPlayer + 1} win!`);
    } else {
        // Switch player and reset current score if no win condition
        switchPlayer();
    }
});

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    player1Elem.classList.toggle(`player--active`);
    player2Elem.classList.toggle(`player--active`);
};

// const activePlayer = function (currentPlayer) {
//     return document.getElementById(`current--${currentPlayer}`);
// };
