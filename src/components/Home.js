import React,{useState} from 'react';
//import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit';
import Chatbox from './Chatbox';
import '../App.css';
import Popup from './Popup';
import Account from './Account';

//class Home extends React.Component
const Home=()=>
 {
 
  const handleOpenAccount = () => {
     //Open the Account component in a new tab
    window.open('/account', '_blank'); }
  

    return (
      <div className="home-container">
      <Carousel showStatus={false} autoPlay interval={2000} infiniteLoop>
        <div className='carousel 1'>
        <div className="first-row">
          <div className="image-container">
            <img
              src="https://www.avidiabank.com/wp-content/uploads/2021/05/avidia-home.png"
              alt="Avidia Bank"
              height="590px"
            />
          </div>
          <div className="text-container">
            <h1>It's your money – <br />let's find a way</h1>
            <p>We're dedicated to helping you find solutions that put you in <br />charge of every aspect of your financial life.</p>
          </div>
        </div>
        </div>
        <div className='carosel 2'>
        <div className="first-row">
          <div className="image-container">
            <img
              src="https://www.avidiabank.com/wp-content/uploads/2021/09/characters_Lexie_01_chair-1-868x1024.png"
              alt="Avidia Bank"
              height="590px"
            />
          </div>
          <div className="text-container">
            <h1 style={{fontSize:'50px'}}>Free ATMs <br/>anywhere. Just<br/> our way of saying,<br/> “Please bank with <br/>us.” </h1>
           
          </div>
        </div>
        </div>
        <div className='carosel 3'>
        <div className="first-row">
          <div className="image-container">
            <img
              src="https://www.avidiabank.com/wp-content/uploads/2021/07/props_48_storefront-1024x1024.png"
              alt="Avidia Bank"
              height="590px"
            />
          </div>
          <div className="text-container">
            <h1 style={{fontSize:'50px'}}>We loan money to <br/>people who need<br/> more money to run their<br/> businesses. </h1>
           
          </div>
        </div>
        </div>
        <div className='carosel 2'>
        <div className="first-row">
          <div className="image-container">
            <img
              src="https://www.avidiabank.com/wp-content/uploads/2021/07/characters_Oliver_02_ThumbsUp-1024x875.png"
              alt="Avidia Bank"
              height="560px"
            />
          </div>
          <div className="text-container">
            <h1 style={{fontSize:'50px'}}><b>Checking Accounts</b> </h1>
            <p><b>Don’t worry. No writing of actual checks required.</b></p>
           
          </div>
        </div>
        </div>
        </Carousel>
        <div className="second-row">
          <div className="secndimg">
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/05/Avidia_00_HTG_01-1024x620.png" alt="pic" width="1350px" />
            <div className="overlay-text">
                <h1>What we value most.<br/></h1>
              <p>When it comes to your banking information, <br/>we’re overprotective. Whether your bank account<br/> involves personal funds, business funds, credit cards or<br/> credit lines or loans, maintaining the confidentiality <br/>of your information, account history and transactions<br/> is always our first priority. </p>
            </div>
          </div>
        </div><br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',height:'800px',width:'1350px' }}>
                <div class="left-half"  style={{background: '#CDF0FF',gridColumn: '1',display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',paddingTop: '50px' }}>
                   <h1 ><b>Personal Banking</b></h1>
                   <p>Save money. Spend money.<br/>Earn money. Borrow money.<br/>We’ve got you covered.</p>
                   <MDBCard style={{ maxWidth: '350px', marginBottom: '100px'}}>
      <MDBCardBody>
        <MDBCardTitle style={{color:'black'}}><b>Want an online
checking account?</b></MDBCardTitle>
        <MDBCardText style={{color:'gray'}}>
        eChecking offers a debit card with Avidia Rewards+, no ATM fees and a high interest rate. <br/>Easy. Efficient. Effective.
        </MDBCardText>
        <MDBBtn style={{ backgroundColor: '#D67229' }} onClick={handleOpenAccount}>
        Open an account
      </MDBBtn>
      
      </MDBCardBody>
    </MDBCard>
    <img src="https://www.avidiabank.com/wp-content/uploads/2021/05/personal-and-business-banking.png" alt="Centered Image" style={{ position: 'absolute', top:'250%',bottom: '0', left: '50%', transform: 'translate(-50%, 50%)', maxWidth: '75%', maxHeight: '75%' }} />
                </div>
                <div class="right-half"  style={{background: '#001540',gridColumn: '2',color:'white',display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' ,paddingTop: '50px'}}>
                   <h1><b>Business Banking</b></h1>
                   <p>Make money. Spend money.<br/>Manage money. Borrow money.<br/>We’ve got you covered</p>
                   <MDBCard style={{ maxWidth: '350px'}}>
      <MDBCardBody>
        <MDBCardTitle style={{color:'black'}}><b>Looking for a loan?</b></MDBCardTitle>
        <MDBCardText style={{color:'gray'}}> We have a number of options to fit your needs.</MDBCardText>
      <a href="/loan"> <MDBBtn style={{backgroundColor:'#D67229'}}   >To get a loan</MDBBtn></a> 
      </MDBCardBody>
    </MDBCard>
                </div>
         </div><br/><br/><br/>
         <div className='row '>
<div className='col-lg-6'>
   <div style={{textAlign: 'center'}}>
    <img src="https://www.avidiabank.com/wp-content/uploads/2021/09/characters_Oliver_01_Hug-1-962x1024.png" height="500px" width="500px" alt="pay"/>
    </div>
    </div>
    <div className='col-lg-6 text-center'><br/><br/><br/><br/><br/>
        <h3><b>"It's not how much money you make,<br/> but how much money you keep,<br/> how hard it works for you,<br/> and how many generations you keep it for."</b></h3>
       <br/> 
    </div>
    
    </div>
         <h3 style={{marginLeft:'110px'}}><b>Click here to learn about Cash Management</b></h3>
        <br/> <div className="bottom-button-container">
        <a href='./cash'><button className="bordered-button" >Check out Cash Management</button></a>
      </div><br/><br/>
         <Chatbox /> 
       
</div>
    );
  }

export default Home;
