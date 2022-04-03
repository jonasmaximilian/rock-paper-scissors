const NUMBER_OF_ROUNDS = 5
let currentPlayerScore = 0;
let currentComputerScore = 0;

function computerPlay() {
    let randomSelection = getRandomIntBetweenZeroAndTwo();
    switch (randomSelection) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        default:
            return 'Scissors'
    }
}

function getRandomIntBetweenZeroAndTwo() {
    return Math.floor(Math.random() * 3);
}



function playOneRound(playerSelection, computerSelection) {


    let result = "";

    if (playerSelection == computerSelection) {
        result += "It's a Tie! " + playerSelection + " against " + computerSelection
            + "<br><br> Player score: " + currentPlayerScore + "<br> Computer score " + currentComputerScore;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Scissors') {
        currentComputerScore += 1;
        result += "You Lose! " + computerSelection + " beats " + playerSelection
            + "<br><br> Player score: " + currentPlayerScore + "<br> Computer score " + currentComputerScore;

        if (currentComputerScore == 5) {
            result += "<br><br>The Computer won the game! Reload to play again!";
            btns.forEach(button => {
                button.disabled = true;
            });
        }
    }
    else {
        currentPlayerScore += 1;
        result += "You Win! " + playerSelection + " beats " + computerSelection
            + "<br><br> Player score: " + currentPlayerScore + "<br> Computer score " + currentComputerScore;

        if (currentPlayerScore == 5) {
            result += "<br><br>You won the game! Reload to play again!";
            btns.forEach(button => {
                button.disabled = true;
            });
        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}

let playerSelection;

const btns = document.querySelectorAll('button');

btns.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.matches('#rock')) {
            playerSelection = 'Rock';
            computerSelection = computerPlay();
            playOneRound(playerSelection, computerSelection);
        }
        else if (e.target.matches('#paper')) {
            playerSelection = 'Paper';
            computerSelection = computerPlay();
            playOneRound(playerSelection, computerSelection);
        }
        else if (e.target.matches('#scissors')) {
            playerSelection = 'Scissors';
            computerSelection = computerPlay();
            playOneRound(playerSelection, computerSelection);
        }
    });
});

