let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreparah = document.querySelector("#user-score");
const compScoreparah = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const op = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return op[randIdx];
    //rock,paper,scissors
};

const drawGame = () => {
    msg.innerText = "game was draw ,play agian";
    msg.style.backgroundColor = "#ff#081b3";
};


const showwinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScoreparah.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreparah.innerText = compScore;
        msg.innerText = `you loose!your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice --> modular 
    const compChoice = genComputerChoice();
    console.log("comp choice =", compChoice);


    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            //scissor , paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userwin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            //rock,paper
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }


};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});