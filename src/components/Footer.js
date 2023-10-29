
import React from 'react';

const Footer = () => {
    const iconStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#555',
    position: 'relative'
  };

  const circleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'none'
  };

  const showCircle = (event) => {
    event.currentTarget.querySelector('.circle').style.display = 'block';
  };

  const hideCircle = (event) => {
    event.currentTarget.querySelector('.circle').style.display = 'none';
  };
  return (
    <footer className="footer" style={{ backgroundColor: ' hsl(208, 92%, 95%)', padding: '20px 0' }}>
      <div className="container">
        <table width="1350px">
            <tr style={{backgroundColor:'hsl(208, 92%, 95%)'}}>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFEIKD57rdDOgIAonAPvjiqGCpqE6hAkXiy3iBQumByB5mLcZpyrNbqEmI1bEhmgz4mo&usqp=CAU"  height="40px" width="40px" alt="Logo" />
          </td>
           <td>
            <br/><br/>
            <h2><b>Equinox</b>Bank</h2>
           <p>&copy; 2023 EquinoxBank. All Rights Reserved.</p> 
                </td>
                <td>
                <p><b>Corporate Headquarters</b></p>
                <p>42 Main Street</p>
                <p>Hudson, MA 01749</p>
                <br/>
                <a href="https://www.facebook.com"  style={iconStyle}
                onMouseEnter={showCircle}
                onMouseLeave={hideCircle}><i className="fab fa-facebook"></i> <div className="circle" style={circleStyle}></div></a>
          <a href="https://www.twitter.com"  style={iconStyle}
                onMouseEnter={showCircle}
                onMouseLeave={hideCircle}><i className="fab fa-twitter"></i> <div className="circle" style={circleStyle}></div></a>
          <a href="https://www.instagram.com"  style={iconStyle}
                onMouseEnter={showCircle}
                onMouseLeave={hideCircle}><i className="fab fa-instagram"> </i><div className="circle" style={circleStyle}></div></a>
          <a href="https://www.linkedin.com"  style={iconStyle}
                onMouseEnter={showCircle}
                onMouseLeave={hideCircle}><i className="fab fa-linkedin"></i> <div className="circle" style={circleStyle}></div></a> 
            <a href="https://www.youtube.com" style={iconStyle}
                onMouseEnter={showCircle}
                onMouseLeave={hideCircle}><i className="fab fa-youtube"></i><div className="circle" style={circleStyle}></div></a>   
                </td>
                <td>
                <a href="#top" style={{ margin: '0 10px', textDecoration: 'none', color: '#555' }} ><i className="fas fa-arrow-up"></i> Back to Top</a>
                </td>
            </tr>
        </table>
       
      </div>
    </footer>
  );
}

export default Footer;
