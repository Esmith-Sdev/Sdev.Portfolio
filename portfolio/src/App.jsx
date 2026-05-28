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
              Hello, I’m <span>Eddie Smith</span>, a Full Stack Developer and
              recent graduate with an Associate degree in{" "}
              <span>Full Stack Web Development</span>. I’m passionate about
              creating applications, solving problems, and continuously
              learning. I’m excited to bring my skills to a team environment
              while continuing to grow as a developer.{" "}
            </p>
          </div>
          <div className="languages">
            <h1>About Me</h1>
            <div className="d-flex align-items-start flex-column pt-2 gap-1">
              <h5>Degree: </h5>
              <p className="about-paragraph">
                Associates in Full Stack Web Development
              </p>
              <h5>Goals: </h5>
              <p className="about-paragraph">
                As I progress in my career, I would like to continue my
                education and earn my bachelor’s degree in Software Development.
                I am also ambitious about growing into a leadership role where I
                can lead development teams and contribute to larger projects
                within a company. In the future, I would also like to teach
                coding classes for young developers.{" "}
              </p>
              <h5>Experience: </h5>
              <p className="about-paragraph">
                {" "}
                Most of my experience has come from personal and school
                projects. Building personal apps has allowed me to experiment
                and learn more about what I enjoy creating. In group projects, I
                often take on the role of team leader because I am highly
                communicative and organized, which helps create a streamlined
                workflow for my team members.
              </p>{" "}
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
