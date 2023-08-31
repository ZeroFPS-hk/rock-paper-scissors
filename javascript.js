const ROCK = "rock", PAPER = "paper", SCISSORS = "scissors";
let playerChoice, computerChoice;

function getComputerChoice(){
    let i = Math.floor(Math.random()*3);
    i === 0? computerChoice = ROCK:
    i === 1? computerChoice = PAPER:
    computerChoice = SCISSORS;
}

function playRound(){

}

function compareChoices(playerChoice, computerChoice){

}

function playGame(){

}