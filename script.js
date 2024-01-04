// Initialize scores for the user and computer
let userScore = 0;
let compScore = 0;

// Get all elements with the class "choice" (user's options)
const choices = document.querySelectorAll(".choice");

// Get the message, user score, and computer score elements
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

// Function to randomly select the computer's choice (rock, paper, or scissors)
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

// Function to handle a draw in the game
const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Function to display the winner and update scores
const showWinner = (userWins) => {
  if (userWins) {
    console.log("You win");
    msg.innerText = "You win";
    msg.style.backgroundColor = "green";
    userScore++; // Increment user score
  } else {
    console.log("You lose");
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
    compScore++; // Increment computer score
  }

  updateScores(); // Update the displayed scores
};

// Function to update the displayed user and computer scores
const updateScores = () => {
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
};

// Function to play a round of the game based on the user's choice
const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  const compChoice = getComputerChoice();
  console.log("Comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame(); // Handle a draw
  } else {
    let userWins = true;
    if (userChoice === "rock") {
      userWins = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWins = compChoice === "scissors" ? false : true;
    } else {
      userWins = compChoice === "rock" ? false : true;
    }

    showWinner(userWins); // Display the winner and update scores
  }
};

// Add a click event listener to each choice button
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // Play the game when the user clicks a choice
  });
});
