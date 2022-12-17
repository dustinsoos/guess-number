'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//EVENT LISTENER FOR BOX GUESS
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    //refactored version of code above, using displayMessage function
    displayMessage('⛔️ No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    //changing background color to green when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';

    //changes number box to become bigger once we win
    document.querySelector('.number').style.width = '30rem';

    //high score check
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //ternary operator for both high and low
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📉Too low!';
      //using displayMessage function with ternary operator conditional
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      //subtracts 1 from score count
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//REFACTORED THIS CODE ABOVE USING TENARY OPERATOR
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈Too high!';
//     //subtracts 1 from score count
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   //when guess is to low code
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉Too low!';
//     //subtracts 1 from score count
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

//AGAIN BUTTON RESETTING EVERYTHING TO PLAY AGAIN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = '20';

  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
