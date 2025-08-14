let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".icon");
let scores = document.querySelector(".Scores");
let msg = document.querySelector("#msg");

const checkWinner = (userWin) => {
    if (userWin) {
        // console.log("You Win");
        msg.innerText = "Congrats! Your Winner";
        msg.style.backgroundColor = "green";
    } else {
        // console.log("Computer Win");
        msg.innerText = "Computer Winner";
        msg.style.backgroundColor = "red";
    }
}
const sameChoice = () => {
    msg.innerText = "Both Has Same Choices";
    msg.style.backgroundColor = "#181836"
}
const playGame = (userChoice) => {
    let Name = ["ROCK", "PAPER", "SCISSOR"];
    let randNo = Math.floor(Math.random() * 3)

    let CompChoice = Name[randNo];

   alert(`Your choice is : ${userChoice} `);
   alert(`computer choice is : ${CompChoice} `);
   

    const userWin = true;

    if (CompChoice === userChoice) {
        sameChoice();
    } else if (CompChoice === "rock") {
        userWin = userChoice === "scissor" ? false : true;

    } else if (CompChoice === "paper") {
        userWin = userChoice === "rock" ? false : true;

    } else {
        userWin = userChoice === "paper" ? false : true;
    }
    checkWinner(userWin);
}





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})