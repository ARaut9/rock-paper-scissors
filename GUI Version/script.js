function computerPlay() {
    // create array of options for computer
    const COMP_OPTIONS = ["rock", "paper", "scissors"];
    //store the random index number from 0 to 2
    let compOptionIndex = Math.floor((Math.random() * 3));
    // return randomly selected option for computer
    return COMP_OPTIONS[compOptionIndex];
}

function playRound(playerSelection, computerSelection) {
    // store result to return at the end
    let result;
    switch(true) {
      case playerSelection === "rock" && computerSelection === "rock":
        result = "It's a tie! Both players chose rock";
        break;

      case playerSelection === "rock" && computerSelection === "paper":
        result = "You Lose! Paper beats Rock";
        break;

      case playerSelection === "rock" && computerSelection === "scissors":
        result = "You Win! Rock beats Scissors";
        break;

      case playerSelection === "paper" && computerSelection === "rock":
        result = "You Win! Paper Beats Rock";
        break;

      case playerSelection === "paper" && computerSelection === "paper":
        result = "It's a tie! Both players chose paper";
        break;

      case playerSelection === "paper" && computerSelection === "scissors":
        result = "You Lose! Scissors Beats Paper";
        break;

      case playerSelection === "scissors" && computerSelection === "rock":
        result = "You Lose! Rock Beats Scissors";
        break;

      case playerSelection === "scissors" && computerSelection === "paper":
        result = "You Win! Scissors beats Paper";
        break;

      case playerSelection === "scissors" && computerSelection === "scissors":
        result = "It's a tie! Both players chose scissors";
        break;

      default:
        result = "Something went horribly wrong...";
    }
    
    // return result based on which switch case is true
    return result;
 }

let computerScore = 0;
let playerScore = 0;
     
function updateScore(roundResult) {
if (roundResult.includes("Win")) {
    playerScore++;
    }

else if (roundResult.includes("Lose")) {
    computerScore++;
    }

//return [playerScore, computerScore];
return `Player: ${playerScore}, Computer: ${computerScore}`;
}

const buttons = document.querySelectorAll(".btn");
const resultsSection = document.querySelector(".results");
const newGameBtn = document.querySelector(".new-game-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", game);
}

newGameBtn.addEventListener("click", newGame);

const currentScore = document.createElement("p");
const currentResult = document.createElement("p");
const finalResultJS = document.createElement("p");

function game(e) {
  let playerSelection = e.target.innerText.toLowerCase();
  let roundResult = playRound(playerSelection, computerPlay());
  let score = updateScore(roundResult);
  currentResult.textContent = roundResult;
  currentScore.textContent = score;
  resultsSection.appendChild(currentResult);
  resultsSection.appendChild(currentScore);

  if (computerScore == 5) {
    finalResultJS.textContent = "You Lost! Better luck next time.";
    finalResultJS.classList.add("lost");
    resultsSection.appendChild(finalResultJS);
      for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
  else if (playerScore == 5) {
    finalResultJS.textContent = "Congratulations, You Won!";
    finalResultJS.classList.add("won");
    resultsSection.appendChild(finalResultJS);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
}

function newGame() {
  computerScore = 0;
  playerScore = 0;
  resultsSection.removeChild(currentResult);
  resultsSection.removeChild(currentScore)
  resultsSection.removeChild(finalResultJS);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}