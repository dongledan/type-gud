window.addEventListener('load', init);

//global variables

let time = 60;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');

const words = ['danny is the best'];

//init game

function init() {
  showWord(words);

  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(gameStatus, 100);
}

function startMatch() {
  if (match()) {
    isPlaying = true;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) scoreDisplay.innerHTML = 0; 
  scoreDisplay.innerHTML = score;
}

function match() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correcto';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) {
  const random = Math.floor(Math.random() * words.length);

  currentWord.innerHTML = words[random]
}

function countdown() {
  if (time > 0) time--;
  else if (time === 0) isPlaying = false;
  timeDisplay.innerHTML = time;  
}

function gameStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}
