const NUMBER_OF_ROUNDS = 5

function computerPlay(){
    let randomSelection = getRandomIntBetweenZeroAndTwo();
    switch(randomSelection){
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        default:
            return 'Scissors'
    }
}

function getRandomIntBetweenZeroAndTwo(){
    return Math.floor(Math.random() * 3);
}

function normalizeString(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
}

function playOneRound(playerSelection, computerSelection){
    playerSelection = normalizeString(playerSelection)
    if(playerSelection == computerSelection){
        return "It's a Tie! " + playerSelection + " against " + computerSelection
    }
    else if(playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
}

function showCurrentScore(currentPlayerScore, currentComputerScore){
    console.log(currentPlayerScore + " : " + currentComputerScore)
}

function game(){
    let currentPlayerScore = 0
    let currentComputerScore = 0
    for(let i = 0; i < NUMBER_OF_ROUNDS; i++){
        //ask for user input
        let playerSelection = window.prompt("Choose Rock, Paper, or Scissors")
        let computerSelection = computerPlay()
        let result = playOneRound(playerSelection, computerSelection)
        console.log(result)
        if(result.charAt(0) == 'I'){ //Result was a tie
            currentComputerScore += 1
            currentPlayerScore += 1
            showCurrentScore(currentPlayerScore, currentComputerScore)
        }
        else if(result.charAt(4) == 'W'){
            currentPlayerScore += 1
            showCurrentScore(currentPlayerScore, currentComputerScore)
        }
        else{
            currentComputerScore += 1
            showCurrentScore(currentPlayerScore, currentComputerScore)
        }
    }
}

game()