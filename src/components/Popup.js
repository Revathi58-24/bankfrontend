
import React from 'react';

const Popup = ({ isOpen, toggle }) => {
  const popupStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius:'10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    zIndex: '9999' 
  };

  const headerStyle = {
    fontSize: '1.2em',
    marginBottom: '10px',
    color:'black'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
    color: '#007bff'
  };

  return (
    <div style={popupStyle}>
       <button style={closeButtonStyle} onClick={toggle} >
        X
      </button><br/>
      <div style={{ marginBottom: '20px' }}>
        <div style={headerStyle}>
        Let’s begin with some necessary <br/>information and get you started
        </div>
        
      </div>
      {/* Add any necessary text here */}
      <div style={{ marginBottom: '20px' }}>
        {/* Add necessary text here */}
      </div><a href="./signin">
      <button style={{ fontSize: '1em', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }} >Sign In</button>
      </a>
    </div>
  );
};

export default Popup;

