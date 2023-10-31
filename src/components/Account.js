import React, {useRef, useState } from 'react';
import '../App.css'
//import image from '../images/i5.jpg'
import Axios  from 'axios';
const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(true);
   //for disclaimer
   const handleContinue = () => {
      if (isChecked ) {
        setShowModal(false);
      } else {
        alert('You must agree to the terms before continuing.');
      }
    };
  const dateInputRef = useRef(null);
  //const [formOfIdentification, setFormOfIdentification] = useState([]);
  //let isValid = 'false'; // or const isValid = true; depending on your needs
 // const [educationLevel, setEducationLevel] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    accountType: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    region: '',
    zipCode: '',
    state: '',

    formOfIdentification: [],
  });
 
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    fatn: '',
    mobile: '',
    educationLevel: '',
    formOfIdentification: '',
    accountType: '',
    accouncat: '',
    monsal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleEducationLevelChange = (e) => {
    setFormData({
      ...formData,
      educationLevel: e.target.value,
    });
  };
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleFormOfIdentificationChange = (e) => {
      const selectedOption = e.target.value;
      const updatedSelectedCheckboxes = selectedCheckboxes.includes(selectedOption)
        ? selectedCheckboxes.filter((option) => option !== selectedOption)
        : [...selectedCheckboxes, selectedOption];
      setSelectedCheckboxes(updatedSelectedCheckboxes);
    };
   
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const requiredFields = ['firstName', 'fatn', 'mobile', 'educationLevel', 'formOfIdentification', 'accountType', 'accouncat', 'monsal'];
      const errors = {};
    
      requiredFields.forEach((field) => {
        if (!formData[field]) {
          errors[field] = `Please enter ${field}`;
        }
      });
    
      if (formData.firstName.length < 3) {
        errors.firstName = 'First Name must be at least 3 characters';
      }
    
      if (formData.fatn.length < 3) {
        errors.fatn = "Father's Name must be at least 3 characters";
      }
    
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(formData.mobile)) {
        errors.mobile = 'Please enter a valid 10-digit mobile number';
      }
    
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    
      if (formData.educationLevel === '') {
        errors.educationLevel = 'Please select Education Level';
      }
    
      if (selectedCheckboxes.length === 0) {
        errors.formOfIdentification = 'Please select at least one Form of Identification';
      }
    
      if (formData.accountType === '') {
        errors.accountType = 'Please select Account Type';
      }
    
      if (formData.accouncat === '') {
        errors.accouncat = 'Please select Account Category';
      }
    
      if (!formData.monsal) {
        errors.monsal = 'Please enter Monthly Salary';
      }
      const zipCodeRegex = /^\d{2}(-\d{2})?$/;
  if (!zipCodeRegex.test(formData.zipCode)) {
    errors.zipCode = 'Please enter a valid zip code (e.g. 12-67)';
  }
  const idRegex = /^[0-9]{4}$/;
  if (!idRegex.test(formData.customId)) {
    errors.customId = 'Please enter a valid 4-digit ID number';
  }
    
      setFormErrors(errors);
      
    
      if (Object.keys(errors).length === 0) {
        // Submit the form
       // alert('Account created Successfully');
        console.log(formData);
        Axios.post('https://bankserver1.vercel.app/api/accopen', formData)
        .then(response => {
          console.log(response.data.message);
          alert(response.data.message); // Display success message
        })
        .catch(error => {
          console.error('Error:', error);
          alert(error.response.data.message); // Display error message from server
        });
        
      }
    };
    
 
    
  
   
  const formStyle = {
    background:`url('https://media.istockphoto.com/id/1030896164/photo/front-view-of-pink-piggy-bank-abstract-on-minimal-pink-table-background-with-alphabet.jpg?s=612x612&w=0&k=20&c=cx7cCJE2p-remll_G-o2KqOlmJMMIo5mOAgf84SDoIM=')`,
    backgroundRepeat: 'cover',
    backgroundSize:'100% 100%',
    //backgroundPosition: 'center center',
    border: '2px solid #ddd', // Border style
    padding: '20px', // Padding around the form
    maxWidth: '600px', // Maximum width of the form
    margin: '0 auto', // Center the form horizontally
  };
  const inputStyle = {
    width: '50%', // Make the input fields take up 100% of the available width
    padding: '8px', // Add some padding for better spacing
    margin: '8px 0', // Add margin to create space between input fields
    border: '1px solid #ccc', // Add a 1-pixel solid border around the input fields
    boxSizing: 'border-box', // Ensure that padding and border are included in the element's total width and height
    borderRadius: '4px', // Add rounded corners to the input fields
    marginRight: '10px'
  };
  return (
  <div>
   {showModal && <div className="modal">
        <div className="modal-content">
          <h6>You are about to leave equinox.com.Our privacy policy does not apply to the website you are about to visit. </h6>
         <p><b> Do you want to proceed?</b></p>
          
          <label>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />&nbsp;
            I agree to the terms and conditions by Equinox Bank
          </label>&nbsp;
          <button onClick={handleContinue} style={{maxWidth:'500px',height:'40px',display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'#D67229'}}>Continue To The Site</button>
        </div>
      </div>} {/*disclaimer*/}
      <div>
    <form onSubmit={handleSubmit} style={{...formStyle,marginTop:'70px',marginBottom:'50px'}}>
      <div  >
        <h2 style={{color:'black'}}>Open an Account</h2><br/>
        <h4 ><b>Personal Information</b></h4>
        <br/>
        <label>
          Full Name:
          <div style={{ display: 'flex',
    justifyContent: 'space-between'}}>
           <select
            name="accountType"
            value={formData.accountType}  style={{size:'25px', margin: '8px 0', marginRight: '10px',
            border: '1px solid #ccc', 
            boxSizing: 'border-box', 
            borderRadius: '4px'}}
            onChange={handleChange}
            required
          >

            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          </div>
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>Prefix &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
        </label>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
     <label>Date of Birth: <br/>
      <input
        type="date"
        onChange={handleChange} style={{ border: '2px solid #ddd', padding: '9px', borderRadius: '4px', width: '100%' }}
        ref={dateInputRef}
      />
      </label>
      </div>
      <div className='col-lg-6'>
      <label>
          Mobile: 
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}  style={{...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      </div>
      <div className='row' >
        <div className='col-lg-6'>
        <label>
        Father's Name: <br/>
          <input
            type="text"
            name="fatn"
            value={formData.fatn}  style={{...inputStyle,width:'100%'}} 
            onChange={handleChange}
            required
          />
        </label></div>
      
      <div className='col-lg-6'>
      <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}  style={{ ...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label>
        <div style={{ marginBottom: '10px',fontSize:'12px' }}>&nbsp;&nbsp;&nbsp;example@gmail.com</div>
      </div>
      </div>
       <div>
        <label>
          Address:
          <div style={{ display: 'flex',justifyContent: 'space-between'}}>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}  style={inputStyle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="streetAddress2"
            value={formData.streetAddress2}  style={inputStyle}
            onChange={handleChange}
          />
          </div>
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>Street Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Street Address Line 2</div>
        <div style={{ display: 'flex',justifyContent: 'space-between'}}>
        <input
            type="text"
            name="city"
            value={formData.city}  style={inputStyle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="region"
            value={formData.region}  style={inputStyle}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px',fontSize:'12px' }}>City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; State / Province</div>
       <div style={{ display: 'flex',justifyContent: 'space-between'}}>
       <input
            type="text"
            name="zipCode"
            value={formData.zipCode}  style={inputStyle}
            onChange={handleChange}
            required
          />
          <select
            name="state"
            value={formData.state}  style={inputStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            {/* Add more states as needed */}
          </select>
       </div>
       <div style={{ marginBottom: '10px',fontSize:'12px' }}>Postal / Zip Code  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country</div>
        </label>
      </div>
      <div className='row' >
         <div className='col-lg-6'>
        <label>Education Level:</label>
        <div style={{ marginRight: '20px'}}>
          <label>
            <input
              type="radio"
              name="educationLevel"
              value="High School"
              checked={formData.educationLevel === 'High School'}
              onChange={handleEducationLevelChange}
            />High School
          </label>
          <br />
          <label>
            
            <input
              type="radio"
              name="educationLevel"
              value="Undergraduate"
              checked={formData.educationLevel === 'Undergraduate'}
              onChange={handleEducationLevelChange}
            />Undergraduate
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="educationLevel"
              value="Masters degree"
              checked={formData.educationLevel === 'Masters degree'}
              onChange={handleEducationLevelChange}
            />Masters degree
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="educationLevel"
              value="PhD"
              checked={formData.educationLevel === 'PhD'}
              onChange={handleEducationLevelChange}
            /> PhD
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <label>Form of Identification:</label>
        <div style={{marginRight:'20px'}}>
          <label>
            <input
              type="checkbox"
              value="National Identity Card"
              checked={selectedCheckboxes.includes('National Identity Card')}
              onChange={handleFormOfIdentificationChange}
            /> National Identity Card
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Driver's Licence"
              checked={selectedCheckboxes.includes("Driver's Licence")}
              onChange={handleFormOfIdentificationChange}
            /> Driver's Licence
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="International Passport"
              checked={selectedCheckboxes.includes('International Passport')}
              onChange={handleFormOfIdentificationChange}
            /> International Passport
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Student ID"
              checked={selectedCheckboxes.includes('Student ID')}
              onChange={handleFormOfIdentificationChange}
            /> Student ID
          </label>
          </div>
      </div>
      </div>
      <div>
      <label>
          ID Number:
          <input
            type="text"
            name="customId"
            value={formData.customId}  style={{...inputStyle,marginLeft:'70px'}}
            onChange={handleChange}
            required
          />
        </label> 
      </div>
      <div>
      <label>
          ID Card Upload:
          <input
            type="file"
            name="idcard"
            value={formData.idcard}  style={{...inputStyle,marginLeft:'34px'}}
            onChange={handleChange}
            required
          />
        </label> 
      </div>
      <br/>
       <h4><b>Account Information</b></h4>    
       <br/>  
      <div className='row'>
        <div className='col-lg-6'>
      <label >Account Type:</label>
         <br/>
          <select
            name="accountType"
            value={formData.accountType}  style={{size:'25px', margin: '8px 0', marginRight: '10px',
            border: '1px solid #ccc', 
            boxSizing: 'border-box', 
            borderRadius: '4px',height:'42px'}}
            onChange={handleChange}
            required
          >
            <option value="">Please Select</option>
            <option value="Priority">Priority Banking</option>
            <option value="Prefer">Preferred Banking</option>
            <option value="Private">Private Banking</option>
            <option value="others">Others</option>
          </select></div>
          <div className='col-lg-6'>
            <label>Account Category</label>
            <br/>
            <select
            name="accouncat"
            value={formData.accountcat}  style={inputStyle}
            onChange={handleChange}
            required
          >
            <option value="">Please Select</option>
            <option value="Individual">Individual</option>
            <option value="Joint">Joint</option>
          </select>
          </div>
          </div>
          <div>
            <label>Monthly Salary: 
            <input
            type="text"
            name="monsal"
            value={formData.monsal}  style={{...inputStyle,marginLeft:'45px'}}
            onChange={handleChange}
            required
          />
            </label>
            
          </div><br/>  
          {Object.keys(formErrors).map((fieldName, index) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={index} style={{ color: 'black' }}>
             {formErrors[fieldName]}
          </p>
        );
      } else {
        return null;
      }
    })}
      <center><button type="submit" style={{backgroundColor:'#1F51FF',borderRadius:'5px',padding:'5px'}}>Submit</button></center>
      
    </form>
    </div>
    <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          max-width: 500px;
          text-align: center;
        }

        .form {
          background: white;
          border: 1px solid #ccc;
          padding: 30px;
          max-width: 500px;
          margin: 0 auto;
          margin-top: 70px;
        }
      `}</style>
    </div>
  );
};

export default Form;
