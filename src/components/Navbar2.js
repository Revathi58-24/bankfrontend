import { useState ,useEffect} from 'react'
import {Outlet,NavLink} from 'react-router-dom'
//import Signin from './Signin'
import '../App.css'

const Navbar = () => {
  //console.log('Received UserID:', userID);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token); 
    if (token) {
      fetch('/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFEIKD57rdDOgIAonAPvjiqGCpqE6hAkXiy3iBQumByB5mLcZpyrNbqEmI1bEhmgz4mo&usqp=CAU"  height="40px" width="40px" alt="Logo" />  <b>Equinox</b>Bank
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFEIKD57rdDOgIAonAPvjiqGCpqE6hAkXiy3iBQumByB5mLcZpyrNbqEmI1bEhmgz4mo&usqp=CAU" height="40px" width="40px" alt="hl" />
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
    />   {user && (
      <div>
        <p style={{color:'black'}}>{user.userID}</p>
        {/* Add more user details here */}
      </div>
    )}
  </span>

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
