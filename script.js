// CONSTANTS
const NUM_SQUARES_PER_SIDE_DEFAULT = 16;
const GAME_BOARD_LENGTH = 640;

// Getting game board div
const gameBoardDiv = document.querySelector(".game-board");
const gameAreaDiv = document.querySelector(".game-board .game-area");

let currentColor = "black";
let currentSquaresPerSide = NUM_SQUARES_PER_SIDE_DEFAULT;

function createBoard(squaresPerSide, color) {
    // Erase current board
    gameAreaDiv.innerHTML = "";

    const buttonSize = GAME_BOARD_LENGTH / squaresPerSide;

    // Setting up grid
    for (let i = 0; i < squaresPerSide; i++) {
        // Create a div to hold next row
        const rowDiv = document.createElement("div");

        for (let j = 0; j < squaresPerSide; j++) {
            const button = document.createElement("button");
            button.style.width = buttonSize + "px";
            button.style.height = buttonSize + "px";
            button.style.backgroundColor = "#FAF9F6";

            button.addEventListener("mouseover", () => {
                if (color === "random") {
                    button.style.backgroundColor = getRandomColorHex();
                } else {
                    button.style.backgroundColor = color;
                }
            })
            rowDiv.appendChild(button);
        }
        gameAreaDiv.appendChild(rowDiv);
    }
}

function getRandomColorHex() {
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    let color = [];

    color.push("#");
    for (let i = 0; i < 6; i++) {
        color.push(hex[Math.floor(Math.random() * 16)]);
    }

    return color.join("");
}

createBoard(currentSquaresPerSide, currentColor);

// Setting up reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    let buttons = gameAreaDiv.querySelectorAll("button");
    buttons.forEach((button) => {
        button.style.backgroundColor = "#FAF9F6";
    });
});

// Setting up custom grid size button
const gridSizeButton = document.querySelector("#set-grid-size");
gridSizeButton.addEventListener("click", () => {
    let userInput = +prompt("How many squares per side? (2-100)");
    if (userInput < 2 || userInput > 100) {
        alert("You have entered an invalid number");
        return;
    }

    currentSquaresPerSide = userInput;
    createBoard(currentSquaresPerSide, currentColor);
});

// Setting up random color button
const randomColorButton = document.querySelector("#random");
randomColorButton.addEventListener("click", () => {
    currentColor = "random";
    createBoard(currentSquaresPerSide, currentColor);
});

// Setting up black color button
const blackColorButton = document.querySelector("#black");
blackColorButton.addEventListener("click", () => {
    currentColor = "black";
    createBoard(currentSquaresPerSide, currentColor);
});