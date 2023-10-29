import React, {useRef, useState } from 'react';
import '../App.css'
import  Axios from 'axios';
const Mortgage = () => {
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
    country: '',
    mortagevalue: '',
    maritalStatus: '', 
    occupation: '', 
    work: '', 
    monthlyincome: '', 
    requirloanamount: '',
    purpose: '', 
    savingAccountNumber:'',
  });
  const dateInputRef = useRef(null);
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [maritalStatus, setMaritalStatus] = useState('');
  const [formOfIdentification, setFormOfIdentification] = useState([]);

  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    const errors = {};
    if (formData.firstName.length < 3) {
      errors.firstName = "First Name must be at least 3 characters long";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.occupation) {
      errors.occupation = "Please provide your occupation";
    }

    if (!formData.work) {
      errors.work = "Please provide your work duration";
    }

    if (!formData.monthlyincome.match(/^\d+$/)) {
      errors.monin = "Monthly Income must be digits";
    }

    if (!formData.requirloanamount.match(/^\d+$/)) {
      errors.reqam = "Required Loan Amount must be digits";
    }

    if (!formData.purpose) {
      errors.purpose = "Please provide the purpose of the mortgage loan";
    }

    if (!/^\d{2}-\d{2}$/.test(formData.zipCode)) {
      errors.zipCode = "Zip Code must be in the format xx-xx";
    }

    if (!maritalStatus) {
      errors.maritalStatus = "Please select an marital status";
    }
    const accountNumberRegex = /^5824\d{4}$/;
    if (!accountNumberRegex.test(formData.savingAccountNumber)) {
      errors.savingAccountNumber = 'Account number must be 8 digits (ex: 5824XXXX)';
    }
  

    if (Object.keys(errors).length === 0) {
      // Form is valid
      setFormSubmitted(true);
    } else {
      setFormErrors(errors);
    }
    console.log('Form submitted:', formData);
   // alert("submitted");
    Axios.post('https://bankserve.onrender.com/api/loan3', formData)
    .then(response => {
      console.log(response.data.message);
      alert(response.data.message); // Display success message
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.response.data.message); // Display error message from server
    });
  };
  const formStyle = {
    background:`url('https://img.freepik.com/premium-photo/home-golden-coin-balancing-scale-pink-background-real-estate-business-mortgage-investment-financial-loan-concept-home-property-investment-house-mortgage-3d-rendering-illustration_473922-308.jpg')`,
    backgroundRepeat: 'no repeat',
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
      </div>} {/*dis*/}
      <div>
    <form onSubmit={handleSubmit} style={{...formStyle,marginTop:'70px',marginBottom:'50px'}}>
      <div  >
        <h2 style={{color:'black'}}>Apply for a Mortgage Loan</h2><br/>
       <hr/>
        <br/>
        <label>
          Full Name:
          <div style={{ display: 'flex',
    justifyContent: 'space-between'}}>
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
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
        </label>
      </div>
      <div className='row'>
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
            name="country"
            value={formData.country}  style={inputStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            {/* Add more states as needed */}
          </select>
       </div>
       <div style={{ marginBottom: '10px',fontSize:'12px' }}>Postal / Zip Code  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country</div>
        </label>
      </div>
      <label>Marital status</label>
      <div className='row' >
         <div className='col-lg-6'>
        <div>
        <label>
            <input
              type="radio"
              name="maritalStatus"
              value="Single"
              checked={maritalStatus === 'Single'}
              onChange={handleMaritalStatusChange}
            />&nbsp;Single
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="maritalStatus"
              value="Married"
              checked={maritalStatus === 'Married'}
              onChange={handleMaritalStatusChange}
            />&nbsp;Married
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="maritalStatus"
              value="Other"
              checked={maritalStatus === 'Other'}
              onChange={handleMaritalStatusChange}
            />&nbsp;Other
          </label>
          </div>
      </div>
      </div>
      <div className='row' >
         <div className='col-lg-6'>
        <div style={{ marginRight: '20px'}}>
          <label> 
         Your current occupation
            <input
              type="text"
              name="occupation"
             value={formData.occupation}
             onChange={handleChange}
              style={{...inputStyle,width:'110%'}}
            />
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <label>How long have you worked here?
            <input
              type="text"
              name="work"
              value={formData.work}  onChange={handleChange}
              style={{...inputStyle,width:'100%'}}
            />
          </label>
      </div>
      </div>
      <br/>
      <div className='row' >
         <div className='col-lg-6'>
        <div style={{ marginRight: '20px'}}>
          <label> 
        Monthly Income
            <input
              type="text"
              name="monthlyincome" 
             value={formData.monthlyincome}  onChange={handleChange}
              style={{...inputStyle,width:'110%'}}
            />
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <label> Required Loan Amount
            <input
              type="text"
              name="requirloanamount"
              value={formData.requirloanamount}  onChange={handleChange}
              style={{...inputStyle,width:'100%'}}
            />
          </label>
      </div>
      </div>
      <br/>
      <div className='row' >
         <div className='col-lg-6'>
        <div style={{ marginRight: '20px'}}>
          <label> 
          Purpose of Mortgage Loan
            <input
              type="text"
              name="purpose"
             value={formData.purpose}  onChange={handleChange}
              style={{...inputStyle,width:'110%'}} required
            />
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <label> Value of Mortgaged Property
            <input
              type="text"
              name="mortagevalue"
              value={formData.mortagevalue}  onChange={handleChange}
              style={{...inputStyle,width:'100%'}} required
            />
          </label>
      </div>
      </div>
      <hr/>
         <h4>Bank References</h4>
         <div className='row'>
            <div className='col-lg-6'>
            <label>
            Institution Name<br/>
          <input
            type="text"
            name="ins"
            value={formData.ins}  style={{...inputStyle,width:"100%"}} 
            onChange={handleChange}
            required
          />
        </label>
            </div>
            <div className='col-lg-6'>
            <label>
            Saving Account #<br/>
          <input
            type="text"
            name="savingAccountNumber"
            value={formData.savingAccountNumber}  style={{...inputStyle,width:"100%"}} 
            onChange={handleChange}
            required
          />
        </label>
            </div>
         </div>
      <br/> 
      {Object.keys(formErrors).length > 0 && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <ul>
            {Object.values(formErrors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
     
      <center><button type="submit" style={{backgroundColor:'#1F51FF',borderRadius:'5px',padding:'5px'}}>Submit</button></center>
   <br/>   {formSubmitted && (
        <div>
          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(formData, null, 2))}`}
            download="user_details.json"
          >
            <center>
              <button type="button" style={{ backgroundColor: 'cornflowerblue', borderRadius: '5px', padding: '5px' }}>
                Download statement
              </button>
            </center>
          </a>
        </div>
      )}
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

export default Mortgage;
