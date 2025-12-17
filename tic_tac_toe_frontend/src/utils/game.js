 // PUBLIC_INTERFACE
export function calculateWinner(squares) {
  /**
   * Determine winner for a 3x3 tic tac toe grid.
   * Returns 'X', 'O', or null if no winner yet.
   */
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diags
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export function isDraw(squares, winner = null) {
  /**
   * Determine draw: board full and no winner.
   * Returns true if draw, false otherwise.
   */
  if (winner) return false;
  return squares.every((s) => s !== null);
}
