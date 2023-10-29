import React, { useState } from 'react';
import './Chatbox.css'; // Assuming you have a CSS file for Chatbox styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  
  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    setChatHistory([...chatHistory, { text: message, user: 'user' }]);
    setMessage('');

    // Simulate bot response (you can replace this with actual logic)
    setTimeout(() => {
      setChatHistory([
        ...chatHistory,
        {
          text: "Hi! Welcome to Equinox Bank, I am iPal - Equainox Bank Chatbot.",
          user: 'bot',
        },
      ]);
      setShowQuickLinks(true); // Show quick links after bot response
    }, 500);
  };

  return (
    <div className={`chatbox ${isOpen ? 'open' : ''}`}>
      <img
        src="https://www.icicibank.com/content/dam/ask-i-shadow.png" // Replace with your chat icon image source
        alt="Chat Icon"
        className="chat-icon"
        onClick={toggleChatbox}
      />
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <h3>Ask iPal</h3>
            <button className="close-btn" onClick={toggleChatbox}>
              X
            </button>
          </div>
          <div className="chat-content">
            {chatHistory.map((chat, index) => (
              <div key={index} className={chat.user}>
                {chat.text}
              </div>
            ))}
          </div>
          {showQuickLinks && (
            <div className="quick-links" style={{marginTop: '0px',marginLeft:'15px',marginRight:'15px',textAlign:'center'}}>
              <a href="/About">About</a><br/>
              <a href="/Account" >Open Account</a>&nbsp;
              <a href="/Loan" >Apply Loan</a><br/>
            </div>
          )}
          <div className="chat-input">
            <input
              type="text"
              value={message} style={{ border: '1px solid #ccc', width:"90%",marginLeft:'1px'}}
              onChange={handleInputChange} 
              placeholder="Type a message..."
            />&nbsp;
             <button onClick={handleSendMessage} style={{color:'blue'}}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
