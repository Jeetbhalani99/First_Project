// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


// const FetchData = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         Axios.get("http://localhost:5000/SingUp")
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const history = Login();

//     const goBack = () => {
//         history.goBack();
//       };


//     return (
//         <div className='container'>
//             <div className='mt-3'>
//                 <h1>Fetch Data from API in React with Axios</h1>

//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Contact Number</th>
//                             <th>Password</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {data.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.contactNumber}</td>
//                                 <td>{user.password}</td>
//                             <Link to="/Login">
//                                 <Button>Update</Button>
//                                 </Link>
//                             </tr>
//                         ))}

//                     </tbody>

//                 </Table>
//             </div>
//         </div>
//     );
// };

// export default FetchData;




// FetchData.jsx
// ... (your existing imports)

// const FetchData = () => {
//     const [data, setData] = useState([]);
//     const history = useHistory();

//     useEffect(() => {
//         Axios.get("http://localhost:5000/SingUp")
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }, []);

// const handleUpdateClick = (user) => {
//     // Pass the user data as state to the "/Login" route
//     history.push({
//         pathname: "/Login",
//         state: { userData: user },
//     });
// };

//     return (
//         <div className='container'>
//             <div className='mt-3'>
//                 <h1>Fetch Data from API in React with Axios</h1>

//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Contact Number</th>
//                             <th>Password</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {data.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.contactNumber}</td>
//                                 <td>{user.password}</td>
//                                 <td>
//                                     <Button onClick={() => handleUpdateClick(user)}>Update</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>
//         </div>
//     );
// };

// export default FetchData;















// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Table from 'react-bootstrap/Table';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const FetchData = () => {
//     const [data, setData] = useState([]);
//     const [userData, setUserData] = useState({
//         name: '',
//         email: '',
//         contactNumber: '',
//         password: '',
//       });
//     const navigate = useNavigate(); // Use useNavigate

