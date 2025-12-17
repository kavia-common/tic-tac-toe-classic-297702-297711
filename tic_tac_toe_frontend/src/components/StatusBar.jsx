import React from 'react';

/**
 * PUBLIC_INTERFACE
 * StatusBar shows game state messages and is announced politely to assistive tech.
 */
function StatusBar({ text }) {
  return (
    <div
      className="status-bar"
      aria-live="polite"
      aria-atomic="true"
      role="status"
    >
      {text}
    </div>
  );
}

export default StatusBar;
