import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./assets/ES-PURPLE.png";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
export default function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="page">
      <Navbar expand="lg" sticky="top" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="80"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div className="d-lg-none">
            <Hamburger toggled={expanded} toggle={setExpanded} color="#fff" />
          </div>
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => setExpanded(false)} to="/">
                Home
              </Nav.Link>
              <Nav.Link>About Me</Nav.Link>
              <Nav.Link>Education</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
