import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { Adress } from './component/profile/Adress';
import { FullName } from './component/profile/FullName';
import { ProfilePhoto } from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
