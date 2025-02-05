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
// For dice, dice button, new game button, hold score button
const diceElem = document.querySelector(`.dice`);
const btnRollDice = document.querySelector(`.btn--roll`);
const btnNewGame = document.querySelector(`.btn--new`);
const btnHoldScore = document.querySelector(`.btn--hold`);

let totalScores, currentScore, currentPlayer, isPlaying;

init();

// Dice roll
btnRollDice.addEventListener(`click`, function () {
    if (isPlaying) {
        // Get random dice roll
        const diceRoll = Math.trunc(Math.random() * 6) + 1;

        // Display dice according to dice roll
        diceElem.classList.remove(`hidden`);
        diceElem.src = `dice-${diceRoll}.png`;

        // Check roll
        if (diceRoll !== 1) {
            // Add dice roll to current score
            currentScore += diceRoll;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
            console.log(totalScores);
        } else {
            // Switch player and reset current score if dice roll is 1
            switchPlayer();
        }
    }
});

btnHoldScore.addEventListener(`click`, function () {
    if (isPlaying) {
        // Add current score to current player's score
        totalScores[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = totalScores[currentPlayer];

        // Check win condition and finish game if true
        if (totalScores[currentPlayer] >= 100) {
            isPlaying = false;
            document.querySelector(`.player--${currentPlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${currentPlayer}`).classList.remove(`player--active`);
            diceElem.classList.add(`hidden`);
        } else {
            // Switch player and reset current score if no win condition
            switchPlayer();
        }
    }
});

// Start new game
btnNewGame.addEventListener(`click`, init);

function init() {
    // Starting conditions

    // Reset total score, current score, current player and playing condition
    totalScores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    isPlaying = true;
    score1Elem.textContent = 0;
    score2Elem.textContent = 0;
    curScore1Elem.textContent = 0;
    curScore2Elem.textContent = 0;
    // Hide dice
    diceElem.classList.add(`hidden`);
    // Reset winner and current player
    player1Elem.classList.remove(`player--winner`);
    player2Elem.classList.remove(`player--winner`);
    player1Elem.classList.add(`player--active`);
    player2Elem.classList.remove(`player--active`);
}

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    player1Elem.classList.toggle(`player--active`);
    player2Elem.classList.toggle(`player--active`);
}
