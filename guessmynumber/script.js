'use strict';

let numarRandom = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if(!guess){
        displayMessage('Introduce a valid number!');
    }

    // When is equal
    else if (guess === numarRandom){
        document.querySelector('.number').textContent = numarRandom;
        displayMessage('Is correct number!');
         // Selectia de stiluri
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '300p ';
         document.querySelector('.number').style.backgroundImage = 'linear-gradient(to left, red,yellow)';
         document.querySelector('.number').style.borderRadius = '5px';

         // Sa afiseze numarul random cand l a, ghicit

         if(score > highscore){
             highscore = score;
             document.querySelector('.highscore').textContent = highscore;
         }

    }

    // Wnhen is different
    else if(guess !== numarRandom){
         if(score > 1){
       // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
             displayMessage(guess > numarRandom ? 'Too high!' : 'Too small!') ; 
             score--;
             document.querySelector('.score').textContent = score;}
         else { 
           displayMessage('You lost game!');
           document.querySelector('.score').textContent = 0; }
    }
});
 
// Again button aducem totul de la 0 

document.querySelector('.again').addEventListener('click', function() {
     numarRandom = Math.trunc(Math.random() * 20) + 1;
     score = 20;
     document.querySelector('.score').textContent = score;
     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.guess').value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('.number').textContent = '?';
     document.querySelector('.number').style.background ='#eee';
     document.querySelector('.number').style.borderRadius = '0px';
     //  document.querySelector('.highscore').textContent = 0;
})
