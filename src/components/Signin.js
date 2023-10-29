import React, { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from './UserContext';

const SignIn = () => {
  const [userID,setUserIDLocal] = useState('');
  const { setUserID } = useContext(UserContext);
  const navigate = useNavigate(); // Access the navigate function
  const [isSignedIn, setIsSignedIn] = useState(false);
 
  const validateUserID = (userID) => {
    const userIDRegex = /^58\d{4}$/; // Regex to match the pattern 58XXXX
    return userIDRegex.test(userID);
  };
  const handleContinue = () => {
    console.log('User ID:', userID);
    if (validateUserID(userID)) {
     // alert('Sign-in successful!');
      console.log('Continue with sign-in for User ID:', userID);
  
      Axios.post('https://bankserve.onrender.com/api/users', { userID })
        .then(response => {
          console.log(response.data.message);
          alert(response.data.message); // Display success message
          setIsSignedIn(true);
          setUserID(userID);
          navigate('/service'); // Navigate to the home page
        })
        
        .catch(error => {
          console.error('Error:', error);
          alert(error.response.data.message); 
          navigate('/signup'); 
        });
    } else {
      alert('Please enter a valid User ID in the format 5824XXXX');
    }
  };
  return (
    <div style={{ backgroundColor:'white',border: '1px solid #ccc', padding: '30px', maxWidth: '500px', margin: '0 auto',marginTop: '70px' }}>
      <h4><span style={{ color: 'blue' }}>Sign In to </span>
        <span style={{ color: 'orange' }}>Online Banking</span></h4>
      
        User ID:  <input type="text" style={{ border: '1px solid #ccc' ,width:'200px',borderRadius:'10px'}} name='userID' value={userID} onChange={(e) => setUserIDLocal(e.target.value)} required/>
       
      <div style={{ marginTop: '25px', textAlign: 'center' }}>
        <button onClick={handleContinue} style={{backgroundColor:'blue',borderRadius:'10px',width:'200px',height:'30px'}}>Continue</button>
      </div><hr/>
      <div>
       <p><b> Need help? </b></p>
       <p>Contact us at 1-800-508-2265</p>
      </div>
      <div>
       <p><b> Not yet enrolled? </b></p>
       <p><a href="/Signup" target="_blank">Sign up</a> for the convenience of Internet Banking today!</p>
      </div>
      <div>
        <p><b>We promise to keep your personal information private and secure.</b></p>
        <p>To learn more, please see our <a href="/privacy-policy">privacy policy</a>.</p>
      </div>
      <div>
        <a href="/">Visit our home page</a>
      </div>
     
    </div>
  );
};

export default SignIn;
