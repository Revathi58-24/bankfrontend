import React,{useState} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit';
import {MDBModal,MDBModalDialog, MDBModalContent,  MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter,
} from 'mdb-react-ui-kit';
import '../App.css';

const Service =()=>
{
    const [formData, setFormData] = useState({
        accountNumber: '',
        accountHolderName: '',
        accountType: '',
        mobile: '',
        address: '',
        bankCode: '',
        branchAddress: '',
        numChequeBooks: '',
        numLeavesPerBook: '',
        accnum:'',
        firstName:'',
        lastName:'',
        accountType2:'',
        streetAddress:'',
        streetAddress2:'',
        city:'',
        region:'',
        zipCode:'',
        country:'',
        mobile2:'',
        email:''
      });
      const [errors, setErrors] = useState({});
      const validateForm = () => {
        let errorString = '';
      
        // Account number validation
        const accountNumberRegex = /^5824\d{4}$/;
        if (!accountNumberRegex.test(formData.accountNumber)) {
          errorString += 'Account number must be 8 digits (ex: 5824XXXX)\n';
        }
      
        // Account holder name validation
        if (formData.accountHolderName.length < 3) {
          errorString += 'Account holder name must be at least 3 characters\n';
        }
      
        // Mobile number validation
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
          errorString += 'Mobile number must be 10 digits\n';
        }
      
        // Bank code validation
        const bankCodeRegex = /^EQ\d{4}$/;
        if (!bankCodeRegex.test(formData.bankCode)) {
          errorString += 'Bank code should start with EQ followed by 4 digits (ex: EQ1234)\n';
        }
        if (errorString) {
          alert(errorString); 
          return false; // Indicates there are errors
        }
      
        return true; // Indicates form is valid
      };
      const validateForm2 = () => {
        let errorString = '';
      //close account form
      const accountNumberRegex2 = /^5824\d{4}$/;
      if (!accountNumberRegex2.test(formData.accnum)) {
        errorString += 'Account number must be 8 digits (ex: 5824XXXX)\n';
      }
      const mobileRegex2 = /^[0-9]{10}$/;
        if (!mobileRegex2.test(formData.mobile2)) {
          errorString += 'Mobile number must be 10 digits\n';
        }
        if (formData.firstName.length < 3) {
          errorString += 'First name must be at least 3 characters\n';
        }
        const zipCodeRegex = /^\d{2}-\d{2}$/;
      if (!zipCodeRegex.test(formData.zipCode)) {
        errors.zipCode = "Zip code must be in the format ex-23-98.";
      }
      if (errorString) {
        alert(errorString); 
        return false; // Indicates there are errors
      }
    
      return true; // Indicates form is valid
    }; 
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Validate form fields
        const newErrors = {};
        if (validateForm()) {
          // Submit the form or do whatever you want with the data
          alert('Form submitted successfully!');
          console.log('Form submitted:', formData);
        }
       
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          // Submit the form or do whatever you want with the data
          console.log('Form submitted:', formData);
        }
      };
      const handleSubmit2 = (e) => {
        e.preventDefault();
      
        // Validate form fields
        const newErrors = {};
        if (validateForm2()) {
          // Submit the form or do whatever you want with the data
          alert('Form submitted successfully!');
          console.log('Form submitted:', formData);
        }
       
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          // Submit the form or do whatever you want with the data
          console.log('Form submitted:', formData);
        }
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: undefined });
      };
      //modal
      const [scrollableModal, setScrollableModal] = useState(false);
      const [scrollableMod, setScrollableMod] = useState(false);
      const inputStyle = {
        width: '100%', // Make the input fields take up 100% of the available width
        padding: '8px', // Add some padding for better spacing
        margin: '8px 0', // Add margin to create space between input fields
        border: '1px solid #ccc', // Add a 1-pixel solid border around the input fields
        boxSizing: 'border-box', // Ensure that padding and border are included in the element's total width and height
        borderRadius: '4px', // Add rounded corners to the input fields
      };
      const formStyle = {
       
        //backgroundPosition: 'center center',
        border: '2px solid #ddd', // Border style
        padding: '20px', // Padding around the form
        maxWidth: '600px', // Maximum width of the form
        margin: '0 auto', // Center the form horizontally
      };
      //transaction

      const handlePay = () => {
        // Open the Account component in a new tab
        window.open('/application', '_blank');
      }
    return(
       <div>
        <div className="row" style={{ backgroundColor: "#8ed1fc", width: "1370px", height: "600px" }}>
      <div className="col-lg-7" style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
        <h5 style={{fontSize:'70px',margin:'5px'}}><b>Services</b></h5>
        <p style={{fontSize:'30px',margin:'10px'}}><b>The shortest distance between your business and your bank.</b></p>
      <p style={{ margin: '20px' }}>We love when you visit, but that doesn’t usually fit in your schedule. So, our eDeposit services let you deposit checks right from your office. With a secure internet connection, scan your checks using the scanner we lend you* and send the images our way. There’s no need to make photocopies because you’ll have immediate access to images of the fronts and backs of your checks. It’s not magic. It’s the internet.</p>
      </div>
      <div className="col-lg-5">
        <img src="https://www.avidiabank.com/wp-content/uploads/2021/07/characters_Ella_02_table-1024x1024.png" alt='loan' width="550px" height="500px" style={{ marginTop: '50px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    </div><br/><br/>
         <br/><br/><br/>
         <div className="row ">
        <div className="col-lg-7 text-center">
            <div>
            <h4><b>Considerably more comfortable than keeping<br/> your money under your mattress. </b></h4>
            <p>
Having money is a good thing. Having a safe place to keep<br/> that money where it won’t ruin your posture is another good <br/>thing. </p>
<div className="bottom-button-container">
        <a href='./account'><button className="bordered-button" >Open a Savings Account</button></a>
      </div>
        </div></div>
        <div className="col-lg-5">
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/07/props_11_Vault-1-1024x755.png" alt='p2' width="420px" height="420px"/>
        </div>
    </div><br/><br/><br/>
        <div className="row d-flex justify-content-center" >
   <div className="col-lg-5 text-center" >
    <img src="https://clipart-library.com/img/320325.jpg"  alt='ch' height='250px' width='250px'/>
   </div>
   <div className="col-lg-7">
    <h4><b>Please note</b></h4>
    <p>▪️Your request will be processed instantly once your mobile number is authenticated
    <br/>▪️A personalised cheque book with 20 leaves will be delivered to your communication<br/> address in 4-5 working days from the date of request
    <br/>▪️Please ensure there is only one active cheque book request for your account at a time
   <br/> ▪️Your request cannot be processed, if you have more than 90 unused cheque leaves <br/>for your account </p>
   <h2 onClick={() => setScrollableModal(!scrollableModal)} 
     onMouseOver={() => document.body.style.cursor='pointer'} 
     onMouseOut={() => document.body.style.cursor='default'}>TO GET CHEQUE<br/><b><span style={{fontFamily:'cursive',color:'#D67229'}}>CLICK Me</span></b></h2>

<MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
  <MDBModalDialog scrollable>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle> Cheque Book Request</MDBModalTitle>
        <MDBBtn
          className='btn-close'
          color='none'
          onClick={() => setScrollableModal(!scrollableModal)}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
      <form>
        <div>
        <div>
          <label>Account number:
          <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
    onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'60px',borderRadius:'10px', height:'40px',width:'50%'}}
          required
        />
       {/* {errors.accountNumber && <div style={{ color: 'red' }}>{errors.accountNumber}</div>}*/}
        </label>
        </div><br/>
        <div>
          <label>Account holder Name:
          <input
          type="text"
          onChange={handleChange}
          name="accountHolderName"
          value={formData.accountHolderName}
          style={{border:'1px solid #ccc',marginLeft:'20px',borderRadius:'10px', height:'40px',width:'50%'}}
          required
        /></label>
        </div><br/>
        <div>
          <label>Account type:
          <select
            name="accountType"
            onChange={handleChange}
             style={{size:'25px', margin: '8px 0', marginLeft: '90px',
            border: '1px solid #ccc', 
            boxSizing: 'border-box', 
            borderRadius: '4px'}}
            required
          >
            <option value="">Select</option>
            <option value="Savings a/c">Savings a/c</option>
            <option value="Current a/c">Current a/c</option>
            
          </select>
        </label>
        </div><br/>
        <div>
          <label>Mobile:
          <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'140px',borderRadius:'10px', height:'40px',width:'50%'}}
          required
        /></label>
        </div><br/>
        <div>
          <label>Applicant full Address:
          <textarea
         
          name="address"
         value={formData.address}
         onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'160px',borderRadius:'10px'}}
          required
        />
        </label>
        </div><br/>
        <div>
          <label>Bank Code:
          <input
          type="text"
          name="bankCode"
          value={formData.bankCode}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'110px',borderRadius:'10px', height:'40px',width:'50%'}}
          required
        /></label>
        </div><br/>
        <div>
          <label>Branch Address:
          <textarea
          name="branchAddress"
         value={formData.branchAddress}
         onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'30px',borderRadius:'10px'}}
          required
        />
        </label>
        </div><br/>
        <div>
          <label>Number of cheque books required</label>
        <select
            name="noofch" 
            onChange={handleChange}
            style={{size:'25px', margin: '8px 0', marginLeft: '30px',
           border: '1px solid #ccc', 
           boxSizing: 'border-box', 
           borderRadius: '4px'}}
            required
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {/* Add more states as needed */}
          </select>
        </div><br/>
        <div>
          <label>Number of leaves per book</label>
        <select
            name="nooflv" 
            onChange={handleChange}
            style={{size:'25px', margin: '8px 0', marginLeft: '90px',
           border: '1px solid #ccc', 
           boxSizing: 'border-box', 
           borderRadius: '4px'}}
            required
          >
            <option value="">Select</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">50</option>
           
            {/* Add more states as needed */}
          </select>
        </div>
        
        </div>
      </form>
       
       
        
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
          Close
        </MDBBtn>
        <MDBBtn onClick={handleSubmit}>Request</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal></div>
   </div>
   <br/><br/>
   <div className='row '>
    <div className='col-lg-6 text-center'><br/><br/><br/>
        <h1><b>Do you want to<br/> Close Account.... <span>&#8594;</span> </b></h1>
    </div>
    <div className='col-lg-6'>
   <div style={{textAlign: 'center'}}>
   
   <img src="https://www.thesun.co.uk/wp-content/uploads/2018/05/nintchdbpict000308866028.jpg?w=620" onClick={() => setScrollableMod(!scrollableMod)} alt="close" width="600px" height="400px" style={{display: 'inline-block',margin:' 0 auto',
   transition: 'transform 0.2s', // Add a transition for smooth effect
   transform: scrollableMod ? 'scale(0.9)' : 'scale(1)' }}
   onMouseOver={() => document.body.style.cursor='pointer'} 
   onMouseOut={() => document.body.style.cursor='default'}
  />
  

