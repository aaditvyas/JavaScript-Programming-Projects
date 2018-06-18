// Check that the user has input a valid choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
    return userInput;
  } else {
   	console.log("Error: Invalid input given by user.")
  }
};

// Randomly select a computer choice
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 2);
  switch (randNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

// Determine a winner based on user and computer choices
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === "bomb"){
    return "The user won by default."
  }
  
  if(userChoice === computerChoice){
    return "This game was a tie.";
  }
  
  if(userChoice === "rock"){
    if(computerChoice === "paper"){
      return "The computer won.";
    } else {
      return "The user won.";
    }
  } else if(userChoice === "paper"){
    if(computerChoice === "scissors"){
      return "The computer won.";
    } else {
      return "The user won.";
    }
  } else if(userChoice === "scissors"){
    if(computerChoice === "rock"){
      return "The computer won";
    } else {
      return "The user won.";
    }
  }
}

// Simulate the game
const playGame = () => {
  userChoice = getUserChoice("bomb");
  computerChoice = getComputerChoice("paper");
  console.log("User Choice: " + userChoice + "	Computer Choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
