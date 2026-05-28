import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./assets/ES-PURPLE.png";
import { Sling as Hamburger } from "hamburger-react";
import Grainient from "./Grainient.jsx";
import { useState } from "react";
import BouncingImages from "./BouncingImages.jsx";
import ProfilePicture from "./assets/profile.jpg";
function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="page-background">
        <Grainient
          color1="#7127ff"
          color2="#16171d"
          color3="#7127ff"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div className="page">
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          sticky="top"
          expanded={expanded}
        >
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
              <Hamburger toggled={expanded} toggle={setExpanded} />
            </div>
            <Navbar.Collapse id="nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => setExpanded(false)}>Home</Nav.Link>
                <Nav.Link>About Me</Nav.Link>
                <Nav.Link>Education</Nav.Link>
                <Nav.Link>Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div className="profile-image-container">
              <img src={ProfilePicture} className="profile-image" />
            </div>
            <p>
              “Hello, I’m <span>Eddie Smith</span>, a Full Stack Developer and
              recent graduate with an Associate degree in{" "}
              <span>Full Stack Web Development</span>. I’m passionate about
              creating applications, solving problems, and continuously
              learning. I’m excited to bring my skills to a team environment
              while continuing to grow as a developer.”{" "}
            </p>
          </div>
          <div className="languages">
            <h1>Education</h1>
            <div className="d-flex align-items-flex-start flex-column justify-content-center">
              <h4>
                Degree:{" "}
                <span style={{ fontSize: ".8rem", marginLeft: ".5rem" }}>
                  Associates in Full Stack Web Development
                </span>
              </h4>
              <h4>
                Goals:{" "}
                <span style={{ fontSize: ".8rem", marginLeft: ".5rem" }}>
                  As I progress in my career I would like to achieve my
                  bachelors in Software Development.{" "}
                </span>
              </h4>
            </div>

            <div>
              <BouncingImages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
