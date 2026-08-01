let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compChoiceMsg = document.querySelector("#comp-choice");
const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "OOPS! It was a draw.";
    msg.style.backgroundColor = "#665104"
}

const showWinner = (userWin) => {
    if(userWin) {
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green"
        userScoreMsg.innerText = ++userScore;
    }else {
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        compScoreMsg.innerText = ++computerScore;
    }
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    compChoiceMsg.innerText = "Computer chooses " + computerChoice.toUpperCase();

    if(userChoice === computerChoice) {
        // Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            // rock lose with paper and beats scissors
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            // paper beats rock and lose with scissors
            userWin = computerChoice === "rock" ? true : false;
        }else { //scissors
            // scissors lose with rock and beats paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});