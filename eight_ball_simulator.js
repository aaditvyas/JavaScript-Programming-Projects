let userName = "Aadit";

// Welcome
userName == "Jane" ? console.log("Hello, Jane!") : console.log("Hello!")

// Generate question
let userQuestion = "what are is the first number for the lottery this week?";

console.log(`${userName}, ${userQuestion}`);

// Randomize answer
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

// Pick an answer
switch (randomNumber){
  case 0:
    eightBall = "0";
    break;
  case 1:
    eightBall = "1";
    break;
  case 2:
    eightBall = "2";
    break;
  case 3:
    eightBall = "3";
    break;
  case 4:
    eightBall = "4";
    break;
  case 5:
    eightBall = "5";
    break;
  case 6:
    eightBall = "6";
    break;
  case 7:
    eightBall = "7";
    break;
  default:
    eightBall = "8";
    break;
}

// Output
console.log(`The first number for this week will be ${eightBall}!`);