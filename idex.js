const randomNumber = Math.floor(Math.random() * 100) + 1;
// let randomNumber = 7;
let playing = true;
while (playing) {
  checkGuess();
}
function checkGuess() {
  let myGuess = parseInt(prompt("What is your Guess between 1-100 ?"));
  if (myGuess === randomNumber) {
    alert(` WOW You Won! ${myGuess} was a Secret Number`);
    playing = false;
  } else if (myGuess > randomNumber) {
    alert(`Your guess was  ${myGuess} . That's too high. Try Again!`);
  } else if (myGuess < randomNumber) {
    alert(`Your guess was  ${myGuess} . That's too low. Try Again!`);
  }
}

// console.log("Hello World!");

// generate a number
// ask for a number
// evaluate the guess
// give feedback
// track the score

// class Game {
//   answer = null;
//   guess = null;
//   player = null;
//   score = 0;
//   time = 0;
//   timer = null;
//   isPlaying = false;

//   start() {
//     // Intro
//     alert(
//       "Welcome to the number guessing game!\n\nYou'll  be asked to guess a whole number between 1 and 100.\n\nGood luck!"
//     );

//     // Generate the answer
//     this.answer = this.generateNumber(1, 100);

//     // Change the state to is playing
//     this.isPlaying = true;

//     // Start timer
//     this.timer = setInterval(() => {
//       console.log("timer", this.time)
//       this.time++;
//     }, 1000);

//     // Begin turns
//     this.turns();
//   }

//   turns() {
//     let userInput = prompt("Your guess:");

//     if (userInput.toLowerCase() == "quit") {
//       return this.end();
//     }

//     this.guess = parseInt(userInput);

//     this.score++;

//     if (isNaN(this.guess)) {
//       alert("You didn't give me a valid number...");
//     } else {
//       if (this.guess > this.answer) {
//         alert("Too high");
//       } else if (this.guess < this.answer) {
//         alert("Too low");
//       } else {
//         alert(`Correct!`);

//         this.end();
//       }
//     }

//     if (this.isPlaying) {
//       this.turns();
//     }
//   }

//   end() {
//     alert(
//       `You finished with a score of ${this.score} in ${this.time} seconds.`
//     );

//     clearInterval(this.timer);
//     this.timer = null;
//     this.score = 0;
//     this.time = 0;
//     this.isPlaying = false;
//   }

//   generateNumber(min = 1, max = 10) {
//     return Math.round(Math.random() * (max - min) + min);
//   }
// }

// new Game().start();