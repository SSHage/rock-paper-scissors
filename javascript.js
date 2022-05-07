// create DOM for announcement of results

const container = document.querySelector('body');

const winnerAnnounce = document.createElement('div')
winnerAnnounce.classList.add("announcement");

const resultsAnnounce = document.createElement('div');
resultsAnnounce.classList.add("announcement", "resultsannounce");

const scoreAnnounce = document.createElement('div');
scoreAnnounce.classList.add("announcement");

// create DOM for restart button
const restartArea = document.createElement('div');
restartArea.classList.add("restartarea");
const restartButton = document.createElement('button');

// initialise game

let playerWinCount = 0, computerWinCount = 0 , roundNumber=1;

let game = (playerSelection) => {

    playRound(playerSelection,roundNumber);
    scoreAnnounce.textContent = "Player:" + playerWinCount+ " Computer:" + computerWinCount;
    container.appendChild(scoreAnnounce);
    roundNumber++;

    if (playerWinCount==5){
        resultsAnnounce.remove();
        scoreAnnounce.remove();
        winnerAnnounce.textContent="Player is Victorious!";
        container.appendChild(winnerAnnounce);
        scoreAnnounce.textContent = "Player:" + playerWinCount+ " Computer:" + computerWinCount;
        container.appendChild(scoreAnnounce);
        clickDisable();
        restartPopup();
    }
    else if (computerWinCount==5) {
        resultsAnnounce.remove();
        scoreAnnounce.remove();
        winnerAnnounce.textContent= "Computer is Victorious!";
        container.appendChild(winnerAnnounce);    
        scoreAnnounce.textContent = "Player:" + playerWinCount+ " Computer:" + computerWinCount;
        container.appendChild(scoreAnnounce);
        clickDisable();
        restartPopup();
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

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (computerSelection=="Rock"){
        if (playerSelection=="Paper"){
            roundPlayerWin();
            console.log("Round %i - Player wins!", roundNumber);
        }
        else if (playerSelection=="Scissors"){
            roundCompWin();
            console.log("Round %i - Computer wins!", roundNumber);
        }
        else {
            roundDraw();
            console.log("Round %i - It's a draw!", roundNumber);
        }
    } 

    else if (computerSelection=="Paper"){
        if (playerSelection=="Scissors"){
            roundPlayerWin();
            console.log("Round %i - Player wins!", roundNumber);
        }
        else if (playerSelection=="Rock"){
            roundCompWin();
            console.log("Round %i - Computer wins!", roundNumber);
        }
        else {
            roundDraw();
            console.log("Round %i - It's a draw!", roundNumber);
        }
    }

    else if (computerSelection=="Scissors"){
        if (playerSelection=="Rock"){
            roundPlayerWin();
            console.log("Round %i - Player wins!", roundNumber);
        }
        else if (playerSelection=="Paper"){
            roundCompWin();
            console.log("Round %i - Computer wins!", roundNumber);
        }
        else {
            roundDraw();
            console.log("Round %i - It's a draw!", roundNumber);
        }
    }
}

// function to disable and reenable click;
let clickDisable = () =>{
    document.querySelectorAll('.selection').forEach(elem => {
        elem.disabled=true;
    });
}

let clickEnable = () =>{
    document.querySelectorAll('.selection').forEach(elem => {
        elem.disabled=false;
    });
}




// function for creating restart button
let restartPopup = () => {
    restartArea.appendChild(restartButton);
    restartButton.classList.add("restart");
    restartButton.textContent="Play again";
    container.appendChild(restartArea);
}

// dialogue functions for round results

let roundPlayerWin = () => {
    ++playerWinCount;
    resultsAnnounce.textContent = "Round " + roundNumber+ "- Player wins!";
    container.appendChild(resultsAnnounce);
}

let roundCompWin = () => {
    ++computerWinCount;
    resultsAnnounce.textContent = "Round " + roundNumber+ "- Computer wins!";
    container.appendChild(resultsAnnounce);
}

let roundDraw = () => {
    resultsAnnounce.textContent = "Round  " + roundNumber+ "- Draw!";
    container.appendChild(resultsAnnounce);
}
// initialise variables
const selections = document.querySelectorAll('.selection');
let playerInput;

// add event listeners to all buttons. get unique ID of selected choice to launch game
for (const selection of selections) {
    selection.addEventListener('click', function(e){
        playerInput = this.getAttribute('id');
        this.classList.add('playing');
        game(playerInput);
    });

    selection.addEventListener('transitionend', function(e){
        this.classList.remove('playing');
    }
    )
  }

  // Add functionality to restart button

restartButton.addEventListener('click', function(e){
    playerWinCount=0; 
    computerWinCount=0;
    roundNumber=1;
    winnerAnnounce.remove();
    resultsAnnounce.remove();
    scoreAnnounce.remove();
    restartButton.remove();
    clickEnable();
})


