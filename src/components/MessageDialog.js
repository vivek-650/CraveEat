import React, { useState, useEffect } from 'react';

function MessageDialog({ message, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress - 1);
    }, 30); // Adjust the interval as needed for a smooth animation

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onClose();
    }, 3000); // Adjust the time as needed (3000 milliseconds = 3 seconds)
  }, []);
  return (
    <div className="message-dialog">
      <div className="message-content">
        <p>{message}</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default MessageDialog;
