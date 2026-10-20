let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {

    let options = ["Rock", "Paper", "Scissors"];

    let randomNumber = Math.floor(Math.random() * 3);

    let computerChoice = options[randomNumber];

    document.getElementById("choices").innerText =
        "You: " + userChoice +
        " | Computer: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    }
    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win! 🎉";
        userScore++;
    }
    else {
        result = "Computer Wins! 😢";
        computerScore++;
    }

    document.getElementById("message").innerText = result;

    document.getElementById("userScore").innerText =
        userScore;

    document.getElementById("computerScore").innerText =
        computerScore;
}

function restartGame() {

    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;

    document.getElementById("choices").innerText =
        "Make your choice!";

    document.getElementById("message").innerText =
        "Let's Play!";
}