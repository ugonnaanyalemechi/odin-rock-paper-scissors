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

  let roundWinner = "";
  
  const roundResults = document.querySelector(".game-results");
  const roundResult = document.createElement("p");

  if (humanChoice === "rock" && computerChoice === "scissors") {
    roundResult.textContent = "You win! Rock beats scissors!";
    roundWinner = "human";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    roundResult.textContent = "You lose! Rock beats scissors!";
    roundWinner = "computer";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResult.textContent = "You win! Scissors beats paper!";
    roundWinner = "human";
  }  else if (humanChoice === "paper" && computerChoice === "scissors") {
    roundResult.textContent = "You lose! Scissors beats paper!";
    roundWinner = "computer";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResult.textContent = "You win! Paper beats rock!";
    roundWinner = "human";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    roundResult.textContent = "You lose! Paper beats rock!";
    roundWinner = "computer";
  } else {
    roundResult.textContent = "Draw!";
  }

  roundResults.appendChild(roundResult);
  return roundWinner;
}

function updateHumanScore(humanScore) {
  const humanScorePara = document.querySelector(".human-score");
  humanScore += 1;
  humanScorePara.textContent = `Human Score: ${humanScore}`;
  return humanScore;
}

function updateComputerScore(computerScore) {
  const computerScorePara = document.querySelector(".computer-score");
  computerScore += 1;
  computerScorePara.textContent = `Computer's Score: ${computerScore}`;
  return computerScore;
}

function checkRoundWinner(roundWinner, humanScore, computerScore) {
  if (roundWinner === "human") {
    humanScore = updateHumanScore(humanScore);
  } else if (roundWinner === "computer") {
    computerScore = updateComputerScore(computerScore);
  }
  return [humanScore, computerScore];
}

function declareHumanWinner() {
  const gameResults = document.querySelector(".game-results");
  const winnerResult = document.createElement("p");
  winnerResult.textContent = "You win the game!";
  gameResults.append(winnerResult);
}

function declareHumanLoser() {
  const gameResults = document.querySelector(".game-results");
  const winnerResult = document.createElement("p");
  winnerResult.textContent = "You lose the game!";
  gameResults.append(winnerResult);
}

function checkGameScore(humanScore, computerScore) {
  if (humanScore === 5) {
    declareHumanWinner();
  } else if (computerScore === 5) {
    declareHumanLoser();
  }
}

function playGame() { 
  let humanScore = 0;
  let computerScore = 0;

  const selectionButtons = document.querySelector(".buttons");

  selectionButtons.addEventListener("click", function handleSelectionButtonClick(e) {
    const computerSelection = getComputerChoice();
    const humanSelection = e.target.classList[0];
    const roundWinner = playRound(humanSelection, computerSelection);
    
    [humanScore, computerScore] = checkRoundWinner(roundWinner, humanScore, computerScore);
    checkGameScore(humanScore, computerScore);

    if (humanScore === 5 || computerScore === 5) {
      selectionButtons.removeEventListener("click", handleSelectionButtonClick);
  }
  });
}

playGame();