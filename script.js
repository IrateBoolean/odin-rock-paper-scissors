console.log("Let's Play: Rock Paper Scissors!")

CHOICES = ["Rock", "Paper", "Scissors"]

function getRandom(arr){
  idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}


function computerPlay(){
  return getRandom(CHOICES)
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection) {
    return "It's a tie! What are the odds? One in three of course."
  } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
             (playerSelection == "Paper" && computerSelection == "Scissors") ||
             (playerSelection == "Scissors" && computerSelection == "Rock")) {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  } else {
    return `Congratulations! ${playerSelection} beats ${computerSelection}`
  }

}

