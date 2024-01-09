import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {

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

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!userData.email || !userData.password) {
      // Alert or handle empty fields as needed
      return;
    }

    try {
      // Assuming this is the login endpoint
      const response = await axios.post('http://localhost:5000/Login', userData);
      alert('User login successful');

      // After login, you may navigate to another page or perform other actions
      // In this example, navigating to the FetchData page
      navigate('/FetchData');
    } catch (error) {
      console.error('Error during login:', error);
      alert(error.response.data);
    }
  };



  



  return (
    <div className='login'>
    <div class="container">
      <div class="login-card">
        <div class="login-card-header">
          <h2>Login</h2>
        </div>
        <div class="login-card-body">
          <form onSubmit={handleLogin}>

            <div class="form-group">
              <label for="username">Email:</label>
              <input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required />
            </div>

            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} required />
            </div>

            <button type="submit" class="login-btn" >Login</button>

            <div style={{display:'flex',float:'right',marginTop:10}}>
              <p>Dont have an account?</p>

              <Link to={'/Register'}>
                Register
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login