// // Update.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Update = () => {
//   const { id } = useParams();
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//   });

//   useEffect(() => {
//     axios.put(`http://localhost:5000/SingUp/${id}`)
//       .then((res) => setUserData(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/SingUp/${id}`, userData);
     
//       alert('User updated successfully');
//     } catch (error) {
//       console.error('Error during update:', error);
//       alert(error.response.data);
//     }
//   };

//   return (
//     <div>
//      <label>
//         Name:
//         <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Contact Number:
//         <input type="text" name="contactNumber" value={userData.contactNumber} onChange={handleInputChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
//       </label>
//       <br />
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// };

// export default Update;



import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import "./Login.css"
import "./Update.css"
import { Button } from 'react-bootstrap';
const Update = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [userData, setUserData] = useState({
      name: '',
      email: '',
      contactNumber: '',
      password: '',
    });
  
    useEffect(() => {
      axios.put(`http://localhost:5000/SingUp/${id}`)
        .then((res) => setUserData(res.data))
        .catch((err) => console.log(err));
    }, [id]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleUpdate = async (e) => {
        e.preventDefault();
      try {
        const response = await axios.put(`http://localhost:5000/SingUp/${id}`, userData);
       
        alert('User updated successfully');
        navigate('/FetchData');
      } catch (error) {
        console.error('Error during update:', error);
        alert(error.response.data);
      }
    };

    const handleCancleClick = (user) => {
      setUserData(user);
      navigate(`/FetchData`);
    };

  


  return (
    <div className='update'>
      <div class="container">
        <div class="update-card">
          <div class="update-card-header">
            <h2>Update</h2>
          </div>
          <div class="update-card-body">
            <form onSubmit={handleUpdate}>

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

              <button type="submit" class="update-btn" >Update</button>

              <button type="submit" class="update-btn" style={{marginTop:20}} onClick={handleCancleClick}>Cancle</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update





