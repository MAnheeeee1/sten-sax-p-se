function getComupterchoice(){
    const game = ["rock" , "siccors" , "papper"];
    let random = Math.floor(Math.random() * 3);
    return game[random];
}

let playerPoint = 0;
let computerPoint = 0;

function playRound (playerSelection, computerSelection, playerPoint, computerPoint){
    if (playerSelection == computerSelection){
        return "Its a draw"
    }
    else if (playerSelection == "rock" && computerSelection == "papper"){
        computerPoint++;
        return "You Lose! Rock loses to Papper"
    }
    else if (playerSelection == "rock" && computerSelection == "siccors"){
        playerPoint++;
        return "You Win! Rock wins over Siccors "
    }
    else if (playerSelection == "siccors" && computerSelection == "rock"){
        computerPoint++;
        return "You Lose! Siccors loses to Rock"
    }
    else if (playerSelection == "siccors" && computerSelection == "papper"){
        playerPoint++;
        return "You Win! Siccors wins over Papper "
    }
    else if (playerSelection == "papper" && computerSelection == "siccors"){
        computerPoint++;
        return "You Lose! Papper loses to Siccors"
    }
    else if (playerSelection == "papper" && computerSelection == "rock"){
        playerPoint++;
        return "You Win! Papper wins over Rock "
    }
    
}

for(let i = 0; i < 5;i++){
    var playerSelection = prompt("What do you chose (Rock, Papper, Siccors)").toLowerCase()
    let computerSelection = getComupterchoice();
    console.log(playRound(playerSelection, computerSelection))
}


if( computerPoint > playerPoint){
    console.log("The computure has won with:" + computerPoint - playerPoint + " Point")
}
else if (computerPoint < playerPoint){
    console.log("You has won with:" + playerPoint - computerPoint + " Point")
}
else{
    console.log("Its a draw")
}
