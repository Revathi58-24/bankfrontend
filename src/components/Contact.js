import React, { useState } from "react";

const Contact =()=>
{
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    console.log('Form submitted:', formData);
  };
    return(
        <div>
          <div className="row" style={{ backgroundColor: "#8ed1fc", width: "1370px", height: "550px" }}>
      <div className="col-lg-7" style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
        <h1 style={{fontSize:'60px'}}><b>Oh, hello. Welcome to Equinox. </b></h1>
        <p style={{fontSize:'30px'}}><b>Thanks for joining us at Equinox Bank! </b></p>
        <p style={{marginLeft:'10px'}}>The hard part is over, so take a deep breath and let it out; we’ve got you from here! To make the most of your Equinox Bank account, check out some resources below including our switch kit to make switching bills and transactions easier, mobile banking app and mobile banking digital academy.</p>
      </div>
      <div className="col-lg-5">
        <img src="https://www.avidiabank.com/wp-content/uploads/2021/07/max_shades-1-1024x463.png" alt='loan' width="300px" height="350px" style={{ marginTop: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    </div>  
    <div className="row" style={{marginTop:'30px'}}>
        <div className="col-lg-5" >  
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/09/characters_Lexie_01_chair-1-868x1024.png" alt="hi" width="490px" height="600px" />
        </div>
        <div className="col-lg-7" style={{marginTop:'100px'}}>
            <h1><b>Everything all in one place? Magic. </b></h1>
            <p>
   ▪ Check out our handy dandy Switch Checklist to easily switch your bills and automated transactions to your new account.
  <br/> ▪  Watch how to videos and more through our Mobile Banking Digital Academy.
  <br/> ▪ Follow us on social!
  <br/> ▪ Check up on your financial wellness using the free Financial Education Center, featuring on-demand courses about saving money, retirement, starting a business, and more.
  <br/> ▪ Find additional support and FAQ's.
</p>
        </div>
    </div>
    <div style={{background:'#001540'}}><br/>
    <form onSubmit={handleSubmit} style={{ margin: '0 auto',border: '3px solid #ccc', padding: '20px', backgroundColor: 'white',borderRadius:'10px' ,width:'1000px',height:'800px',alignItems:'center'}}>
      <br/><div style={{marginLeft:'30px'}}>
      <h1 style={{color:'black',fontSize:'50px'}}><b>Contact Us!</b></h1>
      <p>Have questions about your account, how to set up mobile features or any<br/> other issues? Let us know!</p>
      </div>
      <br/><br/><br/>
      <div style={{textAlign: 'center', marginBottom: '10px'}}>
        <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'100px',borderRadius:'10px', height:'40px'}}
          required
        /></div>
      <br/>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'100px',borderRadius:'10px', height:'40px'}}
          required
        />
      </div><br/>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'140px',borderRadius:'10px', height:'40px'}}
          required
        />
      </div><br/>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'70px',borderRadius:'10px', height:'40px'}}
          required
        />
      </div><br/>
      <div>
        <label htmlFor="message">How can we help you?</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{border:'1px solid #ccc',marginLeft:'30px',borderRadius:'10px'}}
          required
        />
      </div><br/><br/>
      <div>
        <button type="submit" style={{ backgroundColor: '#D67229', color: 'white' ,height:'30px',width:'90px',borderRadius:'5px'}}>
          Submit
        </button>
      </div>
      </div>
    </form><br/>
    </div>
    </div>
   
    );
}
export default Contact;