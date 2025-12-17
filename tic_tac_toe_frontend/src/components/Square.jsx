import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square component representing an individual cell on the board.
 */
function Square({ value, onClick, index, disabled = false }) {
  const label = value
    ? `Cell ${index + 1} with ${value}`
    : `Cell ${index + 1} empty`;

  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      role="gridcell"
    >
      {value}
    </button>
  );
}

export default Square;
