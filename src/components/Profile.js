// PatientProfile.js

import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/getUserDetails', {
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
    <div>
      <h2>Your Profile</h2>
      {user && (
        <div>
          <p>Name: {user.userID}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      )}
    </div>
  );
};

export default Profile;

	
