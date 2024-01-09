import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import "./Register.css"
const Register = () => {


  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleRegistration = async (e) => {
    e.preventDefault();
    // Check if any of the required fields are empty
    if (!userData.name || !userData.email || !userData.contactNumber || !userData.password) {
      // Alert or handle empty fields as needed
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/SingUp', userData);
      alert('User registered successfully');
  
      // Move navigate inside the try block to ensure it's executed only on success
      navigate('/Login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error.response.data);
    }
  };
  
  


  return (
    <div className='login'>
      <div class="container">
        <div class="login-card">
          <div class="login-card-header">
            <h2>Register</h2>
          </div>
          <div class="login-card-body">
            <form onSubmit={handleRegistration}>

              <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="name" name="name" value={userData.name}  onChange={handleInputChange} required />
              </div>

              <div class="form-group">
                <label for="username">Email:</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required />
              </div>

              <div class="form-group">
                <label for="username">Contact Number:</label>
                <input type="number" id="contactNumber" name="contactNumber" value={userData.contactNumber} onChange={handleInputChange} required />
              </div>

              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} required />
              </div>

              <button type="submit" class="login-btn" >Register</button>

              <div style={{display:'flex',float:'right',marginTop:10}}>
                <p>Already have an account?  </p>

                <Link to={'/Login'}>
                  Login here
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register





