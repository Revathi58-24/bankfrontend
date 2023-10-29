import React from "react";
import _ from 'lodash';

class Application extends React.Component{
	
    constructor(props) {
      super(props);
     
     
  
      //Initializing State
      this.state = {
        route: "form",
       
        fromAccount:0,
        toAccount:0,
        transferType: "",
        ammount: 0,
        memo:{
          text:"",
          len:0
        },
        fromAccounts:[
            {"id":"154","amount":1212.0,"name":"x's Account"},
            {"id":"164","amount":1412.0,"name":"Account 1"},    
            {"id":"174","amount":1612.0,"name":"Account 2"},
            {"id":"184","amount":1812.0,"name":"Account 3"},
            {"id":"194","amount":1912.0,"name":"Account 4"},
            {"id":"204","amount":2012.0,"name":"Account 5"}   
        ],
        toAccounts:[
            {"id":"164","amount":1412.0,"name":"Account 1"},    
            {"id":"174","amount":1612.0,"name":"Account 2"},
            {"id":"184","amount":1812.0,"name":"Account 3"},
            {"id":"194","amount":1912.0,"name":"Account 4"},
            {"id":"204","amount":2012.0,"name":"Account 5"}   
        ],
        startDate:this.getToday(),
        endDate:null,
        frequency:null,
        modal:false,
        form: [],
        errors:[],
        transactionHistory: []
      };
      // Bind the functions
    this.showModal = this.showModal.bind(this);
    }
    showModal() {
      this.setState({ modal: !this.state.modal });
    }
      
      //Helper Functions
      changeFrom(event){
      const fromAccount = event.target.value;
      let toAccounts = [...this.state.fromAccounts];
      toAccounts = _.without(toAccounts,_.find(toAccounts,["id",fromAccount]));
      const toAccount = (fromAccount === this.state.toAccount) ? 0 : this.state.toAccount;
      this.setState({fromAccount,toAccounts, toAccount});
    }
      changeTo(event){this.setState({toAccount: event.target.value});}
      changeAmmount(event){this.setState({ammount: event.target.value});}
      changeMemo(event){this.setState({memo:{text:event.target.value,len:event.target.value.length}});}
      changeTransfer(event){this.setState({transferType: event.target.value, endDate:null, frequency:null});}
      changeFrequency(event){this.setState({frequency: event.target.value});}
      changeStartDate(event){this.setState({startDate: event.target.value});}
      changeEndDate(event){this.setState({endDate: event.target.value});}
      showModal(modal){this.setState({modal})}
      confirmSubmit(){this.setState({modal:false, route:"confirm" })}
    restart(){this.setState({
      route:"form",
      fromAccount:0,
      toAccount:0,
      transferType: "",
      ammount: 0,
      memo:{
        text:"",
        len:0
      },
      startDate:this.getToday(),
      endDate:null,
      frequency:null,
      modal:false,
      form: [],
      errors:[]
    })}
    setRoute(route){this.setState({route})}
      
    validate(){
      let errors = {};
      let valid = true;
      if(!this.state.fromAccount) errors.fromAccount="From Account Field is Required";
      if(!this.state.toAccount) errors.toAccount="To Account Field is Required";
      if(!this.state.startDate) errors.startDate="From Account Field is Required";
      if(!this.state.ammount) errors.ammount="Ammount Field is Required";
      if(!this.state.transferType){
        errors.transferType="Transfer Type Field is Required";
      }else if(this.state.transferType==="Automatic Transfer"){
        if(!this.state.endDate) errors.endDate="End Date Field is Required";
        if(!this.state.frequency) errors.frequency="Frequency Field is Required";
      }
      
      if (Object.getOwnPropertyNames(errors).length>0) valid = false;
      this.setState({errors})
      console.log(errors);
      return valid;
    }
    