//     useEffect(() => {
//         Axios.get("http://localhost:5000/SingUp")
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleUpdateClick = (user) => {
//         navigate('/Login', { state: { userData: user } }); // Use navigate
//     };

//     const handleEdit=(editId)=>{
//         axios.put('http://localhost:5000/SingUp/${editId}')
//         .then(res =>{
//             setData(res.data)
//         }) 
//         .catch(error => console.log(error))
//       }

//     return (
//         <div className='container'>
//             <div className='mt-3'>
//                 <h1>Fetch Data from API in React with Axios</h1>

//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Contact Number</th>
//                             <th>Password</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {data.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.contactNumber}</td>
//                                 <td>{user.password}</td>
//                                 <td>
//                                     <Button onClick={() => handleEdit(index)}>Update</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>
//         </div>
//     );
// };

// export default FetchData;





// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//   });
//   // const [updatedUserData, setUpdatedUserData] = useState({
//   //   name: '',
//   //   email: '',
//   //   contactNumber: '',
//   //   password: '',
//   // });

//   const navigate = useNavigate();

//   useEffect(() => {
//     Axios.get('http://localhost:5000/SingUp')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleUpdateClick = (user) => {
//     navigate('/Login', { state: { userData: user } });
//     setUserData(userData)

//   };

//   // const handleEdit = (editId) => {
//   //   // Assuming you want to handle the edit operation here
//   //   axios.put(`http://localhost:5000/SingUp/${editId}`)
//   //     .then((res) => {
//   //       // Set the edited data in the state
//   //       setUserData(res.data);
//   //       // Navigate to the Login screen
//   //       navigate('/Login');
//   //     })
//   //     .catch((err) => console.log(err));
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Assuming you have an API endpoint to handle the update operation
//     axios.put(`http://localhost:5000/SingUp/${userData._id}`)
//       .then((res) => {
//         // Handle success, maybe redirect or update state
//         console.log('User updated successfully:', res.data);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error('Error updating user:', error);
//       });
//   };


//   return (
//     <div className='container'>
//       <div className='mt-3'>
//         <h1>Fetch Data from API in React with Axios</h1>

//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Contact Number</th>
//               <th>Password</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.contactNumber}</td>
//                 <td>{user.password}</td>
//                 <td>
//                   <Link to={'/Update/${user._id}'}>
//                     <Button onClick={handleSubmit} >Update</Button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default FetchData;




// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import { Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   Axios.get('http://localhost:5000/SingUp')
//   //     .then((res) => setData(res.data))
//   //     .catch((err) => console.log(err));
//   // }, []);

//   useEffect(() => {
//     axios.delete(`http://localhost:5000/SingUp/${id}`)
//       .then((res) => setUserData(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleUpdateClick = (user) => {
//     setUserData(user); // Set the user data
//     navigate('/Update'); // Navigate to the Update screen
//   };


//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/SingUp/${id}`, userData);
     
//       alert('User deleted successfully');
//     } catch (error) {
//       console.error('Error during update:', error);
//       alert(error.response.data);
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='mt-3'>
//         <h1>Fetch Data from API in React with Axios</h1>

//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Contact Number</th>
//               <th>Password</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.contactNumber}</td>
//                 <td>{user.password}</td>
//                 <td>
//                   <Link to={`/Update/${user._id}`}>
//                     <Button onClick={() => handleUpdateClick(user)}>Update</Button>
//                   </Link>

//                   <button onClick={handleDelete}>Update</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default FetchData;




// COmplete fetch data screen



// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     Axios.get('http://localhost:5000/SingUp')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleUpdateClick = (user) => {
//     setUserData(user);
//     navigate(`/Update/${user}`);
//   };

//   const handleAddClick = (user) => {
//     setUserData(user);
//     navigate(`/Register`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/SingUp/${id}`);
//       alert('User deleted successfully');
//       // Refresh the data after deletion
//       const newData = data.filter((user) => user._id !== id);
//       setData(newData);
//     } catch (error) {
//       console.error('Error during deletion:', error);
//       alert(error.response.data);
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='mt-3'>
//         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
//         <h1>Fetch Data from API in React with Axios</h1>

//         <Button onClick={handleAddClick} style={{width:50,borderRadius:40}}>Add</Button>
//         </div>
//     {data.length > 0 ? (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Contact Number</th>
//               <th>Password</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.contactNumber}</td>
//                 <td>
//                   <input type="password" value={user.password} readOnly style={{border:0}}/>
//                 </td>
//                 <td>
//                   <Link to={`/Update/${user._id}`}>
//                     <Button onClick={() => handleUpdateClick(user)} style={{marginRight:25,marginLeft:15}}>Update</Button>
//                   </Link>
//                   <Button onClick={() => handleDelete(user._id)}>Delete</Button>

                 
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table> ) : (   <p style={{textAlign:'center',fontSize:36,marginTop:10}}>No data available</p> )}
//       </div>
//     </div>
//   );
// };

// export default FetchData;



// Complete next previous button record


// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(5);
//   const navigate = useNavigate();

//   useEffect(() => {
//     Axios.get('http://localhost:5000/SingUp')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

//   const handleUpdateClick = (user) => {
//     setUserData(user);
//     navigate(`/Update/${user._id}`);
//   };

//   const handleAddClick = (user) => {
//     setUserData(user);
//     navigate(`/Register`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/SingUp/${id}`);
//       alert('User deleted successfully');
//       // Refresh the data after deletion
//       const newData = data.filter((user) => user._id !== id);
//       setData(newData);
//     } catch (error) {
//       console.error('Error during deletion:', error);
//       alert(error.response.data);
//     }
//   };

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='container'>
//       <div className='mt-3'>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <h1>Fetch Data from API in React with Axios</h1>
//           <Button onClick={handleAddClick} style={{ width: 50, borderRadius: 40 }}>Add</Button>
//         </div>
//         {data.length > 0 ? (
//           <>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Contact Number</th>
//                   <th>Password</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRecords.map((user, index) => (
//                   <tr key={index}>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.contactNumber}</td>
//                     <td>
//                       <input type="password" value={user.password} readOnly style={{ border: 0 }} />
//                     </td>
//                     <td>
//                       <Link to={`/Update/${user._id}`}>
//                         <Button onClick={() => handleUpdateClick(user)} style={{ marginRight: 25, marginLeft: 15 }}>Update</Button>
//                       </Link>
//                       <Button onClick={() => handleDelete(user._id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} style={{marginRight:20}}>
//                 Previous
//               </Button>
//               <Button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRecord >= data.length}>
//                 Next
//               </Button>
//             </div>
//           </>
//         ) : (
//             <p style={{ textAlign: 'center', fontSize: 36, marginTop: 10 }}>No data available</p>
//           )}
//       </div>
//     </div>
//   );
// };

