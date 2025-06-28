let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const x = Math.random();
    if(x <= 0.33) return "rock";
    else if(x <= 0.66) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice){
    const header = document.querySelector(".header");
    if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        header.textContent = `You won! ${humanChoice} beats ${computerChoice}.`
        humanScore++;
    }
    else if(humanChoice == computerChoice){
        header.textContent = `It's a draw! Computer also chose ${computerChoice}.`;
    }
    else{
        header.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
}


const buttons = document.querySelector("#buttons");
buttons.addEventListener("click",(event) => {

    const result = document.querySelector("#result");
    if(computerScore == 5 && humanScore < 5){
        result.textContent = "You Lose!";
        computerScore = 0;
        humanScore = 0;
    }
    else if(computerScore < 5 && humanScore == 5){
        result.textContent = "You Won!";
        computerScore = 0;
        humanScore = 0;
    }
    else{
        let target = event.target;
        if(target.id == "rock"){
            const humanSelection = "rock";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
        else if(target.id == "paper"){
            const humanSelection = "paper";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
        else{
            const humanSelection = "scissors";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
        const myscore = document.querySelector(".myscore");
        const compScore = document.querySelector(".computerscore");

        myscore.textContent = humanScore;
        compScore.textContent = computerScore;
    }
});
