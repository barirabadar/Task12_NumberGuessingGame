const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const attemptCount = document.getElementById("attempt-count");
const playAgainButton = document.getElementById("play-again");
const checkButton = document.getElementById("check-button");
let secretNumber;
let attempts;
let gameOver;
function startGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 0;
    gameOver = false;
    attemptCount.textContent = attempts;
    guessInput.value = "";
    guessInput.disabled = false;
    checkButton.disabled = false;
    message.textContent = "Good luck! Make your first guess.";
    message.className = "message";
    guessInput.focus();
}
guessForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (gameOver) return;
    const guess = Number(guessInput.value);
    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
        message.textContent =
        "Please enter a whole number between 1 and 20.";
        message.className = "message error";
        return;
    }
    attempts++;
    attemptCount.textContent = attempts;
    if (guess > secretNumber) {
        message.textContent = "Too high! Try a smaller number.";
        message.className = "message";
    }
    else if (guess < secretNumber) {
        message.textContent = "Too low! Try a bigger number.";
        message.className = "message";
    }
    else {
        message.textContent =
            `Correct! You Win! The number was ${secretNumber}.`;
        message.className = "message success";
        gameOver = true;
        guessInput.disabled = true;
        checkButton.disabled = true;
    }
    guessInput.select();
});
playAgainButton.addEventListener("click", startGame);
startGame();
