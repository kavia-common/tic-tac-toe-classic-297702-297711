import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';
import './index.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import { calculateWinner, isDraw } from './utils/game';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component for Tic Tac Toe.
   * Manages theme, board state, and game rules, and renders the UI.
   */
  const [theme, setTheme] = useState('light');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Apply theme to the root document element for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    /** Toggle between light and dark themes. */
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Derive game state
  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => isDraw(squares, winner), [squares, winner]);
  const statusText = useMemo(() => {
    if (winner) return `Winner: ${winner}`;
    if (draw) return 'Draw';
    return `Next: ${xIsNext ? 'X' : 'O'}`;
  }, [winner, draw, xIsNext]);

  const gameOver = !!winner || draw;

  // Handle a move
  const handleSquareClick = useCallback(
    (index) => {
      if (squares[index] || gameOver) return; // ignore clicks on filled or finished games
      const nextSquares = squares.slice();
      nextSquares[index] = xIsNext ? 'X' : 'O';
      setSquares(nextSquares);
      setXIsNext((prev) => !prev);
    },
    [squares, xIsNext, gameOver]
  );

  // PUBLIC_INTERFACE
  const resetGame = () => {
    /** Reset the game to the initial state (empty board, X starts). */
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <main className="game-container" role="main" aria-label="Tic Tac Toe Game">
          <h1 className="title" aria-label="Tic Tac Toe title">
            Tic Tac Toe
          </h1>

          <StatusBar text={statusText} />

          <Board squares={squares} onSquareClick={handleSquareClick} />

          <button
            className="btn reset-btn"
            onClick={resetGame}
            aria-label="Reset game and start over"
            disabled={squares.every((s) => s === null)}
          >
            Reset
          </button>
        </main>
      </header>
    </div>
  );
}

export default App;
