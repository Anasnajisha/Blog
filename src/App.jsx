
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogform from './pages/Blogform'; 
import Notfound from './pages/Notfound';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <div>
      <div className="mt-1 pt-1" style={{ position: 'fixed', top: 8, width: '100%', zIndex: 100 }}>
        <Container>
          <Navbar expand="lg" className="bg-danger">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/" style={{ color: 'black' }}>Home</Nav.Link>
                  <Nav.Link href="/Blogform" style={{ color: 'black' }}>Blog Form</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogform" element={<Blogform />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}