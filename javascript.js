function getComputerChoice(){
    const x = Math.random();
    if(x <= 0.33) return "rock";
    else if(x <= 0.66) return "paper";
    else return "scissors";
}
function getHumanChoice(){
    const choice = prompt("Enter your choice ");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else if(humanChoice == computerChoice){
        console.log("It's a draw!");
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

// for(let i = 1; i <= 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection.toLowerCase(),computerSelection.toLowerCase());

// }
// console.log(`Human Score = ${humanScore}, Computer Score = ${computerScore}`);

