console.log("Hello, World!");

function computerPlay(){
    let computerSelection = getRandomIntBetweenZeroAndTwo();
    console.log(computerSelection)
    switch(computerSelection){
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

console.log(computerPlay())