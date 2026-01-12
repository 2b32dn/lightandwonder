/*
You must use Javascript for this test.

· Create a 3x3 Grid inside a Canvas2D.
· 1 Players plays against himself.
· The game has 2 symbols, X and O.
· All squares start blank.
· The goal is to make a horizontal, vertical or diagonal line of the same symbol.
· The player clicks on an empty square to make a move. X goes first, followed by O.
· Once a full line is made, do something to indicate the win (up to you).
· In case of a tie, restart the game.
· Find a creative way to celebrate the winning player (or draw).

*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set background color
ctx.fillStyle = "white";

// Grid settings
const gridColor = '#000000';
const lineWidth = 2;
const SIZE = 750;
const CELL = SIZE / 3

// Set board state as an empty 1D array
let board = Array(9).fill(null);
// Define initial player and track game state
let currentPlayer = 'X';
let gameActive = true;
let winner = null;

// Draw grid function
function drawGrid() {
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = lineWidth;

  for (let i = 1; i < 3; i++) {
    // Vertical line
    ctx.beginPath();
    ctx.moveTo(i * CELL, 0);
    ctx.lineTo(i * CELL, SIZE);
    ctx.stroke();

    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(0, i * CELL);
    ctx.lineTo(SIZE, i * CELL);
    ctx.stroke();
  }
}

function drawSymbol(symbol, row, col) {
  const x = col * CELL + CELL / 2;
  const y = row * CELL + CELL / 2;
  ctx.font = '100px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'black';
  ctx.fillText(symbol, x, y);
}

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


canvas.addEventListener('click', (event) => {
  if (!gameActive) return;

  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const col = Math.floor(x / CELL);
  const row = Math.floor(y / CELL);
  const index = row * 3 + col;

  if (board[index] === null) {
    board[index] = currentPlayer;
    drawSymbol(currentPlayer, row, col);

    // Check for win or tie
    if (checkWin()) {
      gameActive = false;
      setTimeout(() => {
        alert(`Player ${winner} wins!`);
        resetGame();
      }, 100);
    } else if (board.every(cell => cell !== null)) {
      gameActive = false;
      setTimeout(() => {
        alert("It's a tie!");
        resetGame();
      }, 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
});

function checkWin() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      return true;
    }
  }
  return false;
}

drawGrid();