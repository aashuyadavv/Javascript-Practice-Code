let playerScore =0;
let computerScore =0;

let choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
   
let randomNumber =  Math.floor(Math.random() * 3);

let computerChoice = choices[randomNumber];

let result = "";

if (playerChoice === computerChoice){
    result = "It's a tie!";
}
else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
){
    result = "You win!";
    playerScore++;
}
else {
    result = "computer wins!";
    computerScore++;
}

document.getElementById("choices").textContent = 
`You chose: ${playerChoice} | Computer chose: ${computerChoice}`;

document.getElementById("result").textContent = result;

document.getElementById("score").textContent = 
`You: ${playerScore} | Computer: ${computerScore}`;

}

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    document.getElementById("choices").textContent = 
    `You: ${playerScore} | Computer: ${computerScore}`;

    document.getElementById("score").textContent = "";

    document.getElementById("choices").textContent = "";

    document.getElementById("result").textContent = "";

}








// let hands  = ["rock", "paper", "scissors"]

// function getHand() {
//     let randomIndex = Math.floor (Math.random() * 3)
//     return hands  [randomIndex]
// }

// console.log (getHand() )