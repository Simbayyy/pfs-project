// Generate computer play
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';        
    } 
}

// Find the winner
function findWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
     (playerSelection == 'paper' && computerSelection == 'rock') || 
     (playerSelection == 'scissors' && computerSelection == 'paper') ){
         return `win`;
    
        } else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'scissors' && computerSelection == 'rock') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') ){
        return `lose`;
    }
}

// Ask for a sign
function askForSign() {
    sign = '';
    sign = prompt("Rock, paper, scissors ?").toLowerCase();
    while ((sign != 'rock') && (sign != 'paper') && (sign != 'scissors')){
        sign = prompt("Wrong input, please choose rock, paper or scissor").toLowerCase();
    }
    return sign;
}

// Play the whole game
function game() {
    totalRounds = 5;
    playerScore = 0;
    computerScore = 0;
    playerInput = '';
    computerInput = '';

    while ((playerScore <= Math.floor(totalRounds/2)) &&  (computerScore <= Math.floor(totalRounds/2)))  {
        playerInput = askForSign();
        computerInput = computerPlay();
        winner = findWinner(playerInput,computerInput);
        switch (winner) {
            case 'tie':
                console.log(`It's a tie, total score is ${playerScore}:${computerScore}`);
                break;
            case 'win':
                playerScore +=1;
                console.log(`You win, ${playerInput} beats ${computerInput}, total score is ${playerScore}:${computerScore}`);
                break;
            case 'lose':
                computerScore +=1;
                console.log(`You lose, ${playerInput} is beaten by ${computerInput}, total score is ${playerScore}:${computerScore}`);
                break;
        }
    }
    if (playerScore> computerScore) {
        console.log('Yay, you win!');
    } else {
        console.log("Noooo, that's a loss...");    
    }
}