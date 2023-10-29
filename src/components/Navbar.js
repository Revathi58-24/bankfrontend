import { useState ,useEffect,useContext} from 'react'
import {Outlet,NavLink} from 'react-router-dom'
//import Signin from './Signin'
import { UserContext } from './UserContext';
import '../App.css'


const Navbar = () => {
  const { userID,setUserID } = useContext(UserContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  console.log('userID:',userID);
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFEIKD57rdDOgIAonAPvjiqGCpqE6hAkXiy3iBQumByB5mLcZpyrNbqEmI1bEhmgz4mo&usqp=CAU"  height="40px" width="40px" alt="Logo" />  <b>Equinox</b>Bank
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="https://spaces-cdn.clipsafari.com/osjodi66678wddowa1visin58hfs" height="20px" width="20px" alt="hl" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/loan">Loan</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
           
  <div>
            <li 
  onMouseEnter={handleToggleDropdown} 
  onMouseLeave={handleToggleDropdown} 
  style={{ position: 'relative', listStyleType: 'none' }}
>
  <span style={{ cursor: 'pointer' }}>
    <img
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      alt="Sign In"
      width="30px"
      height="30px"
    />  
  </span>
  {userID ? (
              <span style={{ marginLeft: '10px' }}>Hi..!,{userID}</span>
            ) : (
              <span>Hi..!</span>
            )}

  {showDropdown && (
    <ul
      className="dropdown"
      style={{
        width: '120px',
        padding: '2px',
        borderRadius: '8px',
        position: 'absolute',
        top: 0,
        left: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        borderBottom: '2px solid #333',
        margin: 0,
       textAlign:'left',
        display: 'flex',
        flexDirection: 'column',  // Set the direction to vertical
      }}
    >
      <li style={{ padding: '5px 10px' }}>
        <NavLink to="/signin" style={{  color: '#333' }}>
        SignIn
        </NavLink>
      </li>
      <li style={{ padding: '5px 10px' }}>
        <NavLink to="/signup" style={{ color: '#333' }}>
          SignUp
        </NavLink>
      </li>
    </ul>
  )}
</li>
</div>


          </ul>
        </div>

      </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar

//https://www.td.com/us/en/personal-banking
//https://www.avidiabank.com/
//https://mediaboom.com/news/bank-website-design/
//https://www.salemcoop.com/
//https://www.bankwaw.com.au/
//https://www.section.io/engineering-education/registration-form-react.js-firebase/
//https://www.123formbuilder.com/free-form-templates/gallery-banking-forms/ -banking forms
//https://mdbootstrap.com/docs/react/components/modal/?#!