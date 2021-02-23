// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct answer !';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 20;
// // document.querySelector('.number').textContent = ;

// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);

// const x = function(){
//     console.log(23);
// }

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
         document.querySelector('.number').style.backgroundImage = 'linear-gradient(to top, red,orange,yellow,green,blue,indigo,violet)';
         document.querySelector('.number').style.borderRadius = '10px';

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
             displayMessage(guess > numarRandom ? 'Too high!' : 'Too smaller') ; // Scurta si decizie la atribuire daca este indeplinita conditia
             score--;
             document.querySelector('.score').textContent = score;}
         else { 
           displayMessage('You lost game!');
           document.querySelector('.score').textContent = 0; }
    }
});

// Formula lunga

    // Whan my number introduced is grater
//     else if(guess > numarRandom){
//         if(score > 1){
//              document.querySelector('.message').textContent = 'Too high!';
//              score--;
//              document.querySelector('score').textContent = score;}
//          else { 
//              document.querySelector('.message').textContent = 'You lost game!';
//              document.querySelector('.score').textContent = 0;}
//     }

//     // Whan my number introduced is smaller
//     else if(guess < numarRandom){
//         if(score > 1){
//              document.querySelector('.message').textContent = 'To low !';
//              score--;
//              document.querySelector('.score').textContent = score;}
//      else {
//          document.querySelector('.message').textContent = 'You lost game!';
//          document.querySelector('.score').textContent = 0;}
//      }
// });


// Challenge 
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
}); // te las :)

// merge acum deci era de la score? trebuie declarat neaparat din nou? n am inteles
// nu trebuie declarat. este declarat o singura data, sus. ii resetezi valoarea aiciaaa