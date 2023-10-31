import React, {useRef, useState } from 'react';
import '../App.css' 
import  Axios from 'axios';
const Autoloan= () => {
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
    lastName: '',
    fatherName:'',
    mobile: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    region: '',
    zipCode: '',
    country: '',
    loanterm:'',
    loanamount:'',
    purpose:'',
    emptype:'',
    vehicletype:'',
    vehiclebrand:'',
    vehiclemodel:'',
    grossmonthlyincome:'',
    downpayamount:'',
   Accnumber:''
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
  const [purpose, setpurpose] = useState('');
  const [classification,setclassification]=useState('');
  const [formOfIdentification, setFormOfIdentification] = useState([]);

  const handlepurpose = (e) => {
    setpurpose(e.target.value);
  }
 const handleclassification=(e)=>{
  setclassification(e.target.value);
 }
  const handleFormOfIdentificationChange = (e) => {
    const selectedOption = e.target.value;
    if (formOfIdentification.includes(selectedOption)) {
      setFormOfIdentification(formOfIdentification.filter(option => option !== selectedOption));
    } else {
      setFormOfIdentification([...formOfIdentification, selectedOption]);
    }
  }
  const validateForm = () => {
    let errors = {};
  
    // Validate First Name and Last Name
    if (formData.firstName.length < 3 ) {
      errors.name = "First Name  must be at least 3 characters long.";
    }
  
    // Validate Father's Name
    if (formData.fatherName.length < 3) {
      errors.fatn = "Father's Name must be at least 3 characters long.";
    }
  
    // Validate Mobile Number (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits.";
    }
  
    // Validate Zip Code (ex-23-98 format)
    const zipCodeRegex = /^\d{2}-\d{2}$/;
    if (!zipCodeRegex.test(formData.zipCode)) {
      errors.zipCode = "Zip code must be in the format ex-23-98.";
    }
  
    // Validate Numeric Fields
    const numericFields = ['loanamount', 'grossmonthlyincome', 'mrent', 'downpayamount'];
    numericFields.forEach(field => {
      const value = formData[field];
      if (!/^\d+$/.test(value)) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be a number.`;
      }
    });
  
    // Validate Saving Account #
    const savingAccountRegex = /^5824\d{4}$/;
    if (!savingAccountRegex.test(formData.Accnumber)) {
      errors.savno = "Account number must be 8 digits (ex: 5824XXXX)";
    }
  
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

  if (Object.keys(errors).length === 0) {
    // Form is valid, submit it
    setFormSubmitted(true);
    console.log('Form submitted:', formData);
   // alert('Form submitted successfully!');
    Axios.post('https://bn1.onrender.com/api/loan4', formData)
    .then(response => {
      console.log(response.data.message);
      alert(response.data.message); // Display success message
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.response.data.message); // Display error message from server
    });
  } else {
    // Form has errors, update state with the errors
    setFormErrors(errors);
  }
  };
  const formStyle = {
    background:`url('https://img.freepik.com/premium-vector/3d-vector-cashback-money-refund-icon-concept-money-holding-wallet-dollar-bill-coin-stack-online-payment-money-saving-concept-background-3d-render-business-bank-finance-investment_412828-751.jpg')`,
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
      <div >
        <h4>Auto Loan Application Form</h4><br/>
       
        <label>
         Name:
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
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
        </label>
      
      <div className='row'>
        <div className='col-lg-6'>
     <label>Date of Birth: <br/>
      <input
        type="date"
        onChange={handleChange} style={{ border: '2px solid #ddd', padding: '9px', borderRadius: '4px', width: '100%' }}
        ref={dateInputRef} required
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
            name="fatherName"
            value={formData.fatherName}  style={{...inputStyle,width:'100%'}} 
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
      <br/>
      <hr/>
      <h4>Loan Information</h4>
      <hr/>
      <div className='row'>
        <div className='col-lg-6'>
            <label>Loan Term:
            <select
            name="loanterm"
            value={formData.loanterm}  style={{...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="6 months">6 months</option>
            <option value="12 months">12 months</option>
            <option value="18 months">18 months</option>
            <option value="24 months">24 months</option>
            </select></label>
            
        </div>
       <div className='col-lg-6'>
        <label>Loan Amount:
        <input
            type="text"
            name="loanamount"
            value={formData.loanamount}
            onChange={handleChange}
            style={{...inputStyle,width:'100%'}}
            required
          />
        </label>
       </div>
      </div>
      <div className='row' >
         <div className='col-lg-3'>
        <label>Purpose:</label></div>
        <div className='col-lg-9'>
          <label>
            <input
              type="radio"
              name="purpose"
              value="purchase"
              checked={purpose === 'purchase'}
              onChange={handlepurpose}
            />&nbsp;purchase
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="purpose"
              value="refinancing"
              checked={purpose === 'refinancing'}
              onChange={handlepurpose}
            />&nbsp;refinancing
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
      </div><br/>
      <hr/>
      <h4>Vehicle Information</h4>
      <hr/>
      <div className='row'>
        <div className='col-lg-6'>
        <label>Vehicle Brand:
        <input
            type="text"
            name="vehiclebrand"
            value={formData.vehiclebrand}
            onChange={handleChange}
            style={{...inputStyle,width:'100%'}}
            required
          />
        </label>
        </div>
        <div className='col-lg-6'>
        <label>Vehicle Type:
        <input
            type="text"
            name="vehicletype"
            value={formData.vehicletype}
            onChange={handleChange}
            style={{...inputStyle,width:'100%'}}
            required
          />
        </label>
        </div>
      </div>
      <div className="row">
        <div className='col-lg-6'>
        <label>Vehicle Model:
        <input
            type="text"
            name="vehiclemodel"
            value={formData.vehiclemodel}
            onChange={handleChange}
            style={{...inputStyle,width:'100%'}}
            required
          />
        </label>
        </div>
        <div className='col-lg-6'>
          <label>
            Classification of Vehicle:<br/><br/>
            <label>
            <input
              type="radio"
              name="classify"
              value="Brand New"
              checked={classification === 'Brand New'}
              onChange={handleclassification}
            />&nbsp;Brand New
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="classify"
              value="Used"
              checked={classification === 'Used'}
              onChange={handleclassification}
            />&nbsp;Used
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        </div>
      </div><hr/>
       <h4>Borrower's Employment and Income Information</h4>   <hr/> 
       <br/>  
      <div className='row'>
        <div className='col-lg-7'>
        <label>
         Name :
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
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>&nbsp;&nbsp;First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
        </label>
      </div>
      <div className='col-lg-5'>
      <label>Employment type:
            <select
            name="emptype"
            value={formData.emptype}  style={{...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Employed">Employed</option>
            <option value="Immigrant">Immigrant</option>
            <option value="Other">Other</option>
            </select></label>
      </div>
         </div>
    <br/>
         <div className='row'>
            <div className='col-lg-6'>
            <label>
            Gross monthly income  <br/>
          <input
            type="text"
            name="grossmonthlyincome"
            value={formData.grossmonthlyincome}  style={{...inputStyle,width:'100%'}} 
            onChange={handleChange}
            required
          />
        </label>
            </div>
            <div className='col-lg-6'>
            <label>
            Monthly rent/mortgage <br/>
          <input
            type="text"
            name="mrent"
            value={formData.mrent}  style={{...inputStyle,width:'100%'}} 
            onChange={handleChange}
            required
          />
        </label>
            </div>
         </div>
         <div>
         <label>
         Down Payment Amount:
          <input
            type="text"
            name="downpayamount"
            value={formData.downpayamount}  style={{...inputStyle,marginLeft:'30px'}} 
            onChange={handleChange}
            required
          />
        </label>
         </div>
         <hr/>
         <h4>Bank References</h4>
         <div className='row'>
            <div className='col-lg-6'>
            <label>
            Institution Name<br/>
          <input
            type="text"
            name="insnm"
            value={formData.insnm}  style={{...inputStyle,width:"100%"}} 
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
            name="Accnumber"
            value={formData.Accnumber}  style={{...inputStyle,width:"100%"}} 
            onChange={handleChange}
            required
          />
        </label>
            </div>
         </div>
         <hr/>
         <h4>CONSENT</h4><br/>
         
          <p style={{fontSize:'11px'}}>I hereby agree that the information given is true, accurate and complete as of the date of this application submission. </p>
          <label>
            <input
              type="checkbox"
              value="National "
              checked={formOfIdentification.includes('National ')}
              onChange={handleFormOfIdentificationChange} required
            />&nbsp;YES
          </label>
          <br/>  
          {Object.keys(formErrors).length > 0 && (
  <div style={{ color: 'red' }}>
    {Object.keys(formErrors).map((field, index) => (
      <div key={index}>{formErrors[field]}</div>
    ))}
  </div>
)}
<br/>
      <center><button type="submit" style={{backgroundColor:'#1F51FF',borderRadius:'5px',padding:'5px'}}>Submit</button></center>
    <br/>  {formSubmitted && (
        <div>
          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(formData, null, 2))}`}
            download="autoloan_details.json"
          >
            <center>
              <button type="button" style={{ backgroundColor: 'cornflowerblue', borderRadius: '5px', padding: '5px' }}>
                Download statement
              </button>
            </center>
          </a>
        </div>
      )}
      </div>
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

export default Autoloan;
