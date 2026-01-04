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

// changed this from returning winner based on numbers to winner based on string
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

function checkGameWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    const roundResults = document.querySelector(".game-results");
    const winnerResult = document.createElement("p");
    winnerResult.textContent = "You win the game!";
  } else if (computerScore === 5) {
    const roundResults = document.querySelector(".game-results");
    const winnerResult = document.createElement("p");
    winnerResult.textContent = "You lose the game!";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;  

  const selectionButtons = document.querySelector(".buttons");

  selectionButtons.addEventListener("click", (e) => {
    const computerSelection = getComputerChoice();
    const humanSelection = e.target.classList[0];
    const roundWinner = playRound(humanSelection, computerSelection);
    
    const humanScorePara = document.querySelector(".human-score");
    const computerScorePara = document.querySelector(".computer-score");

    if (roundWinner === "human") {
      humanScore += 1;
      humanScorePara.textContent = `Human Score: ${humanScore}`;

    } else if (roundWinner === "computer") {
      computerScore += 1;
      computerScorePara.textContent = `Computer's Score: ${computerScore}`;
    }

    if (humanScore === 5) {
      const gameResults = document.querySelector(".game-results");
      const winnerResult = document.createElement("p");
      winnerResult.textContent = "You win the game!";
      gameResults.append(winnerResult);
    } else if (computerScore === 5) {
      const gameResults = document.querySelector(".game-results");
      const winnerResult = document.createElement("p");
      winnerResult.textContent = "You lose the game!";
      gameResults.append(winnerResult);
    }
  });

  if (humanScore === 5 || computerScore === 5) {
    return;
  }
}

playGame();

// create initialize game function? (storing )


