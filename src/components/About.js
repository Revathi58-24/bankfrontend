import React from "react";

const About = () =>{
  return (
    <div className="about-container" style={{ position: 'relative' }}>
      <img
        src="https://www.bankwaw.com.au/Portals/0/OpenContent/Files/606/iStock-1338834262.jpg?width=2000&format=webp"
        alt="about"
        style={{ width: '1370px', height: '800px' , margin: '0', padding: '0'}}
      />
      <div className="overlay" style={{ position: 'absolute', top: '20%', left: '35%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '20px', borderRadius: '5px' }}>
        <h1 style={{fontFamily:'sans-serif',fontSize:'50px',textAlign:'left'}}><b>At Equinox, our goal is <br/>to create more happiness<br/> in our community.</b></h1>
      <br/>
      <p style={{fontSize:'20px'}}><b>Customers who interact with us. Local entrepreneurs <br/>in whom we invest. Patrons and clients of <br/>the businesses built by said local entrepreneurs.<br/> Anyone who passes an Avidia Bank ad and reads<br/> the headline. Users reading this website.<br/> And this sentence. Right now.</b></p>
      </div>
      <div className="first-row">
          <div className="image-container">
            <img
              src="https://www.avidiabank.com/wp-content/uploads/2021/07/characters_Ella_01_dog-1024x1024.png"
              alt="Avidia Bank"
              height="500px"
            />
          </div>
          <div className="text-container">
            <p>We’re trying to get more smiles on more faces. More fulfillment in <br/>more places. We are just a community bank, but we believe in <br/>doing our part with passion, honesty, kindness and a bit of good <br/>humor along the way. Banking needs to be straightforward, <br/>trustworthy and reliable. It doesn’t need to be tedious. </p>
          </div>
        </div><br/>
        <div className="first-row" style={{margin: '4px', padding: '0 10px'}}>
          <div className="col-lg-6" style={{marginLeft:'40px'}}>
            <h3><b> We started in 1869. <br/>Kind of.</b></h3>
            <p>In 2007, Hudson Savings Bank and Westborough Bank - both <br/>founded in 1869 - merged. The new bank they formed is what is <br/>now known as Avidia Bank. Since ‘07, Avidia Bank has become a <br/>$2.3 billion mutual community bank. Headquartered in Hudson,<br/> we have branches in Hudson, Clinton, Westborough,<br/> Northborough, Marlborough, Shrewsbury, Leominster and <br/>Framingham, MA. We’re also located at your vaca rental, <br/>your back yard, in long lines at the grocery store and anywhere else<br/> you bring your phone or your computer. </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://www.avidiabank.com/wp-content/uploads/2021/07/max_oliverOld3-1.png"
              alt="Avidia Bank"
              height="300px"
            />
          </div>
        </div>
        <br/>
        <br/>
      <h4 style={{textAlign:'center'}}><b>Our mission, vision and values. What we are. What we do. What we strive to be. </b></h4>
    <table style={{border:'0',textAlign:'center',width:'1350px'}}>
      <tr style={{margin:'4px',textAlign:'center'}}>
        <td style={{ padding: '0px 10px' }}>
          <h4><b>Mission</b></h4>
          <p>To provide our communities with strong and <br/>efficient financial solutions and exceptional <br/>customer service. </p>
        </td>
        <td>
         <h4 style={{ padding: '0px 10px' }}><b>Vision</b></h4>
         <p>Avidia works hard to develop strong relationships <br/>with everyone in our communities and strives <br/>to be the best bank of any size or type in our markets.</p>
        </td>
        <td>
          <h4 style={{ padding: '0px 10px' }}><b>Values</b></h4>
          <p>Honesty | Caring | Inclusivity<br/>
          Positivity | Good humor | Humility</p>
        </td>
      </tr>
    </table>
    <br/>
    <div>
      <img src='https://img.freepik.com/free-vector/modern-city-buildings_1441-3041.jpg?w=826&t=st=1695134076~exp=1695134676~hmac=966c5af708061360137fe1be722e4710793c35f88a606f21d7555bdca3265356' alt='about' width="1370px" height='700px'/>
      <div className="overlay" style={{ color:'white',position: 'absolute', top: '75%', left: '20%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '20px', borderRadius: '5px',fontSize:'70px' }}>
       <center><h1><b>Honest to goodness®</b> </h1></center>
       </div>
      <div className="overlay" style={{ position: 'absolute', top: '85%', left: '23%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '20px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <br/>
      <p>You can count on us to tell it like it is and to choose humility<br/> over the self-absorption that announces itself in our 
      <br/>industry every time a bank trumpets its underwhelming differentiators<br/>
       and overestimates its importance in people’s daily lives.<br/> We’ll be the first to tell you that we keep your money safe<br/>
        and get it to you when you need it as good as anyone’s ever<br/> done it along with a host of other banking stuff people <br/>
        and businesses need, but we won’t mistake the performance of <br/>those services as making us some kind of hero in your story.
        <br/> You’re the hero in your story. We’d just be honored to play a small 
        <br/>part. Honest to goodness. </p>
      </div>
    </div>
    </div>
  )
}

export default About;
