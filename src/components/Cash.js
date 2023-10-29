import React from "react";

export default function Cash(){
    return(
        <div>
 <div className="row" style={{ backgroundColor: "#8ed1fc", width: "1370px", height: "600px" }}>
      <div className="col-lg-7" style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
        <h5 style={{fontSize:'70px',margin:'5px'}}><b>Cash Management</b></h5>
        <p style={{fontSize:'30px',margin:'10px'}}><b>From cash collection services to electronic transfers and fraud protection.</b></p>
      <p style={{ margin: '20px' }}>“Cash management” is bank-speak for all the different ways we can help you manage, monitor and move the money in your accounts. Some services can maximize your earnings. Others can get your bills paid on time. In all cases, we make sure you have to give as little thought as possible to the process. Because that’s why you choose a bank in the first place.</p>
      </div> 
      <div className="col-lg-5">
        <img src="https://www.avidiabank.com/wp-content/uploads/2021/07/props_11_Vault-1-1024x755.png" alt='loan' width="550px" height="500px" style={{ marginTop: '50px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    </div><br/><br/>
    <div className="row">
        <div className="col-lg-7 d-flex align-items-center justify-content-center">
            <div>
            <h1 >Investment and <br/>Information<br/> Management</h1>
            <p>Among other things, at the end of every day, you can automatically <br/>sweep funds into investment accounts or lines of credit. </p>
        </div></div>
        <div className="col-lg-5">
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/09/moneyplant.jpg" alt='p1' width="300px" height="420px"/>
        </div>
    </div><br/><br/><br/>
    <div className="row">
    <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/09/balancesandaccounts.jpg" alt='p1' width="400px" height="420px"/>
        </div>
        <div className="col-lg-7 d-flex align-items-center justify-content-center">
            <div>
            <h1 >Cash Collection and<br/>Concentration</h1>
            <p>To make balances and accounts easier to keep track of, we offer a <br/>few different ways to consolidate and streamline your cash.  </p>
        </div></div>
    </div>
    <br/><br/><br/>
    <div className="row">
        <div className="col-lg-7 d-flex align-items-center justify-content-center">
            <div>
            <h1 >Disbursements</h1>
            <p>Just about everything these days can be done electronically. <br/>Accounts payable is no different.  </p>
        </div></div>
        <div className="col-lg-5">
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/09/disbursements.jpg" alt='p1' width="400px" height="420px"/>
        </div>
    </div>
    <br/><br/><br/>
    <div className="row">
    <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img src="https://www.avidiabank.com/wp-content/uploads/2021/09/frauddetection.jpg" alt='p1' width="480px" height="440px"/>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div>
            <h1 >Account Management</h1>
            <p>No one likes the “F” word. But fraud is a real problem for <br/>businesses. Here’s what we can do to help you detect and prevent<br/> it. </p>
        </div></div>
    </div>
    <br/><br/>
        </div>
    );
}