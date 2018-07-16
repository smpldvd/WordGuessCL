const Letter = require("./Letter");

function Word(word) {
  this.word = word;
  this.letterArr = [];
  
  // Function to split word to each letter
  word.split('').forEach(element => {
    this.letterArr.push(new Letter(element));
  });

  this.showLetter = () => this.letterArr.join(' ');

  this.checkGuess = guessed => {
    this.letterArr.forEach(element => {element.check(guessed)});
  };
}

// let testWord = new Word('Braille');
// console.log(testWord);

module.exports = Word