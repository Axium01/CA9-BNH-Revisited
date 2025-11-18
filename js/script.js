let userWins = 0;
let computerWins = 0;

function computerRNG() {
    let computerType = "";
    let computerRNG = Math.floor(Math.random() * 3) + 1; // random number between 1 and 3
    if (computerRNG == 1) {
        computerType = "Bear";
    } else if (computerRNG == 2) {
        computerType = "Ninja";
    } else if (computerRNG == 3) {
        computerType = "Hunter";
    } else { // just in case...
        computerType = "Bear"; // default to bear
    }
    return computerType;
}

function gameLogic(userType) {
    let computerType = computerRNG();
    console.log('You picked ' + userType + '!');
    console.log('The computer picked ' + computerType + '!');
    let winner = "";
    if (computerType.toLowerCase() === userType.toLowerCase()) {
        winner = "tie";
    } else if ((computerType.toLowerCase() === 'bear') && (userType.toLowerCase() === 'ninja')) {
        winner = "computer";
    } else if ((computerType.toLowerCase() === 'ninja') && (userType.toLowerCase() === 'bear')) {
        winner = "user";
    } else if ((computerType.toLowerCase() === 'ninja') && (userType.toLowerCase() === 'hunter')) {
        winner = "computer";
    } else if ((computerType.toLowerCase() === 'hunter') && (userType.toLowerCase() === 'ninja')) {
        winner = "user";
    } else if ((computerType.toLowerCase() === 'hunter') && (userType.toLowerCase() === 'bear')) {
        winner = "computer";
    } else if ((computerType.toLowerCase() === 'bear') && (userType.toLowerCase() === 'hunter')) {
        winner = "user";
    } else {
        winner = "tie"; //fallback
    }
    createResults(userType, computerType, winner);
}

function createResults(userType, computerType, winner) { // creates new elements for the results
    // the only way to do this is to create the elements on the fly...
    let container = document.getElementById('results-container');
    let content = ``; // this is what's inside the container, stuff gets added to it depending on the results
    content += `
    <div class="results">
        <h3>You chose ${userType}.</h3>
        <h3>The computer chose ${computerType}.</h3>
        <h3 id="res3">PLACEHOLDER</h3>
    </div>
    <p id="uWins">PLACEHOLDER</p>
    <p id="cWins">PLACEHOLDER</p>
    <hr></hr>
    <button onclick="destroyResults()">Play again?</button>
    <hr></hr>
    `;
    container.innerHTML = content; // create everything first, THEN update it with the stuff below.

    let r3 = document.getElementById('res3');
    let uWinsRes = document.getElementById('uWins');
    let cWinsRes = document.getElementById('cWins');

    switch (winner) {
        case 'tie':
            console.log("It's a tie!");
            r3.innerHTML = (`It's a tie!`);
            break;
        case 'user':
            console.log("You win!");
            userWins++;
            r3.innerHTML = (`You win!`);
            break;
        case 'computer':
            console.log("You lose!");
            computerWins++;
            r3.innerHTML = (`The computer wins!`);
            break;
    }
    uWinsRes.innerHTML = `Your Wins: ${userWins}`;
    cWinsRes.innerHTML = `Computer Wins: ${computerWins}`;
}

function destroyResults() { // destroys elements created by createResults
    let container = document.getElementById('results-container');
    container.innerHTML = ``;
}