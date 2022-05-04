// create DOM for announcement of results

const container = document.querySelector('body');

const resultsAnnounce = document.createElement('div')
resultsAnnounce.classList.add("announcement");

// create DOM for restart button
const restartContainer = document.querySelector('.restartcontainer');
const restartButton = document.createElement('button');
restartButton.classList.add("restart");
restartButton.textContent="Play again";

// initialise game

let playerWinCount = 0, computerWinCount = 0 , roundNumber=1;

let game = (playerSelection) => {

    if (playerWinCount==5){
        resultsAnnounce.textContent="Player wins!";
        let finalScore = "Rounds won by Player:" + playerWinCount+ " Rounds won by Computer:" + computerWinCount;
        console.log(finalScore);
        container.appendChild(resultsAnnounce);
        container.appendChild(restartButton);
    }
    else if (computerWinCount==5) {
        resultsAnnounce.textContent= "Computer wins!";
        let finalScore = "Rounds won by Player:" + playerWinCount+ " Rounds won by Computer:" + computerWinCount;
        console.log(finalScore);
        container.appendChild(resultsAnnounce);    
        container.appendChild(restartButton);         
    }

    else{
        playRound(playerSelection,roundNumber);
        roundNumber++;
    }
}

let playRound = (playerSelection, roundNumber) => {

    // generate number from 1-3 to randomise Rock/Paper/Scissors //
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerSelection;  

    // if number is 1, generate Rock, if number is 2, generate Paper, if number is 3, generate Scissors //
    computerSelection = randomNumber == 1 ? 
    "Rock" : randomNumber ==2 ? 
    "Paper" : "Scissors";

    // get player input //
    //playerSelection = prompt("Enter your selection. (Rock/Paper/Scissors)");
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (computerSelection=="Rock"){
        if (playerSelection=="Paper"){
            playerWinCount++;
            console.log("Round %i - You win! %s beats %s.", roundNumber, playerSelection, computerSelection);
        }
        else if (playerSelection=="Scissors"){
            computerWinCount++;
            console.log("Round %i - You lose! %s loses to %s.", roundNumber, playerSelection, computerSelection);
        }
        else {
            console.log("Round %i - It's a draw!", roundNumber);
        }
    } 

    else if (computerSelection=="Paper"){
        if (playerSelection=="Scissors"){
            playerWinCount++;
            console.log("Round %i - You win! %s beats %s.", roundNumber, playerSelection, computerSelection);
        }
        else if (playerSelection=="Rock"){
            computerWinCount++;
            console.log("Round %i - You lose! %s loses to %s.", roundNumber, playerSelection, computerSelection);
        }
        else {
            console.log("Round %i - It's a draw!", roundNumber);
        }
    }

    else if (computerSelection=="Scissors"){
        if (playerSelection=="Rock"){
            playerWinCount++;
            console.log("Round %i - You win! %s beats %s.", roundNumber, playerSelection, computerSelection);
        }
        else if (playerSelection=="Paper"){
            computerWinCount++;
            console.log("Round %i - You lose! %s loses to %s.", roundNumber, playerSelection, computerSelection);
        }
        else {
            console.log("Round %i - It's a draw!", roundNumber);
        }
    }
}

// initialise variables
const selections = document.querySelectorAll('.selection');
let playerInput;

// add event listeners to all buttons. get unique ID of selected choice to launch game
for (const selection of selections) {
    selection.addEventListener('click', function(e){
        playerInput = this.getAttribute('id');
        game(playerInput);
    });
  }



;



