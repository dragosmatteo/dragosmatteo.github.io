'use strict';

// Select elements
const player0El = document.querySelector('.active--0');
const player1El = document.querySelector('.active--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Switch
const switchPlayer = function () {
    document.getElementById(`current--${acvtivePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player0El.classList.toggle('player--active');
};


//Function de initializare
let scores, currentScore, activePlayer, playing;

const inet = function (){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent= 0;
    score1El.textContent= 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player0El.classList.remove('player--winner');

 diceEl.classList.add('hidden');}
 
 inet();
 
// Rolling dice
btnRoll.addEventListener('click', function(){
    // Generate random number
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // Display image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // i se atribie numarul cu imaginea

    //Check for roll 1
    if (dice !== 1){
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${acvtivePlayer}`).textContent = currentScore;
        // Switch to another player
    }else{
          switchPlayer();
    }
  }
});


btnHold.addEventListener('click' , function(){
    // Add current score to active player
    if(playing){
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${acvtivePlayer}`).textContent = scores[activePlayer];

    // Check if player score is >= 100
    if (score[activePlayer] >= 100){
        // Finish game
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
    // Switch to the next player 
    switchPlayer(); }
}
});

btnNew.addEventListener('click', inet());