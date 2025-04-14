let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanChoice;

function playGame(){
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  humanScore = 0;
  computerScore = 0;
  hScore.textContent = humanScore;
  cScore.textContent = computerScore;
}

const startContainer = document.querySelector(".play");
startContainer.textContent = "Start";
startContainer.addEventListener("click", () => {
  startContainer.textContent = "Restart";
  playGame();
})

const interactionContainer = document.querySelector("body");
interactionContainer.setAttribute("style", "background-color: skyblue")

const startButton = document.querySelector(".play");
startButton.setAttribute("style", "background-color:rgb(241, 41, 41); border: solid rgb(173, 16, 16); border-radius: 5px")

const rock = document.createElement("button");
rock.classList.add("Rock");
rock.textContent = "Rock";
rock.addEventListener("click", () => {
  humanChoice = "rock";
  gameRound(humanChoice, getComputerChoice());
})
rock.disabled = true;
interactionContainer.append(rock);

const paper = document.createElement("button");
paper.classList.add("Paper");
paper.textContent = "Paper";
paper.addEventListener("click", () => {
  humanChoice = "paper";
  gameRound(humanChoice, getComputerChoice());
})
paper.disabled = true;
interactionContainer.append(paper);

const scissors = document.createElement("button");
scissors.classList.add("Scissors");
scissors.textContent = "Scissors";
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  gameRound(humanChoice, getComputerChoice());
})
scissors.disabled = true;
interactionContainer.append(scissors);

const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");
hScore.textContent = humanScore;
cScore.textContent = computerScore;

function getComputerChoice(){
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

function gameRound(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "scissors"){
    alert("Player gets a point!");
    humanScore++;
    chkandupdScores(humanScore, computerScore);;
  }
  else if (playerChoice == "paper" && computerChoice == "rock"){
    alert("Player gets a point!");
    humanScore++;
    chkandupdScores(humanScore, computerScore);;
  }
  else if (playerChoice == "scissors" && computerChoice == "paper"){
    alert("Player gets a point!");
    humanScore++;
    chkandupdScores(humanScore, computerScore);;
  }
  else if (playerChoice.length == computerChoice.length){
    alert("Tie! No points awarded.");
    chkandupdScores(humanScore, computerScore);;
  } 
  else {
    alert("Computer gets a point!");
    computerScore++;
    chkandupdScores(humanScore, computerScore);
  }
}

function chkandupdScores(humanScore, computerScore){
  
  hScore.textContent = humanScore;
  cScore.textContent = computerScore;
  
  if (humanScore == 5){
    alert("Player wins!");
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } 
  else if (computerScore == 5){
    alert("Computer wins!");
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}