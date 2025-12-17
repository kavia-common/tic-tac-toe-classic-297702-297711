import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tic Tac Toe App', () => {
  test('renders title and initial status', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /tic tac toe/i })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/Next: X/i);
  });

  test('clicking squares alternates X then O', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    // First move by X
    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent('X');
    // Second move by O (different square)
    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveTextContent('O');
  });

  test('reset clears the board and sets Next: X', () => {
    render(<App />);
    const cells = screen.getAllByRole('gridcell');
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[1]); // O
    const reset = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(reset);
    cells.forEach((c) => expect(c).toHaveTextContent(''));
    expect(screen.getByRole('status')).toHaveTextContent(/Next: X/i);
  });
});
