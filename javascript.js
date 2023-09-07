const ROCK = "rock", PAPER = "paper", SCISSORS = "scissors";

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const message = document.querySelector('#message');

const imageRock = document.querySelector('#rock');
const imagePaper = document.querySelector('#paper');
const imageScissors = document.querySelector('#scissors');

let playerScore=0, computerScore=0, gameOver=false;



imageRock.addEventListener('click', ()=>playRound(ROCK));
imagePaper.addEventListener('click', ()=>playRound(PAPER));
imageScissors.addEventListener('click', ()=>playRound(SCISSORS));

function getComputerChoice(){
    let i = Math.floor(Math.random()*3);
    return i === 0? ROCK:
    i === 1? PAPER:
    SCISSORS;
}

function playRound(playerChoice){
    if(gameOver){return;}
    let computerChoice = getComputerChoice();
    message.textContent = compareChoices(playerChoice, computerChoice);
}

function compareChoices(playerChoice, computerChoice){
    if(playerChoice!==ROCK && playerChoice!==PAPER && playerChoice!==SCISSORS){
        computerScore++;
        return "Read the goddamn instructions.";
    }

    if(playerChoice===computerChoice){
        return `You chose ${playerChoice}, computer chose ${computerChoice}. It's a tie!`;
    }

    if((playerChoice===ROCK && computerChoice===SCISSORS) ||
    (playerChoice===PAPER && computerChoice===ROCK) ||
    (playerChoice===SCISSORS && computerChoice===PAPER)){
        playerScore++;
        return `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`;
    }

    computerScore++;
    return `You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`;
}

/*
function playGame(){
    playerScore=0, computerScore=0;
    for (round=1; round<=5; round++){
        playRound();
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    let finalScore = `Final Score: ${playerScore}:${computerScore}. `;
    playerScore>computerScore? console.log(finalScore + "You give the computer a much needed beating and let them know their place."):
    computerScore>playerScore? console.log(finalScore + "The AI kicks your ass at rock paper scissors and takes over the world."):
    console.log(finalScore + "You and your computer stare furiously at each other over the tie.");
}
*/