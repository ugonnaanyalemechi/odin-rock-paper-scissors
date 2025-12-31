function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
 
function getHumanChoice() {
  const choice = prompt("Choose: Rock, paper, or scissors?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    return 0;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!");
    return 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!");
    return 0;
  }  else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper!");
    return 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    return 0;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!");
    return 1;
  } else {
    console.log("Draw!");
  }
}

function determineGameWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a draw!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    const result = playRound(humanSelection, computerSelection);

    switch (result) {
      case 0: // represents human win
        humanScore += 1;
        break;
      case 1: // represents computer win
        computerScore += 1;
        break;
    }
  }

  determineGameWinner(humanScore, computerScore);
}

playGame();