console.log("Let's Play: Rock Paper Scissors!")

CHOICES = ["rock", "paper", "scissors"]

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')
const scoreboard = document.querySelector('.words')

let active = false
let playerScore = 0
let computerScore = 0
let ties = 0

function resetGame() {
  if (active) {
  active = false
  playerScore = 0
  computerScore = 0
  ties = 0
  scoreboard.innerHTML = 'Welcome to Rock Paper Scissors by IrrationalBoolean.<br> Press Play below to begin.<br> First to 5 wins.'
  reset.textContent = 'Play'
  } else {
    if (playerScore + computerScore + ties > 0) {
      active = true
      playerScore = 0
      computerScore = 0
      ties = 0
      scoreboard.innerHTML = `Use the above buttons to play <br> Current Score: ${playerScore} - ${computerScore} - ${ties} <br>First to 5 wins.`

    } else { 
      active = true
      scoreboard.innerHTML = `Use the above buttons to play <br> Current Score: ${playerScore} - ${computerScore} - ${ties} <br>First to 5 wins.`
      reset.textContent = 'Reset'
    }
  }
}

reset.addEventListener('click', resetGame);

rock.addEventListener('click', round);
paper.addEventListener('click', round);
scissors.addEventListener('click', round);


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
    ties++
    return ["It's a tie! What are the odds? One in three of course.", 0]
  } else if ((playerSelection == "rock" && computerSelection == "paper") ||
             (playerSelection == "paper" && computerSelection == "scissors") ||
             (playerSelection == "scissors" && computerSelection == "rock")) {
    computerScore++
    return [`You lose! ${computerSelection} beats ${playerSelection}`, -1]
  } else {
    playerScore++
    return [`Congratulations! ${playerSelection} beats ${computerSelection}`, 1]
  }

}

function game() {
   if (playerScore > computerScore){
    console.log(`Congratulations! You win ${playerScore} to ${computerScore}`)
  } else if (playerScore < computerScore) {
    console.log(`Sorry, you lost ${playerScore} to ${computerScore}`)
  } else {
    console.log(`Tie game!`)
  }
}

function round(){
  if (active) {
    console.log(this)
    console.log(this.id)
    let result = playRound(this.id, computerPlay())
    console.log(result)
    scoreboard.innerHTML = `${result[0]}<br>Current Score: ${playerScore} - ${computerScore} - ${ties}<br>First to 5 wins.`
  } else {
    /* scoreboard.innerHTML = '<h1>Press Play to Begin</h1>' */
  }
  if (playerScore > 4) {
    active = false
    scoreboard.innerHTML = `You WIN! <br>${playerScore} - ${computerScore} - ${ties}<br> Press Reset to play again.`
  }
  if (computerScore > 4) {
    active = false
    scoreboard.innerHTML = `You LOSE! <br>${playerScore} - ${computerScore} - ${ties}<br> Press Reset to play again.`
  }


}

