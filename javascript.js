let playerWinCount = 0, computerWinCount = 0 , roundNumber=1;

let game = (playerSelection) => {
    /*let i;
    //play till one person reaches score of 5
    for (i=1; ; i++) {
        if (playerWinCount==5 || computerWinCount==5){
            break;
        }
        playRound(playerSelection, i);
    }*/

    if (playerWinCount==5){
        console.log("Final Score - Player: %i. Computer: %i. Player wins!", playerWinCount, computerWinCount);
    }
    else if (computerWinCount==5) {
        console.log("Final Score - Player: %i. Computer: %i. Computer wins!", playerWinCount, computerWinCount);       
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

