let ask = confirm("Wanna play a game?");
let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

if (!ask){
  bye();
}
else {
  for (let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
  alert(`Player score: ${humanScore}, Computer score: ${computerScore}`)
  if (humanScore > computerScore) {
    alert("Player wins! Yay!!!");
  }
  else if (computerScore > humanScore) {
    alert("Computer wins! Oh no! :o");
  } else {
    alert("Tie round!");
  }
}

function getComputerChoice(){
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

function getHumanChoice(){
  let choice = prompt("Rock, paper or scissors?").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors"){
    alert("Player gets a point!");
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "rock"){
    alert("Player gets a point!");
    humanScore++;
  }
  else if (humanChoice == "scissors" && computerChoice == "paper"){
    alert("Player gets a point!");
    humanScore++;
  }
  else if (humanChoice.length == computerChoice.length){
    alert("Tie! No points awarded.")
  } 
  else {
    alert("Computer gets a point!");
    computerScore++;
  }
}

function bye(){
  alert("Ok then. Bye!");
}