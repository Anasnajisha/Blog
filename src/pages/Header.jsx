import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div>
        <style>{`
        body {
          background-color: #FFFF66;
        }
      `}</style>
        <h1 className="head" style={{ color: 'green', textAlign: 'center' }}>Blogs</h1>
         <div className="mt-1 pt-1" style={{ position: 'fixed', top: 100, width: '100%', zIndex: 100 }}>

        <Container >
          <Navbar expand="lg" className="bg-danger"  style={{ height: '80px' }}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/Home" style={{ color: 'black' }}>Home</Nav.Link>
                  <Nav.Link href="/Blogform" style={{ color: 'black' }}>Blog Form</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
      
    </div>
  )
}
