import React from 'react'
import { Container, Navbar,NavbarBrand  } from 'react-bootstrap';
import '../App.css';
export default function Footer() {
  return (
    <div>

   
<div className="fixed-bottom ">  
            <Navbar color="dark" dark >
                <Container className="justify-content-center">
                    <NavbarBrand  >Audit System @Copyright 2022 Reserved</NavbarBrand>
                </Container>
            </Navbar>
        </div>
  
    </div>
  )
}