// export default FetchData;


// simple paggination in all record show


// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import { Button, Pagination } from 'react-bootstrap';
// import axios from 'axios';


// const FetchData = () => {
//   const [data, setData] = useState([]);
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(5);
//   const navigate = useNavigate();

//   useEffect(() => {
//     Axios.get('http://localhost:5000/SingUp')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

//   const handleUpdateClick = (user) => {
//     setUserData(user);
//     navigate(`/Update/${user._id}`);
//   };

//   const handleAddClick = (user) => {
//     setUserData(user);
//     navigate(`/Register`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/SingUp/${id}`);
//       alert('User deleted successfully');
//       // Refresh the data after deletion
//       const newData = data.filter((user) => user._id !== id);
//       setData(newData);
//     } catch (error) {
//       console.error('Error during deletion:', error);
//       alert(error.response.data);
//     }
//   };

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='container'>
//       <div className='mt-3'>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <h1>Fetch Data from API in React with Axios</h1>
//           <Button onClick={handleAddClick} style={{ width: 50, borderRadius: 40 }}>Add</Button>
//         </div>
//         {data.length > 0 ? (
//           <>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>No</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Contact Number</th>
//                   <th>Password</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRecords.map((user, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.contactNumber}</td>
//                     <td>
//                       <input type="password" value={user.password} readOnly style={{ border: 0 }} />
//                     </td>
//                     <td>
//                       <Link to={`/Update/${user._id}`}>
//                         <Button onClick={() => handleUpdateClick(user)} style={{ marginRight: 25, marginLeft: 15 }}>Update</Button>
//                       </Link>
//                       <Button onClick={() => handleDelete(user._id)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <Pagination>
//                 <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
//                 {Array.from({ length: Math.ceil(data.length / recordsPerPage) }, (_, i) => (
//                   <Pagination.Item
//                     key={i + 1}
//                     active={i + 1 === currentPage}
//                     onClick={() => paginate(i + 1)}
//                   >
//                     {i + 1}
//                   </Pagination.Item>
//                 ))}
//                 <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRecord >= data.length} />
//               </Pagination>
//             </div>
//           </>
//         ) : (
//             <p style={{ textAlign: 'center', fontSize: 36, marginTop: 10 }}>No data available</p>
//           )}
//       </div>
//     </div>
//   );
// };

// export default FetchData;






import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button, Pagination } from 'react-bootstrap';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    password: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:5000/SingUp')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleUpdateClick = (user) => {
    setUserData(user);
    navigate(`/Update/${user._id}`);
  };

  const handleAddClick = (user) => {
    setUserData(user);
    navigate(`/Register`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/SingUp/${id}`);
      alert('User deleted successfully');
      // Refresh the data after deletion
      const newData = data.filter((user) => user._id !== id);
      setData(newData);
    } catch (error) {
      console.error('Error during deletion:', error);
      alert(error.response.data);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / recordsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className='container'>
      <div className='mt-3'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1>Fetch Data from API in React with Axios</h1>
          <Button onClick={handleAddClick} style={{ width: 50, borderRadius: 40 }}>
            Add
          </Button>
        </div>
        {data.length > 0 ? (
          <>
            <p>Total Records: {data.length}</p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((user, index) => (
                  <tr key={index}>
                    <td>{indexOfFirstRecord + index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.contactNumber}</td>
                    <td>
                      <input type='password' value={user.password} readOnly style={{ border: 0 }} />
                    </td>
                    <td>
                      <Link to={`/Update/${user._id}`}>
                        <Button onClick={() => handleUpdateClick(user)} style={{ marginRight: 25, marginLeft: 15 }}>
                          Update
                        </Button>
                      </Link>
                      <Button onClick={() => handleDelete(user._id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination>
                <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                {generatePageNumbers().map((number) => (
                  <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                    {number}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRecord >= data.length} />
              </Pagination>
            </div>
          </>
        ) : (
          <p style={{ textAlign: 'center', fontSize: 36, marginTop: 10 }}>No data available</p>
        )}
      </div>
    </div>
  );
};

export default FetchData;
