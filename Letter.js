function Letter(letter) {
  this.letter = letter;
  this.guessed = false;

  // Show character as letter or underscore
  this.showLetter = () => (this.guessed ? this.letter : '_');

  // Compare keyed character to letter and change guessed boolean to true
  this.check = keyGuess => {
    if (this.letter.toUpperCase() === keyGuess) {
      this.guessed = true;
    }
  }
}

// let a = new Letter('a');
// console.log(a.showLetter());
// a.guessed = true;
// console.log(a.showLetter());

module.exports = Letter;