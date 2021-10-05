console.log("Let's Play: Rock Paper Scissors!")

CHOICES = ["Rock", "Paper", "Scissors"]

function getRandom(arr){
  idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

function computerPlay(){
  return getRandom(CHOICES)
}

function playerPlay(){
  let choice
  while (!(choice in [0, 1, 2])) {
    choice = parseInt(prompt("0 for Rock, 1 for Paper, 2 for Scissors", 0), 10)
  }
  return CHOICES[choice]
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection) {
    return ["It's a tie! What are the odds? One in three of course.", 0]
  } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
             (playerSelection == "Paper" && computerSelection == "Scissors") ||
             (playerSelection == "Scissors" && computerSelection == "Rock")) {
    return [`You lose! ${computerSelection} beats ${playerSelection}`, -1]
  } else {
    return [`Congratulations! ${playerSelection} beats ${computerSelection}`, 1]
  }

}

function game() {
  let playerScore = 0
  let computerScore = 0
  let result
  for (let i = 0; i < 5; i++) {
    result = playRound(playerPlay(), computerPlay())
    if (result[1] > 0) {
      playerScore++
    } else if (result[1] < 0) {
      computerScore++
    }
    console.log(`${result[0]} \n After Round ${i+1} the score is: ${playerScore} : ${computerScore}`)
  }
  if (playerScore > computerScore){
    console.log(`Congratulations! You win ${playerScore} to ${computerScore}`)
  } else if (playerScore < computerScore) {
    console.log(`Sorry, you lost ${playerScore} to ${computerScore}`)
  } else {
    console.log(`Tie game!`)
  }
}

game()
