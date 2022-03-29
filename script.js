console.log("Hello, World!");

function computerPlay(){
    let randomSelection = getRandomIntBetweenZeroAndTwo();
    console.log(randomSelection)
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

console.log(computerPlay())
console.log(normalizeString("hELLO"))
console.log(playOneRound('RoCk', 'Scissors'))
console.log(playOneRound('PAPER', 'Paper'))
console.log(playOneRound('Paper', 'Scissors'))