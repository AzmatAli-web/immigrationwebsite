import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-popup">
          <button className="chat-close" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <div className="chat-popup-header">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
              alt="Support"
              className="chat-avatar"
            />
            <p>How can I help you?</p>
          </div>
        </div>
      )}
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;
