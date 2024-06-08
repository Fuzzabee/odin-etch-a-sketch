// CONSTANTS
const NUM_SQUARES_PER_SIDE_DEFAULT = 16;
const GAME_BOARD_LENGTH = 640;

// Getting game board div
const gameBoardDiv = document.querySelector(".game-board");
const gameAreaDiv = document.querySelector(".game-board .game-area");

function createBoard(squaresPerSide) {
    // Erase current board
    gameAreaDiv.innerHTML = "";

    const buttonSize = Math.floor(GAME_BOARD_LENGTH / squaresPerSide);

    // Setting game board size
    gameBoardDiv.style.width = buttonSize * squaresPerSide + "px";
    gameBoardDiv.style.height = buttonSize * squaresPerSide + "px";
    gameAreaDiv.style.width = buttonSize * squaresPerSide + "px";
    gameAreaDiv.style.height = buttonSize * squaresPerSide + "px";

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
                button.style.backgroundColor = "black";
            })

            rowDiv.appendChild(button);
        }

        gameAreaDiv.appendChild(rowDiv);
    }
}

createBoard(NUM_SQUARES_PER_SIDE_DEFAULT);

// Setting up reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    let buttons = gameAreaDiv.querySelectorAll("button");
    console.log(buttons.length);
    buttons.forEach((button) => {
        button.style.backgroundColor = "#FAF9F6";
    });
});

// Setting up custom grid size
const gridSizeButton = document.querySelector("#set-grid-size");
gridSizeButton.addEventListener("click", () => {
    let userInput = +prompt("How many squares per side? (2-100)");
    if (userInput < 2 || userInput > 100) {
        alert("You have entered an invalid number");
        return;
    }

    createBoard(userInput);    
});