let playerPoint = 0;
let computerPoint = 0;
let playerSelection = " ";
let computerSelection = " ";
let result = " ";
let winnerDisplay = document.querySelector(".winner");

// Get computer's choice
function getComputerChoice() {
    const game = ["rock", "scissors", "paper"];
    let random = Math.floor(Math.random() * 3);
    return game[random];
}

// Plays the game
function playRound(playerSelection, computerSelection, playerPoint, computerPoint, winnerDisplay, result) {
    if (playerSelection === computerSelection) {
        result = "It's a draw";
        winnerDisplay.innerHTML = result;
        
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        computerPoint++;
        result = `You Lose! ${playerSelection} loses to ${computerSelection}`;
        winnerDisplay.innerHTML = result;
    } else {
        playerPoint++;
        result = `You Win! ${playerSelection} wins over ${computerSelection}`;
        winnerDisplay.innerHTML = result;
        
    }
}

let rockChoice = document.querySelector(".rock");
rockChoice.addEventListener("click", () => {
    playerSelection = "rock";
    if (playerSelection != " ") {
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection, playerPoint, computerPoint, winnerDisplay);
    }
});

let papperChoice = document.querySelector(".papper");
papperChoice.addEventListener("click", () =>{
    playerSelection = "papper";
    if (playerSelection != " "){
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection, playerPoint, computerPoint, winnerDisplay);
    }
})

let siccorsChoice = document.querySelector(".siccors");
siccorsChoice.addEventListener("click", () =>{
    playerSelection = "siccors";
    if (playerSelection != " "){
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection, playerPoint, computerPoint, winnerDisplay);
    }
})
