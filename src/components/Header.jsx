import React,{useState,useEffect} from 'react'
import {
 Container,  
  Navbar, 
  Nav,
  Button,
  Badge,
  NavDropdown

} from 'react-bootstrap'
import axios from 'axios';

export default function Header() {
  const [data,setdata]=useState('')
  const getprojectdata = async () => {
    console.log(localStorage.getItem('Authorization'),"==================================================")
   await  axios.post("http://localhost:8100/auth/validate", {}, 
    {headers: {"Authorization" : `Bearer ${localStorage.getItem('Authorization')}`}}).then(
      (response) => {
        //success
        console.log(response);
         setdata(response.data.name)
        console.log(response.data,"=============================")
        console.log(data,"++++++++++++++++++++++++++++++")

      }, (error) => {
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
      
      }
    );
  };
  useEffect(() => {
    getprojectdata();
  }, []);
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
   {(data)?data:''}
  </Badge>{' '}
      </Navbar.Text>
     
<Button onClick={()=>{
  setdata({})
  window.location="/login"
}} style={{marginLeft:20}}>Logout</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    
  )
}