      getToday(){
          let today = new Date();
          let dd = today.getDate();
          let mm = today.getMonth()+1; //January is 0!
          let yyyy = today.getFullYear();
  
          if(dd<10) dd='0'+dd;
          if(mm<10) mm='0'+mm;
  
          today = yyyy+'-'+mm+'-'+dd;
          
          return today;
      }
      
      //Handle Form Submitting
      handleSubmit(event){ 
          event.preventDefault(); 
      if(!this.validate()) return;
      const newTransaction = {
        fromAccount: this.state.fromAccount,
        toAccount: this.state.toAccount,
        transferType: this.state.transferType,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        frequency: this.state.frequency,
        amount: this.state.ammount,
        memo: this.state.memo.text
      };
  
      // Update transaction history with the new transaction
      this.setState(prevState => ({
        transactionHistory: [...prevState.transactionHistory, newTransaction]
      }));
          this.setState({
              modal:true,
              form:[
                  {"From Account": this.state.fromAccount },
                  {"To Account": this.state.toAccount },
                  {"Transfer Type": this.state.transferType },
                  {"Date" : this.state.startDate },
                  {"End Date" : this.state.endDate },
                  {"Frequency": this.state.frequency },
                  {"Ammount": "$"+this.state.ammount },
                  {"Memo": this.state.memo.text }
              ]
          }) 
      }
     
      
      //Helper Render Function
      showHiddenFields(radio){
          if(radio==="One Time Transfer"){
              return (
                  <fieldset className={(this.state.errors.startDate)?"error" : ""}>
                      <label className="main-label">Transfer Date</label>
                      <input type="date" value={this.state.startDate} onChange={this.changeStartDate.bind(this)}/>
                      <i className="fa fa-calendar fa-fw"></i>
                  </fieldset>
              );
          }else if(radio==="Automatic Transfer"){
              return (
                  <HiddenFields startDate={this.state.startDate} endDate={this.state.endDate} frequency={this.state.frequency}
                      changeStartDate={this.changeStartDate.bind(this)} 
                      changeEndDate={this.changeEndDate.bind(this)} 
                      changeFrequency={this.changeFrequency.bind(this)} errors={this.state.errors}/>
              );
          }
      }
      
     /* renderModal(){
          if(!this.state.modal) return;
      console.log("Showing Modal");
          return(
              <div className="modalWindow">
                  <div className="modal-content">
                      <a href="#" className="close-button" onClick={() => {this.showModal(false)}} />
                      <Verify form={this.state.form} showModal={this.showModal.bind(this)} confirmSubmit={this.confirmSubmit.bind(this)}/>
                  </div>
              </div>
          );
      }*/
      renderModal() {
        if (!this.state.modal) return null; // Return null if modal is not visible
        return (
          <div className="modalWindow">
            <div className="modal-content">
              <a href="#" className="close-button" onClick={() => { this.showModal(false) }}>&times;</a>
              <Verify form={this.state.form} showModal={this.showModal.bind(this)} confirmSubmit={this.confirmSubmit.bind(this)} />
            </div>
          </div>
        );
      }
      handleCancel() {
        this.setState({ modal: false });
      }
      
