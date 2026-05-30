import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./assets/ES-PURPLE.png";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
export default function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const targetRef = useRef(null);
  const handleScroll = () => {
    // scrollIntoView options: { behavior: 'smooth', block: 'start' }
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link
              as={Link}
              to="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }

                setExpanded(false);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              state={{ scrollTo: "about" }}
              onClick={() => {
                setExpanded(false);
              }}
            >
              About Me
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/"
              state={{ scrollTo: "projects" }}
              onClick={() => {
                setExpanded(false);
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              state={{ scrollTo: "contact" }}
              onClick={() => {
                setExpanded(false);
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
