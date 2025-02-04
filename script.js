'use strict';
// Selecting elements
const score1Elem = document.querySelector(`#score--0`);
const curScore1Elem = document.getElementById(`current--0`);
const score2Elem = document.getElementById(`score--1`);
const curScore2Elem = document.getElementById(`current--1`);
const diceElem = document.querySelector(`.dice`);
const btnRollDice = document.querySelector(`.btn--roll`);
const btnNewGame = document.querySelector(`.btn--new`);
const btnHoldScore = document.querySelector(`.btn--hold`);

// Starting conditions
score1Elem.textContent = 0;
score2Elem.textContent = 0;
diceElem.classList.add(`hidden`);
let currentScore = 0;

// Dice roll
btnRollDice.addEventListener(`click`, function () {
    // Get random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);

    // Display dice in accordance with dice roll
    diceElem.classList.remove(`hidden`);
    diceElem.src = `dice-${diceRoll}.png`;

    // Check roll
    if (diceRoll !== 1) {
        // Add dice roll to score
        currentScore += diceRoll;
        curScore1Elem.textContent = currentScore;
    } else {
        // Switch player
        currentScore = 0;
        curScore1Elem.textContent = currentScore;
    }
});