      router(route){
          if(route==="form"){
              return(
         <center><div >
            <h3 style={{ padding:'0 20px',
  margin: '1.5em 0 1em 0',
  textAlign: 'left',
  color: '#004B8C'}}>Transfer Funds</h3>
            <form onSubmit={this.handleSubmit.bind(this)} >
              <Select onChange={this.changeFrom.bind(this)} account={this.state.fromAccount} title="From account" 
                css_class={(this.state.errors.fromAccount)?"half-width error" : "half-width"} serverResponse={this.state.fromAccounts}/>
              <Select onChange={this.changeTo.bind(this)} account={this.state.toAccount} title="To account" 
                css_class={(this.state.errors.toAccount)?"half-width right error" : "half-width right"} serverResponse={this.state.toAccounts}/>
              <fieldset className={(this.state.errors.transferType)?"half-width error" : "half-width"}>
                <label className="main-label">Transfer Type</label>
                <input type="radio" name="rad_transferType" id="radTransferType_ott" value="One Time Transfer" 
                  onClick={this.changeTransfer.bind(this)}/>
                <label htmlFor="radTransferType_ott">One-Time Transfer</label><br/>
                <input type="radio" name="rad_transferType" id="radTransferType_at" value="Automatic Transfer" 
                  onClick={this.changeTransfer.bind(this)}/>
                <label htmlFor="radTransferType_at">Automatic Transfer</label>
              </fieldset>
              <fieldset className={(this.state.errors.ammount)?"half-width right error" : "half-width right"}>
                <label  className="main-label">Amount</label>
                <i className="fa fa-dollar fa-fw"></i>
                <input type="number" value={this.state.ammount} onChange={this.changeAmmount.bind(this)}/>
              </fieldset>
              {this.showHiddenFields(this.state.transferType)}
              <Memo onChange={this.changeMemo.bind(this)} memo={this.state.memo} maxlen={120}/>
              <fieldset className="button-holder">
              
                <input type="submit" className="button CTAButton" value="Next" />
              </fieldset>
            </form>
          </div></center> 
              );
          } else if (route === "confirm"){
              return <Confirm form={this.state.form} setRoute={this.restart.bind(this)}/>
      }
      }
      
