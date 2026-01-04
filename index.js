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

  let winner = 0; // 0 represents human, 1 represents computer, 2 represents draw
  
  const roundResults = document.querySelector(".round-results");
  const roundResult = document.createElement("p");

  if (humanChoice === "rock" && computerChoice === "scissors") {
    roundResult.textContent = "You win! Rock beats scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    roundResult.textContent = "You lose! Rock beats scissors!";
    winner = 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResult.textContent = "You win! Scissors beats paper!";
  }  else if (humanChoice === "paper" && computerChoice === "scissors") {
    roundResult.textContent = "You lose! Scissors beats paper!";
    winner = 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResult.textContent = "You win! Paper beats rock!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    roundResult.textContent = "You lose! Paper beats rock!";
    winner = 1;
  } else {
    roundResult.textContent = "Draw!";
    winner = 2;
  }

  roundResults.appendChild(roundResult);
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

  determineGameWinner(humanScore, computerScore);
}

const selectionButtons = document.querySelector(".buttons");

selectionButtons.addEventListener("click", (e) => {
  const computerSelection = getComputerChoice();
  const humanSelection = e.target.classList[0];
  playRound(humanSelection, computerSelection);
});




