import React, {useRef, useState } from 'react';
import '../App.css'
//import image from '../images/i5.jpg'
import  Axios from 'axios';
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    fatherName:'',
    accountType: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    region: '',
    zipCode: '',
    state: '',
    desiredLoanAmount:'',
    annualIncome:'',
    grossMonthlyIncome:'',
    monthlyRentMortgage:'' ,
    downPaymentAmount:'',
    savingAccountNumber:'',
    loanWillBeUsedFor:''
  });
  const dateInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [loanWillBeUsedFor, setloanWillBeUsedFor] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [formOfIdentification, setFormOfIdentification] = useState([]);

  const handleloanWillBeUsedFor = (e) => {
    setloanWillBeUsedFor(e.target.value);
  }
  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  }

  const handleYearsOfExperienceChange = (e) => {
    setYearsOfExperience(e.target.value);
  }

  const handleEmploymentStatusChange = (e) => {
    setEmploymentStatus(e.target.value);
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
    const newErrors = {};

    if (formData.firstName.length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters long';
    }

    if (formData.fatherName.length < 3) {
      newErrors.fatn = "Father's name must be at least 3 characters long";
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    const numberFields = ['desiredLoanAmount', 'annualIncome', 'grossMonthlyIncome', 'monthlyRentMortgage', 'downPaymentAmount'];
    numberFields.forEach(field => {
      if (isNaN(formData[field]) || formData[field] < 1000)  {
        newErrors[field] = 'Field must be greater than 1000';
      }
    });

    const accountNumberRegex = /^5824\d{4}$/;
    if (!accountNumberRegex.test(formData.savingAccountNumber)) {
      newErrors.san = 'Account number must be 8 digits (ex: 5824XXXX)';
    }

    if (loanWillBeUsedFor === '') {
      newErrors.educationLevel = 'Please select an loan will be used for';
    }

    if (formOfIdentification.length === 0) {
      newErrors.formOfIdentification = 'Please select at least one form of identification';
    }
    const zipCodeRegex = /^\d{2}(-\d{2})?$/;
    if (!zipCodeRegex.test(formData.zipCode)) {
      errors.zipCode = 'Please enter a valid zip code (e.g. 12-67)';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
   // alert("submitted")
    console.log('Form submitted:', formData);
  }
  Axios.post('https://bankserver1.vercel.app/api/loan1', formData)
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
    background:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj5bj3tQq5vRyZjquYIwhm0mCNnjTYKSBVBPMLPF4xCtNJOlHdtXDzY9ckjFOMmSae6Y&usqp=CAU')`,
    backgroundRepeat: 'no-repeat',
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
        <h4>Loan Application Form</h4><br/>
        <div className='row'>
            <div className='col-lg-6'>
            <label>
            Desired Loan Amount
          <input
            type="text"
            name="desiredLoanAmount"
            value={formData.desiredLoanAmount}  style={{...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label>
            </div>
            <div className='col-lg-6'>
            <label>
            Annual Income
          <input
            type="text"
            name="annualIncome"
            value={formData.annualIncome}  style={{...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label> 
            </div>
        </div>
        <label>Loan will be used for</label>
        <div className='row'>
        <div className='col-lg-6'>
        <label>
            <input
              type="radio"
              name="loanWillBeUsedFor"
              value="Business Launching"
              checked={loanWillBeUsedFor === 'Business Launching'}
              onChange={handleloanWillBeUsedFor}
            />&nbsp;Business Launching
            </label> 
            <label>
            <input
              type="radio"
              name="loanWillBeUsedFor"
              value="House Buying"
              checked={loanWillBeUsedFor === 'House Buying'}
              onChange={handleloanWillBeUsedFor}
            />&nbsp;House Buying
            </label> 
            <label>
            <input
              type="radio"
              name="loanWillBeUsedFor"
              value="Home improvement"
              checked={loanWillBeUsedFor === 'Home improvement'}
              onChange={handleloanWillBeUsedFor}
            />&nbsp;Home improvement
            </label> 
            <label>
            <input
              type="radio"
              name="loanWillBeUsedFor"
              value="Investment"
              checked={loanWillBeUsedFor === 'Investment'}
              onChange={handleloanWillBeUsedFor}
            />&nbsp;Investment
            </label> 
        </div>
        <div className='col-lg-6'>
        <label>
            <input
              type="radio"
              name="loanWillBeUsedFor"
              value="Education"
              checked={loanWillBeUsedFor === 'Education'}
              onChange={handleloanWillBeUsedFor}
            />&nbsp;Education
            </label> <br/>
            <label>
            <input
              type="radio"
              name="loanWillBeUsedFor"
              value="Other"
              checked={loanWillBeUsedFor === 'Other'}
              onChange={handleloanWillBeUsedFor}
            />&nbsp;Other
            </label> 
        </div>
        </div>
        <hr/>
        <h4 >Contact Information</h4>
        <br/>
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
         <div className='col-lg-3'>
        <label>Marital Status:</label></div>
        <div className='col-lg-9'>
          <label>
            <input
              type="radio"
              name="Mary"
              value="Single"
              checked={maritalStatus === 'Single'}
              onChange={handleMaritalStatusChange}
            />&nbsp;Single
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="Mary"
              value="Married"
              checked={maritalStatus === 'Married'}
              onChange={handleMaritalStatusChange}
            />&nbsp;Married
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="Mary"
              value="Other"
              checked={maritalStatus === 'Other'}
              onChange={handleMaritalStatusChange}
            />&nbsp;Other
          </label>
          </div>
      </div><br/>
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
      <label>How long have you lived in your given address?</label>
      <div className='row' >
         <div className='col-lg-6'>
        <div style={{ marginRight: '20px'}}>
          <label>
            <input
              type="radio"
              name="live"
              value="0-1 year"
              checked={employmentStatus === '0-1 year'}
              onChange={handleEmploymentStatusChange }
            />&nbsp;0-1 year
          </label>
          <br />
          <label>
            
            <input
              type="radio"
              name="live"
              value="1-2 years"
              checked={employmentStatus === '1-2 years'}
              onChange={handleEmploymentStatusChange}
            />&nbsp;1-2 years
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <div style={{marginRight:'20px'}}>
        <label>
            <input
              type="radio"
              name="live"
              value="3-4 years"
              checked={employmentStatus === '3-4 years'}
              onChange={handleEmploymentStatusChange}
            />&nbsp;3-4 years
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="live"
              value="5+ years"
              checked={employmentStatus=== '5+ years'}
              onChange={handleEmploymentStatusChange}
            />&nbsp;5+ years
          </label>
          </div>
      </div>
      </div>
      <br/>
      <hr/>
       <h4><b>Employment Information</b></h4>    
       <br/>  
      <div className='row'>
        <div className='col-lg-7'>
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
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>&nbsp;&nbsp;First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
        </label>
      </div>
      <div className='col-lg-5'>
      <label>
         Occupation
          <input
            type="text"
            name="occupation"
            value={formData.occ}  style={{ ...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label>
      </div>
         </div>
         <div className='row'>
            <div className='col-lg-4'>
                <label>Years of experience </label>
            </div>
            <div className='col-lg-4'>
            <label>
            <input
              type="radio"
              name="yoe"
              value="0-1 year"
              checked={yearsOfExperience === '0-1 year'}
              onChange={handleYearsOfExperienceChange}
            />&nbsp;0-1 year
          </label>
          <br />
          <label>
            
            <input
              type="radio"
              name="yoe"
              value="1-2 years"
              checked={yearsOfExperience === '1-2 years'}
              onChange={handleYearsOfExperienceChange}
            />&nbsp;1-2 years
          </label>
            </div>
            <div className='col-lg-4'>
            <label>
            <input
              type="radio"
              name="yoe"
              value="3-4 years"
              checked={yearsOfExperience === '3-4 years'}
              onChange={handleYearsOfExperienceChange}
            />&nbsp;3-4 years
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="yoe"
              value="5+ years"
              checked={yearsOfExperience === '5+ years'}
              onChange={handleYearsOfExperienceChange}
            />&nbsp;5+ years
          </label>
            </div>
         </div><br/>
         <div className='row'>
            <div className='col-lg-6'>
            <label>
            Gross monthly income  <br/>
          <input
            type="text"
            name="grossMonthlyIncome"
            value={formData.grossMonthlyIncome}  style={{...inputStyle,width:'100%'}} 
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
            name="monthlyRentMortgage"
            value={formData.monthlyRentMortgage}  style={{...inputStyle,width:'100%'}} 
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
            name="downPaymentAmount"
            value={formData.downPaymentAmount}  style={{...inputStyle,marginLeft:'30px'}} 
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
         <hr/>
         <h4>CONSENT</h4><br/>
         <p style={{fontSize:'11px'}}>I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.</p>
         <label>
            <input
              type="checkbox"
              value="w1"
              checked={formOfIdentification.includes('w1')}
              onChange={handleFormOfIdentificationChange} required
            />&nbsp;YES
          </label>
         
          <p style={{fontSize:'11px'}}>I hereby agree that the information given is true, accurate and complete as of the date of this application submission. </p>
          <label>
            <input
              type="checkbox"
              value="w2"
              checked={formOfIdentification.includes('w2')}
              onChange={handleFormOfIdentificationChange} required
            />&nbsp;YES
          </label>
          <br/>  
          {Object.keys(errors).length > 0 && (
          <div style={{ color: 'red' }}>
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}<br/>
      <center><button type="submit" style={{backgroundColor:'#1F51FF',borderRadius:'5px',padding:'5px'}}>Submit</button></center>
    <br/> 
    {formSubmitted && (
        <div>
          <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(formData, null, 2))}`}
            download="consumerloan_details.json"
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

export default Form;
