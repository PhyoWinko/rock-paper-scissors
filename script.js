console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;
let newGame = true;

const btns = document.querySelectorAll("button");
console.log(btns);


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if (choice === 1) {
        console.log(`computer choice rock`);
        return "rock";
    }
    else if (choice === 2) {
        console.log(`computer choice paper`);
        return "paper";
    }
    else {
        console.log(`computer choice scissors`);
        return "scissors";
    }
}

// create a node and add to container div to show result
const container = document.querySelector(".container");
function addResultToContainer(text) {
    const result = document.createElement("div");
    result.textContent = text;
    result.classList.add("result");
    container.appendChild(result);
}

function showResultToContainer(text) {
    const result = document.createElement("div");
    result.textContent = text;
    container.appendChild(result);
}

// write logic to play a single round
function playRound(computerChoice, humanChoice) {
    console.log("computer Choice is " + computerChoice, " ", "human Choice is " + humanChoice)
    showResultToContainer("computer Choice is " + computerChoice, " ", "human Choice is " + humanChoice)
    if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Draw");
        addResultToContainer(`Draw`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        showResultToContainer(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
        console.log(`Computer Score: ${computerScore}, Your Score : ${humanScore}`)
        addResultToContainer(`Computer Score: ${computerScore}, Your Score : ${humanScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        showResultToContainer(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
        console.log(`Computer Score: ${computerScore}, Your Score : ${humanScore}`);
        addResultToContainer(`Computer Score: ${computerScore}, Your Score : ${humanScore}`)
    }
}

// announce winner and reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    newGame = true;
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function gameOver() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    const content = document.createElement("div");
    content.textContent = "thanks for playing ..."
    container.appendChild(content);
    askNewGame();
}

// ask to start new game
function askNewGame() {
    const content = document.createElement("div");
    content.textContent = "start new game ... ?"
    const button1 = document.createElement("button");
    button1.textContent = "yes";
    const button2 = document.createElement("button");
    button2.textContent = "no";
    content.appendChild(button1);
    content.appendChild(button2);
    container.appendChild(content);
    button1.addEventListener('click', () => {
        resetGame();
    })
    button2.addEventListener('click', () => {
        gameOver();
    })
}

function announceWinner() {
    if (humanScore === 5 && humanScore > computerScore) {
        showResultToContainer(`Human win ... !!! Human point ${humanScore} and Computer point ${computerScore}`);
        newGame = false;
        askNewGame();

    }
    if (computerScore === 5 && computerScore > humanScore) {
        showResultToContainer(`Computer win ... !!! Computer point ${computerScore} and Human point ${humanScore}`);
        newGame = false;
        askNewGame();
    }
}


// get human choice, get random ComputerChoice and play a round
let humanChoice;
let computerChoice;
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (newGame) {
            humanChoice = e.target.value;
            computerChoice = getComputerChoice();
            console.log(`here human choice ${humanChoice}`);
            playRound(computerChoice, humanChoice);
            announceWinner();
        }
    })
})



