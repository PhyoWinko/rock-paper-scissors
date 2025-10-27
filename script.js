console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What's your gesture?: ");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

// write logic to play a single round
function playRound(computerChoice, humanChoice) {
    console.log("computer Choice is " + computerChoice, " ", "human Choice is " + humanChoice)
    if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Draw");
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`Computer Score: ${computerScore}, Your Score : ${humanScore}`)
    }
    else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`Computer Score: ${computerScore}, Your Score : ${humanScore}`)
    }
}

function declareWinner(computerScore, humanScore) {
    if (computerScore > humanScore) {
        return "Computer Win! What a loser...";
    }
    else if (humanScore > computerScore) {
        return "You win! I apologies, sir...";
    }
    else {
        return "It's tie! wow, you did great...";
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
    console.log(declareWinner(computerScore, humanScore));
}

playGame();