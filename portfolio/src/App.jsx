import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Grainient from "./Grainient.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import BouncingImages from "./BouncingImages.jsx";
import ProfilePicture from "./assets/profile.jpg";
import FishquestLogo from "./assets/FishQuest-Logo-only.png";
import SunriseLogo from "./assets/sunrise-logo.png";
import NavbarComponent from "./navbar.jsx";
import AmazonLogo from "./assets/amazon.svg";
import GithubLogo from "./assets/github.svg";
import JavascriptLogo from "./assets/javascript.svg";
import MongoLogo from "./assets/mongodb.svg";
import ExpoLogo from "./assets/expo.png";
import NodeLogo from "./assets/nodejs.svg";
import OracleLogo from "./assets/oracle.svg";
import PythonLogo from "./assets/python.svg";
import ReactLogo from "./assets/react.svg";
import CSSLogo from "./assets/css.svg";
import HTMLLogo from "./assets/html.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
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
        <NavbarComponent />
        <div className="content" id="home">
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
          <div className="about-section" id="about">
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
          <div className="projects" id="projects">
            <h1>Projects</h1>
            <Link className="project-button" to="/project/fishquest">
              <h4 className="project-title">FishQuest</h4>
              <div className="black-overlay"></div>
            </Link>
            <Link className="project-button" to="/project/sunrise">
              {" "}
              <h4 className="project-title">Sunrise Kitchen</h4>
              <div className="black-overlay"></div>
            </Link>
            <Link className="project-button" to="/project/coursebuilder">
              {" "}
              <h4 className="project-title">Coursebuilder.io</h4>
              <div className="black-overlay"></div>
            </Link>
          </div>
          <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className="d-flex flex-row justify-content-center gap-3">
              <h5>E-Mail:</h5>
              <p>sdev.esmith@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
