let choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
   
    console.log("You Chose:", playerChoice);

let randomNumebr =  Math.floor(Math.random() * 3);

let computerChoice = choices[randomNumebr];

console.log("Computer chose:", computerChoice);

if (playerChoice === computerChoice){
    console.log("It's a tie!");
}
else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
){
    console.log("You win!");
}
else {
    console.log("Computer wins!");
}
}

























// let hands  = ["rock", "paper", "scissors"]

// function getHand() {
//     let randomIndex = Math.floor (Math.random() * 3)
//     return hands  [randomIndex]
// }

// console.log (getHand() )