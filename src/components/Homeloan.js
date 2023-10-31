import React, {useRef, useState } from 'react';
import '../App.css'
//import image from '../images/i5.jpg'
import Axios  from 'axios';
const Form = () => {
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    purchaseType: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    region: '',
    zipCode: '',
    country: '',
    home: '',  
    sell: '',
    qualify: 'null',
    repreal: '',
    realtoraddress:'',
    savingAccountNumber:'',
  });
  const dateInputRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlehomeChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      home: value,
    });
  };

  const handlesellChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      sell: value,
    });
  };

  const handlequalifyChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      qualify: value,
    });
  };
  
  const handlereprealChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      repreal: value,
    });
  };
  

  const [formErrors, setFormErrors] = useState({});
  const [formOfIdentification, setFormOfIdentification] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
     // Check if firstName is at least 3 characters
     if (formData.firstName.length < 3) {
      setFormErrors({ firstName: 'First name must be at least 3 characters' });
      return;
    }

    // Check if a radio button is selected for 'home'
    if (!formData.home) {
      setFormErrors({ home: 'Please select whether you own or rent your home' });
      return;
    }

    // Check if a radio button is selected for 'sell'
    if (!formData.sell) {
      setFormErrors({ sell: 'Please select whether you need to sell your home' });
      return;
    }

    // Check if accountType is selected
    if (!formData.purchaseType) {
      setFormErrors({ accountType: 'Please select an account type' });
      return;
    }

    // Check if qualify is selected
    if (!formData.qualify) {
      setFormErrors({ qualify: 'Please select whether you are pre-qualified for a loan' });
      return;
    }

    // Check if repreal is selected
    if (!formData.repreal) {
      setFormErrors({ repreal: 'Please select whether you are represented by a Realtor' });
      return;
    }

    // Check if mobile is exactly 10 digits
    if (formData.mobile.length !== 10) {
      setFormErrors({ mobile: 'Mobile number must be exactly 10 digits' });
      return;
    }
    const accountNumberRegex = /^5824\d{4}$/;
    if (!accountNumberRegex.test(formData.savingAccountNumber)) {
      setFormErrors({savingAccountNumber:'Account number must be 8 digits (ex: 5824XXXX)'});
      return;
    }
    // Reset form errors if there are no validation errors
    setFormErrors({});

    // If all validations pass, you can proceed with form submission logic
    console.log('Form submitted:', formData);
   //alert("submitted");
   Axios.post('https://bankserver1.vercel.app/api/loan2', formData)
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
    background:`url('https://img.freepik.com/premium-photo/home-with-key-coins-stack-new-house-mortgage-investment-business-loan-real-estate-concept-residential-finance-economy-home-property-investment-working-capital-3d-rendering-illustration_473922-455.jpg')`,
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
   
  <div>
    <form onSubmit={handleSubmit} style={{...formStyle,marginTop:'70px',marginBottom:'50px'}}>
      <div  >
        <h2 style={{color:'black'}}>Apply for a Home Loan</h2><br/>
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
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>&nbsp;&nbsp; First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
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
      <label>Do you own or rent your home?*</label>
      <div className='row' >
         <div className='col-lg-6'>
        <div style={{ marginRight: '20px'}}>
          <label>
            <input
              type="radio"
              name="home"
              value="own"
              checked={formData.home === 'own'}
              onChange={handlehomeChange}
            />&nbsp;Own
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <div style={{marginRight:'20px'}}>
        <label>
            <input
              type="radio"
              name="home"
              value="rent"
              checked={formData.home=== 'rent'}
              onChange={handlehomeChange}
            />&nbsp;Rent
          </label>
          </div>
      </div>
      </div>
      <label>Do you need to sell your home before buying a new one?</label>
      <div className='row' >
         <div className='col-lg-6'>
        <div style={{ marginRight: '20px'}}>
          <label>
            <input
              type="radio"
              name="sell"
              value="yes"
              checked={formData.sell=== 'yes'}
              onChange={handlesellChange}
            />&nbsp;Yes
          </label>
      </div> 
      </div>
      <div className='col-lg-6'>
        <div style={{marginRight:'20px'}}>
        <label>
            <input
              type="radio"
              name="sell"
              value="no"
              checked={formData.sell=== 'no'}
              onChange={handlesellChange}
            />&nbsp;No
          </label>
          </div>
      </div>
      </div>
      <br/>
      <div className='row'>
      <label >Type of purchase</label>
         <br/>
          <select
            name="purchaseType"
            value={formData.purchaseType}  style={{size:'25px', margin: '8px 0', marginRight: '10px',
            border: '1px solid #ccc', 
            boxSizing: 'border-box', 
            borderRadius: '4px',height:'42px',width:'40%'}}
            onChange={handleChange}
            required
          >
            <option value="">Please Select</option>
            <option value="Priority">Primary Residence</option>
            <option value="Prefer">Secondary Residence</option>
            <option value="Private">Investment</option>
            <option value="others">Not Sure</option>
          </select>
          
          </div><br/>
          <div>
            <label>Are you pre-qualified for a loan?</label><br/>
            <label>
            <input
              type="radio"
              name="qualify"
              value="yes"
              checked={formData.qualify === 'yes'}
              onChange={handlequalifyChange}
            />&nbsp;Yes
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="qualify"
              value="no"
              checked={formData.qualify === 'no'}
              onChange={handlequalifyChange}
            />&nbsp;No
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="qualify"
              value="cash buyer"
              checked={formData.qualify === 'cash buyer'}
              onChange={handlequalifyChange}
            />&nbsp;Cash buyer
          </label>
            </div><br/>  
            <div className='row'>
                <div className='col-lg-4'>
                    <label>Are you represented by a Realtor?</label>
                </div>
                <div className='col-lg-4'>
                <label>
            <input
              type="radio"
              name="repreal"
              value="Yes"
              checked={formData.repreal=== 'Yes'}
              onChange={handlereprealChange}
            />&nbsp;Yes
          </label>
                </div>
                <div className='col-lg-4'>
                <label>
            <input
              type="radio"
              name="repreal"
              value="no"
              checked={formData.repreal=== 'no'}
              onChange={handlereprealChange}
            />&nbsp;No
          </label>
                </div>
            </div><br/>
            <label>
            If Yes, please provide the name & company of your Realtor:
          <input
            type="text"
            name="realtoraddress"
            value={formData.realtoradrs}  style={{...inputStyle,width:'50%'}}
            onChange={handleChange}
            required
          />
        </label>
        <br/>
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
            value={formData. savingAccountNumber}  style={{...inputStyle,width:"100%"}} 
            onChange={handleChange}
            required
          />
        </label>
            </div>
         </div>
         <br/>
        {formErrors.firstName && <div style={{ color: 'red' }}>{formErrors.firstName}</div>}
        {formErrors.home && <div style={{ color: 'red' }}>{formErrors.home}</div>}
        {formErrors.sell && <div style={{ color: 'red' }}>{formErrors.sell}</div>}
        {formErrors.accountType && <div style={{ color: 'red' }}>{formErrors.accountType}</div>}
        {formErrors.qualify && <div style={{ color: 'red' }}>{formErrors.qualify}</div>}
        {formErrors.repreal && <div style={{ color: 'red' }}>{formErrors.repreal}</div>}
        {formErrors.mobile && <div style={{ color: 'red' }}>{formErrors.mobile}</div>}
        {formErrors.savingAccountNumber && <div style={{ color: 'red' }}>{formErrors.savingAccountNumber}</div>}
        
      <center>
        <button type="submit" style={{backgroundColor:'#1F51FF',borderRadius:'5px',padding:'5px'}}>Submit</button>
        </center>
      <br/>
      {/*<center>  <button type="button" onClick={downloadFormData} style={{marginLeft: '10px', backgroundColor:'#1F51FF',borderRadius:'5px',padding:'5px'}}>Download statement</button></center>*/}
      {formSubmitted && (
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

export default Form;
