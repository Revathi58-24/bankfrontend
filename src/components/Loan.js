import React,{useState} from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit';
import {MDBModal,MDBModalDialog, MDBModalContent,  MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Loan() {
   const handleLoan = () => {
        // Open the Account component in a new tab
        window.open('/loanform', '_blank');
      }
    const  handleHomeloan  = () => {
      // Open the Account component in a new tab
      window.open('/homeloan', '_blank');
    }
    const  handleAutoLoan  = () => {
      // Open the Account component in a new tab
      window.open('/autoloan', '_blank');
    }
    const handleMortgageLoan  = () => {
      // Open the Account component in a new tab
      window.open('/mortgage', '_blank');
    }
   
  return (
    <div>
    <div className="row" style={{ backgroundColor: "#8ed1fc", width: "1370px", height: "400px" }}>
      <div className="col-lg-7" style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
        <h1 style={{fontSize:'70px'}}><b>Loans</b></h1>
        <p style={{fontSize:'30px'}}><b>We lend. You borrow. The rest gets ironed out later.</b></p>
      </div>
      <div className="col-lg-5">
        <img src="https://www.avidiabank.com/wp-content/uploads/2021/06/oliver-2.png" alt='loan' width="300px" height="350px" style={{ marginTop: '50px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    </div>
    <br/>
    <div className='d-flex justify-content-center'>
     <div >
     <MDBCard style={{ maxWidth: '350px', marginBottom: '100px'}}>
     <MDBCardBody>
       <MDBCardTitle style={{color:'black'}}><b>Consumer Loans</b></MDBCardTitle>
       <MDBCardText style={{color:'gray'}}>
       Are you a person? Do you need a relatively large sum of money to make something happen? Great. You’ve already got two boxes checked.
       </MDBCardText>
       <MDBBtn style={{backgroundColor:'#D67229'}} onClick={handleLoan}>Apply for a consumer loan</MDBBtn>
     </MDBCardBody>
   </MDBCard></div> 
   <div style={{marginLeft:'20px'}}>
   <MDBCard style={{ maxWidth: '350px', marginBottom: '100px'}}>
     <MDBCardBody>
       <MDBCardTitle style={{color:'black'}}><b>Home Equity Loans</b></MDBCardTitle>
       <MDBCardText style={{color:'gray'}}>
       With a home equity loan or home equity line of credit (HELOC), you’ll borrow against the equity you have in your home. See if that makes sense for you.
       </MDBCardText>
       <MDBBtn style={{backgroundColor:'#D67229'}} onClick={handleHomeloan}>Apply for a home equity loan</MDBBtn>
     </MDBCardBody>
   </MDBCard>
   </div>
   </div>
   <div className='d-flex justify-content-center'>
     <div >
     <MDBCard style={{ maxWidth: '350px', marginBottom: '100px'}}>
     <MDBCardBody>
       <MDBCardTitle style={{color:'black'}}><b>Mortgages</b></MDBCardTitle>
       <MDBCardText style={{color:'gray'}}>
       If you’re buying a home, you want everything to be just right. In our eyes, that includes your mortgage rate quote. We’ll customize one for you.
       </MDBCardText>
       <MDBBtn style={{backgroundColor:'#D67229'}} onClick={handleMortgageLoan}>Apply for a mortgage</MDBBtn>
     </MDBCardBody>
   </MDBCard></div> 
   <div style={{marginLeft:'20px'}}>
   <MDBCard style={{ maxWidth: '350px',marginBottom: '100px'}}>
     <MDBCardBody>
       <MDBCardTitle style={{color:'black'}}><b>Auto Loans</b></MDBCardTitle>
       <MDBCardText style={{color:'gray'}}>
       Right now, in some lot or dealership, your next car is waiting to be purchased. We’ll help you finance it and get you behind the wheel.
       </MDBCardText>
       <MDBBtn style={{backgroundColor:'#D67229'}} onClick={handleAutoLoan}>Apply for a auto loan</MDBBtn>
     </MDBCardBody>
   </MDBCard>
   </div>
   </div>
   

   </div>
  );
}
