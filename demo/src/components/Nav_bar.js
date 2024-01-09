// import React from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { BrowserRouter, Link } from 'react-router-dom';

// const Nav_bar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" style={{ height: 70 }}>
//       <Container>
//         <Nav className='me-auto'>
//           <Link to="Register" style={linkStyle}>Register</Link>
//           <Link to="Login" style={linkStyle}>Login</Link>
//           <Link to="FetchData" style={linkStyle}>FetchData</Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// // Define a style object to remove underlines from links
// const linkStyle = {
//   marginRight: 20,
//   textDecoration: 'none', // Remove underlines
//   color: 'white', // Set link color to white
// };

// export default Nav_bar;






// Simple add logout button

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Nav_bar = () => {
  const history = useLocation();

  const handleLogout = () => {
    // Perform any logout logic (e.g., clear user session, reset authentication state)
    // For simplicity, let's assume localStorage is used for user authentication
    localStorage.removeItem('token'); // Assuming you have stored a token for authentication

    // Redirect to the login page after logout
    history.push('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 70 }}>
      <Container>
        <Nav className='me-auto'>
          <Link to="Register" style={linkStyle}>Register</Link>
          <Link to="Login" style={linkStyle}>Login</Link>
          <Link to="FetchData" style={linkStyle}>FetchData</Link>
        </Nav>
        {/* Add a logout button */}
        <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
      </Container>
    </Navbar>
  );
};

// Define a style object to remove underlines from links
const linkStyle = {
  marginRight: 20,
  textDecoration: 'none', // Remove underlines
  color: 'white', // Set link color to white
};

export default Nav_bar;



