import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import Login from './components/Login';
import FetchData from './components/FetchData';
import Nav_bar from './components/Nav_bar';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Update from './components/Update';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <div className='App'>

     
      <Router>
      <Nav_bar/>
        <Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/FetchData" element={<FetchData />}></Route>
          <Route path="/Update/:id" element={<Update />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          
        </Routes>
      </Router>




    </div>
  )

}

export default App