      render(){
        
      console.log(this.state);
          return (
              <div className="divMain">
                 {/* <Header setRoute={this.setRoute.bind(this)}/> */}
                  <section className="mainSection">
                      {this.router(this.state.route)}
                  </section>
                  <input type="checkbox" name="chkOpenMenu" id="chkOpenMenu" className="hide" />
                  <label htmlFor="chkOpenMenu" className="lblOpenMenu smallDisplay">
                      <span className="openItem"></span>
                      <span className="closeItem"></span>
                  </label>
                  <input type="checkbox" name="chkShowFooter" id="chkShowFooter" defaultChecked="true" className="hide" />
                  {this.renderModal()}
                  <TransactionHistory history={this.state.transactionHistory} />
                  <style jsx>
    {`@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:700');


body{
  overflow-x: hidden;
}


/*** Menu **/

.menu{
	position:relative;
	background-color:#004B8C;

  width:100%;

	display:inline-block;
  width: 200%;
  position: relative;
  left: -50%;
	
}

.menu:after{
	content:"";
	display:block;
	position:absolute;
	width:3px;
	background-color:#FFC107;
	height:100%;

	top:0;
	right:3%;
}

.menu:before{
	content:"";
	display:block;
	position:absolute;
	width:3px;
	background-color:RED;
	height:100%;

	top:0;
	right:2%;
}

.menu .title{
	color:#fff;
	font-size:2rem;
  font-family: 'Open Sans', sans-serif;
  margin:0.8em 0 0 0;
}

.menu ul{
	list-style:none;
	margin:20px 0 0 0;
	padding:0;
	text-align:center;
}

.menu li{
	display:inline-block;
	text-align:center;
  width:150px;
}

.menu li:hover{
	background-color:#0F74CC;
}

.menu a, .menu label{
	text-decoration:none;
	color:WHITE;
	display:inline-block;
  cursor: pointer;
	padding-top:2px;
	padding-bottom:2px;

	position:relative;
	min-width:100px;
	width:auto;

	height:30px;
	line-height:30px;
  cursor: pointer;
  padding: 2px 10px;
}



#chkMenu{
	display:none;
}

.btnMenu{
	display:none;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1;
}
.btnMenu i{cursor:pointer}


@media only screen and (max-width: 520px){

	p{
		text-align:justify;
		text-indent: 1.5rem;
		font-size:.8rem;
	}

	.menu:after{
		width:100%;
		height:2px;

		top:45px;
		left:0;
	}

	.menu:before{
		width:100%;
		height:2px;

		top:40px;
		left:0;
	}


	.menu .title{
		
		position:absolute;
		top:0;
		left:0;
	}


	.btnMenu{
		display:inline-block;
	}

	.mainContainer{
		margin-top:50px;
	}


	.menu{

		position:fixed;
		top:0;
		

		z-index:10;

		
		width:50%;
		min-width: 250px;

		height:100%;
		

		transition: left 500ms linear;
		-webkit-transition: left 500ms linear;
    box-shadow: 2px 0 10px rgba(0,0,0,1);
	}

	#chkMenu + .menu{
		

		left:-90%;
	}

	#chkMenu:checked + .menu{
		
		left:0;
	}

	.menu ul{
		margin-top:50px;
	}

	.menu li{
		display:block;
	}
	
	.menu a{
		width:80%;
		text-align:left;
	}
  
  p{
    text-align: left;
    text-indent: inherit;
    font-size: 1em;
  }
}




/* [END] Added by FGP on 10:08am Mar 3 2016*/



main{
	width:970px;
	max-width:100%;
	
	position:relative;
	
	text-align:left;
	display:inline-block;
	
	background-color:WHITE;
	
	min-height: 700px;
	
	margin-bottom:30px;
}


/******************************************************************/
form{
	width:100%;	
	font-size:16px;
	text-align:left;
	padding: 20px 20px;
}
form, form *{box-sizing: border-box;}
label{
	font-weight:bold;
  color:#004B8C;
  cursor: pointer;
}
.main-label{
	display:block;
	margin: 25px 0 0 0;
}
input[type=text],
input[type=number],
input[type=date],
textarea,
select{
	width:100%;
	display:block;
	padding:8px;
	margin: 5px 0 0 0;
   
	font-size:16px;
  transition: border-color 1s ease;  
  border: 1px solid #ccc;
}
input[type=number],input[type=date],select{padding-left:30px;}
option{position: relative}
input[type=radio] {
  margin: 0 10px 0 0;
  display: inline-block;
  vertical-align:middle;
}
input[type=radio] + label {
  display: inline-block;
  vertical-align:middle;
}
textarea{padding-bottom:20px;}
textarea+span{
	position:absolute;
	bottom: 8px;
	right:8px;
	color:rgb(0,120,0);
}
#radTransferType_ott{
	margin-top: 5px;
}
fieldset{
	border:none; 
	padding:0;
	margin:0;
	position:relative;
}
fieldset .fa{
	position:absolute;
	bottom: 11px; left:8px;
	text-align:center;
}
input[type=date]~.fa{bottom:13px;}
.half-width{
	display:inline-block;
	width:45%;
	vertical-align: top;
	margin: 0 5% 10px 0;
}
.half-width.right{
	margin: 0 0 10px 5%;
}
.button-holder{
	margin-top: 30px;
	text-align:right;
}
.error{
  color:red !important;
}
.error label:after{
  content: "(Required)";
  color: red;
  display:inline-block;
  margin-left: 5px;
}
.error input[type=text],
.error input[type=date],
.error input[type=number],
.error select{
  border:1px solid red;
}

/*****************************Modal********************************/
.modalWindow{
    position: fixed;
    width: 100%;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    height: 100%;
    text-align: center;
    z-index: 2;
}
.modalWindow .modal-content {
    display: block;
    text-align: left;
    background: white;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.5);
    max-width: 90%;
    max-height:90%;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 16px;
    z-index: 2;
}
.modalWindow * {
    box-sizing: border-box;
}
.modalWindow .modal-body{
  max-height: 350px;
  position: relative;
  overflow: auto;
}
.modalWindow h3{    
	padding: 2em;
	margin: 0;
	text-align: center;
	background: #004B8C;
	color: white;
}
.modalWindow .button-holder{
    padding: 0 2em 1em 2em;
}
a.close-button{
	background: #000;
	color:#fff;
	border:1px solid white;
	border-radius: 200em;
	padding:10px;
	display:block;
	position: absolute;
	left:100%;
	top: 0;
	transform: translate(-50%,-50%);
}
a.close-button:after{
	font-size:16px;
	content: "x";
	position:absolute;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
}
dl {
    margin: 0;
    padding: 0;
	paddinG: 0 2em 1em 2em;
}
dl div {
    font-size: 0;
	word-break: break-all;
	hyphens: auto;
}
dt {
    display: inline-block;
    width: 30%;
    font-size: 16px;
	
}
dd {
    display: inline-block;
    width: 70%;
    font-size: 16px;
}
dd, dt {
    padding: 5px;
    margin: 0;
	vertical-align: top;
}
/****************************Confirm******************************/
.confirm{
	text-align:left;
}
.confirm *{
	box-sizing: border-box;
}
.confirm dl{    
	background: white;
    border-radius: 0 0 10px 10px;
}
.confirm h3{
	margin: 1em 0 0 0;
    padding: 0;
    background: #fff;
    padding: 20px 1.8em;
    border-radius: 10px 10px 0 0;
}

.confirm .button {
  width: auto;
}
.confirm .button-holder {
  margin: 30px 20px 20px 20px;
}
/****************************Notice*******************************/
.notice{
	border: 1px solid gold;
    background: lightyellow;
    padding: 10px;
    color: goldenrod;
    text-align: left;
	position: relative;
	border-radius: 10px;
  margin:20px;
}
.notice.error{}
.notice.success{
	border-color: green;
	color: green;
	background: lightgreen;
}
.notice .fa{
	display: block;
	font-size: 2em;
	vertical-align:middle;
	position: absolute;
	left:10px;
	top:50%;
	transform:translate(0,-50%);
}
.notice p{
	display: inline-block;
	vertical-align:middle;
	width:100%;
	padding: 0 10px 0 40px;
}

/******************************************************************/

.mainSection{
	
	width: calc(100% - 500px);
	margin-left: 0px;
	margin:25px auto;
	background-color: #fff;
	margin-top:45px;
  justify-content:center;
  align-items: center; 
  display: flex;
}

/* Main Footer and Content */

.mainFooter{
	width:50%;
	background-color:#f6f9fa;
	
	min-height:300px;
}

	.firstLevelFooter{
		background-color:#f2f2f2;
		height:84px;
	}	

	.secondLevelFooter{
		min-height:36px;
	
		background: #004B8C;
		
		
		color:WHITE;
		text-align:center;
		
		font-weight:bold;
		font-size:12px;
		
	}
	
	
	.secondLevelFooter a{
		display:inline-block;
		position:relative;
		
		padding:11px;
		color:WHITE;
		text-decoration:none;
	}
	
	.secondLevelFooter a:hover{
		background-color:#d0e5f4;
		color:#00233b;
		cursor:pointer;
	}
	
	.thirdLevelFooter{
		height:275px;
		background-color:#f6f9fa;
		position:relative;
	}
	


/* Flying Popup (fixed at bottom) */

.flyPopup{
	color:WHITE;
	background-color:#003a57;
	
	position:fixed;
	bottom:0;
	
	margin-left:auto;
	margin-right:auto;
	left:0;
	right:0;
	
	border-top-left-radius:10px;
	border-top-right-radius:10px;
	
	width:inherit;
	
	font-size:10px;
	padding:10px;
}

	.footerCloseBtn{
		position:absolute;
		right:-5px;
		top:-5px;
		
		color:GREEN;
		background-color:WHITE;
		
		border: solid 1px gray;
		
		width:10px;
		height:10px;
		
		text-align:center;
	}
	
	#chkShowFooter{
		position:fixed;
		top:0;
	}
	
	#chkShowFooter + .flyPopup{
		display:none;
	}
	
	#chkShowFooter:checked + .flyPopup{
		display:block;
	}

	

/* I want to... menu */

.lblOpenMenu{
	color:WHITE;
}

.wantToContainer{
	position: static;
    display: none;
    float: right;
    right: 0;
    background-color: #f6f6f6;
    border: 1px solid #e9e9e9;
    width: 209px;
	
	padding-bottom: 15px;
	margin-top:15px;
}

.wantToContainer ul{
	margin: 0 25px;
    width: 158px;
    padding: 0;
	border-bottom: 1px dotted #B8B8B8;
}

.wantToContainer li{
	font-size:12px;
	color:#0b6997;
	
	/*background; url(https://statmcstg.usaa.com/mcontent/static_assets/Media/control_sprite.png) no-repeat -13000px -2px;*/
	list-style: none;
	
	padding: 0 0 10px 14px;
}

.wantToContainer a{
	color:inherit;
	text-decoration:none;
}

.wantToContainer a:hover{
	text-decoration:underline;
}


.wantToContainer h4{
	font-weight:bold;
	text-transform:uppercase;
	margin:5px;
	
	color: #666666;
	font-size:11px;
}
	
	
	
	
/* UTILITIES */

.hide{
	display:none;
}

.smallDisplay{
	display:none;
}

.bigDisplay{
	display:block;
}
.button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0 5px;
  padding: 10px;
  width: 100px;
  border:0;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
.simpleButton{
  background: #d67229;
}

.simpleButton:hover{
	background:#ff6700;
}

.CTAButton{
  background: #001540;
}

.CTAButton:hover{
  background: #0F74CC;
}


@media screen and (max-width:600px){
  .half-width,.half-width.right{
    width:100%;
    margin:20px 0 0 0;
  }
}

@media screen and (max-width:480px){
	
  dl dt,dl dd{
    width:100%;
    margin-top: 5px;
  }
  dl dd{text-align:right}
  
	.mainSection{
		width: 90%;
		margin:25px;
    display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Make the container take full viewport height */
	}
	
	.wantToContainer{
		padding:0;
		margin:0;
		top:0;
		
		width:100%;
		position:fixed;
		
		z-index:5;
		
		overflow:hidden;
		
		transition: height 400ms linear;
		-webkit-transition: height 400ms linear;
		-moz-transition: height 400ms linear;
		-o-transition: height 400ms linear;
		transition: height 400ms linear;
	}
	
	.wantToContainer ul{
		border:none;
	}
	
		.wantToContainer li{
			display:inline-block;
			width:100%;
		}
	
	.lblOpenMenu{
		position:fixed;
		top:0;
		right:0;
		z-index:10;
	}
	
	
	/* Menu control for phone-size display */
	
	#chkOpenMenu + label + aside{
		overflow:hidden;
		height:0;
	}
	
	#chkOpenMenu:checked + label + aside{
		height:140px;
	}
	
	#chkOpenMenu + label .openItem{
		display:block;
	}
	
	#chkOpenMenu:checked + label .openItem{
		display:none;
	}
	
	
	#chkOpenMenu + label .closeItem{
		display:none;
		color:BLACK;
	}
	
	#chkOpenMenu:checked + label .closeItem{
		display:block;
	}
	
	/* small utilities */
	
	.smallDisplay{
		display:block;
	}
	
	.bigDisplay{
		display:none !important;
	}
}
.transactionHistory {
  font-family: Arial, sans-serif;
}

.transactionHistory h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.transactionHistory table {
  width: 100%;
  border-collapse: collapse;
}

.transactionHistory th, .transactionHistory td {
  border: 1px solid #ccc;
  padding: 8px;
}

.transactionHistory th {
  background-color: #f0f0f0;
}

.transactionHistory th, .transactionHistory td {
  text-align: left;
}

.transactionHistory tr:nth-child(even) {
  background-color: #f9f9f9;
}

`}
</style>
              </div>
          );
      }
  }
  
 /* const Header = (props) => {
      return(
      <div>
       
           <br/>
           
      </div>
    );
  }*/
  const TransactionHistory = ({ history }) => {
    return (
      <div className="transactionHistory">
        <h3>Transaction History</h3>
        <table>
          <thead>
            <tr>
              <th>From Account</th>
              <th>To Account</th>
              <th>Transfer Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Frequency</th>
              <th>Amount</th>
              <th>Memo</th>
            </tr>
          </thead>
          <tbody>
            {history.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.fromAccount}</td>
                <td>{transaction.toAccount}</td>
                <td>{transaction.transferType}</td>
                <td>{transaction.startDate}</td>
                <td>{transaction.endDate}</td>
                <td>{transaction.frequency}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.memo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const Memo = (props) => {
      return(
          <fieldset>
              <label className="main-label">Memo (OPTIONAL: Maximum of {props.maxlen} characters)</label>
              <textarea maxLength={props.maxlen} id="memoText" onChange={props.onChange} value={props.memo.text}/> 
              <span>{props.maxlen - props.memo.len} characters remaining.</span>
          </fieldset>
      );
  }
  
  class Select extends React.Component{
      
    constructor(props) {
        super(props);
    }
      
     
      
      render(){
          return( 
              <fieldset className={this.props.css_class}>
                  <label>{this.props.title}</label>
                  <i className="fa fa-user fa-fw"></i>
                  <select onChange={this.props.onChange} value={this.props.account}>
                      {this.props.serverResponse.map( (option) => { 
                          return (
                              <option key={option.id} value={option.id}>
                                  {option.name}
                              </option>
                          );
                      })}
                  </select>
              </fieldset>
          );
      }
  }
  
  const HiddenFields = (props) => {
      return (
          <div>
              <fieldset className={(props.errors.startDate)?"half-width error" : "half-width"}>
                  <label className="main-label">Start Date</label>
                  <input type="date" value={props.startDate} onChange={props.changeStartDate} />
                  <i className="fa fa-calendar fa-fw"></i>
              </fieldset>
              <fieldset className={(props.errors.endDate)?"half-width right error" : "half-width right"}>
                  <label className="main-label">End Date</label>
                  <input type="date" value={props.endDate} onChange={props.changeEndDate} />
                  <i className="fa fa-calendar fa-fw"></i>
              </fieldset>
              <fieldset className={(props.errors.frequency)?"error" : ""}>
                  <label className="main-label">Frequency</label>
                  <select value={props.frequency} onChange={props.changeFrequency}>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-Monthly">1st and 15th of each month</option>
                      <option value="Monthly">Every Month</option>
                      <option value="Every Two Months">Every Two Months</option>
                  </select>
                  <i className="fa fa-refresh fa-fw"></i>
              </fieldset>
          </div>
      );
  }
  
  const Verify = (props) => {
      return(
          <div>
              <h3>Please verify your data</h3>
        <div className="modal-body">
          <Summary form={props.form}/>
          <fieldset className="button-holder">
            <input type="button" className="button simpleButton" value="Previous" onClick={() => props.showModal(false)} />
            <input type="submit" className="button CTAButton" value="Submit" onClick={() => props.confirmSubmit()} />
          </fieldset>
        </div>
          </div>
      );
  }

  const Confirm = (props) => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
  
      if(dd<10) dd='0'+dd;
      if(mm<10) mm='0'+mm;
  
      today = mm+'/'+dd+'/'+yyyy;
      return(
          <div className="confirm">
              <div className="notice success">
                  <i className="fa fa-smile-o"></i>
                  <p>Your transfer has been successfully completed on {today} with confirmation number {Math.random() * 10000000000000000}</p>
              </div>
              <h3>Summary</h3>
              <Summary form={props.form}/>
        <div className="button-holder">
         <input type="button" className="button CTAButton" value="Do Another Transaction" onClick={() => props.setRoute("form")}/>
        </div>
          </div>
      );
  }
  
  const Summary = (props) => {
      return(
          <dl>
              {props.form.map(
                  (field) => {
                      var key = Object.getOwnPropertyNames(field);
                      if(!field[key[0]]) return null;
                      return (
                          <div key={key[0]+field[key[0]]}>
                              <dt>{key[0]}</dt>
                              <dd>{field[key[0]]}</dd>
                          </div>
                      );
                  }
              )}
          </dl>
      );
  }






  export default Application;