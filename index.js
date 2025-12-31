let humanScore = 0;
let computerScore = 0;

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

  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!");
    humanScore += 1;
  }  else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper!");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!");
    computerScore += 1;
  } else {
    console.log("Draw!");
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);