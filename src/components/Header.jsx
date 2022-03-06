import React from 'react'
import {
 Container,  
  Navbar, 
  Nav,
  Button,
  Badge,
  NavDropdown

} from 'react-bootstrap'


export default function Header() {
  return (
    
    <div className="sticky-top">
    <Navbar bg="primary"  className="text-light" expand="lg">
  <Container  className="text-light">
    <Navbar.Brand href="/home"  className="text-light">Audit Management</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-light">
        <Nav.Link href="/login" className="text-light">Login</Nav.Link>
        <Nav.Link href="/checklist" className="text-light" >CheckList</Nav.Link>
       
        
        
      </Nav>
      <Nav>
      <Navbar.Text>
      <Badge pill bg="warning" text="dark">
    Megha
  </Badge>{' '}
      </Navbar.Text>
     
<Button style={{marginLeft:20}}>Logout</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    
  )
}