const Word = require('./Word');
const inquirer = require('inquirer');

const wordBank = ["Supercalifragilisticexpialidocious", "Onomatopoeia", "Acronym", "Hyperbole", "Wordplay", "Alliteration", "Assonance", "Anagram", "Cacophony", "Euphemism", "Juxtaposition", "Paradox", "Understatement"];

let pickedWord = "";
let guessedCorrectly = false;
let guessed = [];
let guessesLeft = 13;

function startGame() {
  guessesLeft = 13;
  let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  pickedWord = new Word(randomWord);
  pickedWord.toString();
  console.log("It's all about Literary Devices.")
};

function resetAtEnd() {
  inquirer.prompt([
    {
      type: "confirm",
      name: "tryAgain",
      message: "Wanna play a game?"
    }
  ]).then(answers => {
    if (answers.tryAgain) {
      guessed = [];
      guessesLeft = 13;
      console.log("Let's do this!")
      startGame();
    }
    else {
      console.log("Thanks for playing.")
    }
  });
};

function gamePlay() {
  if (guessesLeft > 0 && !guessedCorrectly) {
    inquirer.prompt([
      {
        type: "input",
        name: "keyedLetter",
        message: "Guess a letter"
      }
    ]).then(answers => {
      answers.keyedLetter.toLowerCase();
      if (answers.keyedLetter.length === 1 && /^[a-zA-Z]+$/.test(answers.keyedLetter)) {
        let input = answers.keyedLetter.toUpperCase();
        Word.checkGuess(keyedLetter);
        
      };
    })
  }
};

resetAtEnd();
gamePlay();