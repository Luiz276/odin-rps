// simple rock paper scissors game

function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 10) + 1) % 3;
    if (choice == 0){
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function singleRound(p_choice, c_choice) {
    if (p_choice == c_choice) {
        console.log("Draw")
        return "Draw";
    } else if (p_choice == "paper") {
        if (c_choice == "rock"){
            console.log("You win: paper beats rock");
            return "p";
        } else {
            console.log("You lose: scissor beats paper");
            return "c";
        }
    } else if (p_choice == "rock"){
        if (c_choice == "paper"){
            console.log("You lose: paper beats rock");
            return "c";
        } else {
            console.log("You win: rock beats scissor");
            return "p";
        }
    } else {
        if (c_choice == "rock"){
            console.log("You lose: rock beats scissor");
            return "c";
        } else {
            console.log("You win: scissor beats paper");
            return "p";
        }
    }
}

function game() {
    let p_score = 0;
    let c_score = 0;
    for (let i=0; i<5; i++) {
        let p_choice = prompt("Choice: ").toLowerCase();
        let c_choice = getComputerChoice();
        let res = singleRound(p_choice, c_choice);
        if (res == "p") {
            p_score++;
        } else {
            c_score++;
        }
    }
    if (p_score == c_score) {
        return "draw";
    } else if (p_score > c_score) {
        return "You win";
    }
    return "You lose";
}

function updateScore(winner) {
    if (winner=="p") {
        p_wins++;
        p_score.innerHTML = `Your score: ${p_wins}`;
    } else if (winner=="c") {
        c_wins++;
        c_score.innerHTML = `Opponent score: ${c_wins}`;
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const p_score = document.querySelector('#p_score');
const c_score = document.querySelector('#c_score');

let p_wins = 0;
let c_wins = 0;
p_score.innerHTML = `Your score: ${p_wins}`;
c_score.innerHTML = `Opponent score: ${c_wins}`;

rock.addEventListener('click', () => {
    updateScore(singleRound('rock', getComputerChoice()));
});

paper.addEventListener('click', () => {
    updateScore(singleRound('paper', getComputerChoice()));
});

scissor.addEventListener('click', () => {
    updateScore(singleRound('scissor', getComputerChoice()));
});
