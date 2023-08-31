const ROCK = "rock", PAPER = "paper", SCISSORS = "scissors";

function getComputerChoice(){
    let i = Math.floor(Math.random()*3);
    return i === 0? ROCK:
    i === 1? PAPER:
    SCISSORS;
}

function playRound(){
    let playerChoice = prompt(`Enter "rock", "paper" or "scissors"!`).toLowerCase();
    let computerChoice = getComputerChoice();
    compareChoices(playerChoice, computerChoice);
}

function compareChoices(playerChoice, computerChoice){
    if(playerChoice!==ROCK && playerChoice!==PAPER && playerChoice!==SCISSORS){
        console.log("Read the goddamn instructions.");
        return -1;
    }

    if(playerChoice===computerChoice){
        console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. It's a tie!`);
        return 0;
    }

    if((playerChoice===ROCK && computerChoice===SCISSORS) ||
    (playerChoice===PAPER && computerChoice===ROCK) ||
    (playerChoice===SCISSORS && computerChoice===PAPER)){
        console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. You win!`);
        return 1;
    }

    console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`);
    return -1;
}

function playGame(){
    let round=0, playerScore=0, computerScore=0;
    
}