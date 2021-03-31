import React from 'react';
import { Button, Card, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <Navbar bg="danger" variant="light">
    <Navbar.Brand style={{color:'white', fontWeight:'700'}}>Gents Collection</Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <Nav className="mr-auto">
      </Nav>
    <Nav>
    
    <Link style={{marginLeft:'10px',color:'white', fontWeight:'500'}} to="/home">Home</Link>
    <Link style={{marginLeft:'10px',marginRight:'10px', color:'white', fontWeight:'500'}} to="/order">Orders</Link>
    <Link style={{marginLeft:'5px',marginRight:'10px', color:'white', fontWeight:'500'}} to="/admin">Admins</Link>
    <Link variant="outline-primary" style={{marginLeft:'5px',fontWeight:'700'}} to="/login">LogIn</Link>
    </Nav>
  </Navbar>
        </div>
    );
};

export default Header;