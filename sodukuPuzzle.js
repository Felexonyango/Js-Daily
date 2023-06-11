

// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
var solveSudoku = function(board) {
    const N = 9; // Size of the Sudoku board
    const EMPTY_CELL = "."; // Representation of empty cells
  
    // Helper function to check if a number is valid in a given row, column, and box
    function isValid(num, row, col) {
      // Check row
      for (let i = 0; i < N; i++) {
        if (board[row][i] === num) {
          return false;
        }
      }
  
      // Check column
      for (let i = 0; i < N; i++) {
        if (board[i][col] === num) {
          return false;
        }
      }
  
      // Check box
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
          if (board[i][j] === num) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    // Recursive function to solve the Sudoku puzzle
    function solve() {
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          if (board[row][col] === EMPTY_CELL) {
            // Try all possible numbers from 1 to 9
            for (let num = 1; num <= 9; num++) {
              if (isValid(num.toString(), row, col)) {
                board[row][col] = num.toString(); // Place the number on the board
  
                // Recursively solve for the next cell
                if (solve()) {
                  return true; // Solution found
                }
  
                // Backtrack: undo the current cell and try the next number
                board[row][col] = EMPTY_CELL;
              }
            }
  
            // No valid number found, backtrack to previous cell
            return false;
          }
        }
      }
  
      // Reached the end of the board, solution found
      return true;
    }
  
    // Start solving from the top-left cell (0, 0)
    solve();
    return board;
  };
  
  

    
