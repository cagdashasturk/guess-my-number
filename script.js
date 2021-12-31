'use strict';

//variables
let score = 20;
let highscore = 0;
let rndNumber = generateRandomNumber();

//dom elements
const bodyEl = document.querySelector('body');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');

//functions
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
const displayMessage = message => (messageEl.textContent = message);

const changeStyles = (bodyBgColor, numberWidth) => {
  bodyEl.style.backgroundColor = bodyBgColor;
  numberEl.style.width = numberWidth;
};

const disableElements = disable => {
  guessEl.disabled = disable;
  checkBtn.disabled = disable;
  checkBtn.style.cursor = disable ? 'not-allowed' : 'pointer';
  guessEl.style.cursor = disable ? 'not-allowed' : 'text';
};

//button click events
checkBtn.addEventListener('click', () => {
  const guessNumber = Number(guessEl.value);

  if (!guessNumber || guessNumber < 0 || guessNumber > 20) {
    displayMessage('no valid input');
  } else if (guessNumber === rndNumber) {
    displayMessage('congurats');
    changeStyles('#60b347', '30rem');
    disableElements(true);
    numberEl.textContent = rndNumber;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guessNumber !== rndNumber) {
    scoreEl.textContent = --score;
    displayMessage(guessNumber > rndNumber ? 'too high' : 'too low');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  rndNumber = generateRandomNumber();

  disableElements(false);
  changeStyles('#222', '15rem');
  displayMessage('Start guessing...');

  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessEl.value = '';
});
