import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha
} from "react-simple-captcha";
import  Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Signup = () => {
  const [error, setError] = useState("");
  const { userID, setUserID } = useContext(UserContext);
 // const [userID, setUserIDLocal] = useState('');
  const navigate = useNavigate(); // Access the navigate function
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userIDError,setuserIDError]=useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    setuserIDError('');

    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);
    const isUserIDValid=validateUserID(formData.userID);
    if (isEmailValid && isPasswordValid && isUserIDValid) {
     // alert('Form submitted successfully!');
      Axios.post('https://bankserver1.vercel.app/api/signup',formData)
      .then(response => {
        console.log(response.data.message);
        alert(response.data.message); // Display success message
        setUserID(formData.userID); // Update the context with the userID
        navigate('/service');
      })
      .catch(error => {
        console.error('Error:', error);
        alert(error.response.data.message); // Display error message from server
       
        navigate('/service'); 
      });
    } else {
      if(!isUserIDValid){
        setuserIDError("Please enter a valid user id ex:58XXXX");
      }
      if (!isEmailValid) {
        setEmailError('Please enter a valid email address');
      }
      if (!isPasswordValid) {
        setPasswordError(
          'Password should be at least 5 characters long and contain 1 uppercase, 2 lowercase, 1 digit, and 1 special character'
        );
      }
    }
  };
  const validateUserID = (userID) => {
    const userIDRegex = /^58\d{4}$/;
    const isValid = userIDRegex.test(userID);
    console.log(`User ID: ${userID}, Valid: ${isValid}`);
    return isValid;
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    return passwordRegex.test(password);
  };
    // Add logic to handle form submission
    // For example, you can send a request to your backend API to create the user
  

  const validateFormUser = () => {
    const captchaInput = document.getElementById("captcha_input").value;
    setError("");
    if (validateCaptcha(captchaInput) === true) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false); // Reset form validity on captcha validation failure
      setError("Invalid Captcha");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "cornflowerblue");
  }, []);

  return (
    <>
      <div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlnZ3klMjBiYW5rfGVufDB8fDB8fHww&w=1000&q=80"
            alt="back" width="1370px"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)", /* Optional: Add a semi-transparent background */
            padding: "20px",
            borderRadius: "5px"
          }}
        >
          <form >
            <h3>Sign Up</h3>
            <br />
             
            {!isFormValid ? (
              <div
                style={{
                  border: "2px solid #727272",
                  borderRadius: "10px",
                  display: "inline-block",
                  padding: "20px"
                }}
              >
                <LoadCanvasTemplate />
                <input
                  type="text"
                  id="captcha_input"
                  style={{
                    width: "50%",
                    padding: "8px",
                    margin: "8px 0",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    marginRight: "10px"
                  }}
                />
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                  type="button"
                  value="Validate"
                  style={{ background: "#8fbdeef0", borderRadius: "4px" ,height:'35px',width:'90px'}}
                  onClick={validateFormUser}
                />
                <br />
              </div>
            ) : (
              <>
              <label>
                  User ID:{" "}&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    name="userID"
                    value={formData.userID}
                    onChange={handleChange} 
                    style={{
                      width: "50%",
                      padding: "8px",
                      margin: "8px 0",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      marginRight: "10px"
                    }}
                    required
                  />
                </label>
                <div style={{ color: 'red' }}>{userIDError}</div>
                <br />
                <label>
                  E-mail:{" "}&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "50%",
                      padding: "8px",
                      margin: "8px 0",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      marginRight: "10px"
                    }}
                    required
                  />
                </label>
                <div style={{ color: 'red' }}>{emailError}</div>
                <br />
                <label>
                  Password:{" "}
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{
                      width: "50%",
                      padding: "8px",
                      margin: "8px 0",
                      border: "1px solid #ccc",
                      boxSizing: "border-box",
                      borderRadius: "4px",
                      marginRight: "10px"
                    }}
                    required
                  />
                </label>
                <div style={{ color: 'red' }}>{passwordError}</div>
                <br />
                <input
                  type="submit"
                  value="Submit"
                  style={{
                    background: "#8fbdeef0",
                    borderRadius: "4px",height:'35px',width:'90px'
                  }}
                  onClick={handleFormSubmit}
                />
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

	
