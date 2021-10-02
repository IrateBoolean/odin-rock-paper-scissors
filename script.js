console.log("Let's Play: Rock Paper Scissors!")

CHOICES = ["Rock", "Paper", "Scissors"]

function getRandom(arr){
  idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}


function computerPlay(){
  return getRandom(CHOICES)
}

