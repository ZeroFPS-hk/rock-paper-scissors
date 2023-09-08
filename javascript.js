const ROCK = "rock", PAPER = "paper", SCISSORS = "scissors";

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const message = document.querySelector('#message');

const imageRock = document.querySelector('#rock');
const imagePaper = document.querySelector('#paper');
const imageScissors = document.querySelector('#scissors');

let playerScore=0, computerScore=0, gameOver=false, audio;



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
    updateScore();
    checkGameOver();
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
        playWinSound(playerChoice);
        return `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`;
    }

    computerScore++;
    playLoseSound();
    return `You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`;
}

function updateScore(){
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function checkGameOver(){
    if(playerScore>=5){
        gameOver = true;
        audio = document.querySelector('audio#gameWin');
        audio.play();
        disableCursorChange();
        message.textContent = "You give the computer a much needed beating and make them know their place.\nYou win! Refresh the page to play again."
    }
    if(computerScore>=5){
        gameOver = true;
        audio = document.querySelector('audio#gameLose');
        audio.play();
        disableCursorChange();
        message.textContent ="The AI kicks your ass at rock paper scissors and takes over the world.\nYou lose! Refresh the page to play again."
    }
}

function playWinSound(playerChoice){
    playerChoice===ROCK? audio=document.querySelector('audio#winRock'):
    playerChoice===PAPER? audio=document.querySelector('audio#winPaper'):
    audio=document.querySelector('audio#winScissors');
    if(!audio) return;
    audio.play();
}

function playLoseSound(){
    let i = Math.floor(Math.random()*3);
    i===0? audio=document.querySelector('audio#lose1'):
    i===1? audio=document.querySelector('audio#lose2'):
    audio=document.querySelector('audio#lose3');
    if(!audio) return;
    audio.play();
}

function disableCursorChange(){
    const images = Array.from(document.querySelectorAll('img'));
    for (const image of images){
        image.style.cursor = "default";
    }
}