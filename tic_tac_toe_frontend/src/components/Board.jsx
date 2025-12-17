import React from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board component responsible for rendering the 3x3 grid of squares.
 */
function Board({ squares, onSquareClick }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          onClick={() => onSquareClick(idx)}
          index={idx}
        />
      ))}
    </div>
  );
}

export default Board;