<MDBModal show={scrollableMod} setShow={setScrollableMod} tabIndex='-1'>
  <MDBModalDialog scrollable>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle> Close Account</MDBModalTitle>
        <MDBBtn
          className='btn-close'
          color='none'
          onClick={() => setScrollableMod(!scrollableMod)}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
      <form style={{formStyle}}>
        <div>
          <label style={{textAlign:'left',display: 'block'}}>Name:</label>
          <div className="row">
            <div className="col-lg-6">
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
            </div>
            <div className="col-lg-6">
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
            </div>
            <div style={{ marginBottom: '10px',fontSize:'12px' }}> First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name</div>
      
          </div>
        <div className="row">
          <div className="col-lg-6">
          <label style={{textAlign:'left',display: 'block'}}>Account number:
          <input
          type="text"
          id="accnum"
          name="accnum"
         value={formData.accnum}
         onChange={handleChange}
          style={inputStyle}
          required
        /></label></div>
        <div className="col-lg-6">
        <label style={{textAlign:'left',display: 'block'}}>Account type:
          <select
            name="accountType2"
             style={inputStyle}
             value={formData.accountType2}  onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Mr">Savings a/c</option>
            <option value="Mrs">Current a/c</option>
            
          </select>
        </label>
        </div>
        </div>
        <div>
        <label style={{textAlign:'left',display: 'block'}}>
          Address:
          <div style={{ display: 'flex',justifyContent: 'space-between'}}>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}  style={{...inputStyle,marginRight:'14px'}}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="streetAddress2"
            value={formData.streetAddress2}  style={{...inputStyle,marginLeft:'14px'}}
            onChange={handleChange}
          />
          </div>
          <div style={{ marginBottom: '10px',fontSize:'12px' }}>Street Address &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Street Address Line 2</div>
        <div style={{ display: 'flex',justifyContent: 'space-between'}}>
        <input
            type="text"
            name="city"
            value={formData.city}  style={{...inputStyle,marginRight:'14px'}}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="region"
            value={formData.region}  style={{...inputStyle,marginLeft:'14px'}}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px',fontSize:'12px' }}>City &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; State / Province</div>
       <div style={{ display: 'flex',justifyContent: 'space-between'}}>
       <input
            type="text"
            name="zipCode"
            value={formData.zipCode}  style={{...inputStyle,marginRight:'14px'}}
            onChange={handleChange}
            required
          />
          <select
            name="country"
            value={formData.country}  style={{...inputStyle,marginLeft:'14px'}}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            {/* Add more states as needed */}
          </select>
       </div>
       <div style={{ marginBottom: '10px',fontSize:'12px' }}>Postal / Zip Code  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country</div>
        </label>
      </div>
      <div className="row">
        <div className="col-lg-6">
        <label style={{textAlign:'left',display: 'block'}}>
          Mobile: 
          <input
            type="tel"
            name="mobile2"
            value={formData.mobile2}  style={{...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label>
        </div>
        <div className="col-lg-6">
        <label style={{textAlign:'left',display: 'block'}}>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}  style={{ ...inputStyle,width:'100%'}}
            onChange={handleChange}
            required
          />
        </label>
        </div>
      </div>
        </div>
        </form>
    
        
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={() => setScrollableMod(!setScrollableMod)}>
          Close
        </MDBBtn>
        <MDBBtn onClick={handleSubmit2}>Submit</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal></div></div>
</div>
<br/><br/>
<div className='row '>
<div className='col-lg-6'>
   <div style={{textAlign: 'center'}}>
    <img src="https://www.avidiabank.com/wp-content/uploads/2021/07/beach_max.png" height="450px" width="450px" alt="pay"/>
    </div>
    </div>
    <div className='col-lg-6 text-center'><br/><br/><br/><br/><br/>
        <h3><b>"Empower your finances with a click.<br/> Make transactions anytime, anywhere."</b></h3>
       <br/> <button className="bordered-button" onClick={handlePay}>Make Transaction</button>
    </div>
    
    </div>
       </div>
    );
}
export default Service;