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
function App() {
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
          <div className="projects">
            <h1 className="mb-3">Projects</h1>
            <Link
              className="project-button"
              to="/project"
              state={{
                title: "FishQuest",
                src: FishquestLogo,
                view: "https://www.figma.com/proto/Q1O2KU3hjixDBYz1PuyAda/FishQuest-Wireframe.mockup_--Copy-?t=PP10RiQX7fmWVD8Q-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
                github:
                  "https://github.com/Esmith-Sdev/Fishquest/tree/v1-Mobile",
                overview: `This is a passion project I have been working on for over a year. It's currently in Beta testing and expected to be in the app store soon.
              The app allows users to log catches, complete challenges, track
              progress, and save fishing setups while building a more game-like
              fishing experience.`,
                stack: [ReactLogo, MongoLogo, ExpoLogo, NodeLogo],
              }}
            >
              <h4 className="project-title">FishQuest</h4>
              <div className="black-overlay"></div>
              <img
                className="project-logo"
                style={{ bottom: "150px", right: "70px" }}
                src={FishquestLogo}
              ></img>
            </Link>
            <Link
              className="project-button"
              to="/project"
              state={{
                title: "Sunrise Kitchen",
                src: SunriseLogo,
                view: "https://esmith-sdev.github.io/sunriseKitchen/",
                github: "https://github.com/Esmith-Sdev/sunriseKitchen",
                overview: `This website was a school project created for a local Haitian restaurant. It highlights authentic Caribbean flavors through a modern, responsive design that captures the restaurant’s warmth and culture.`,
                stack: [HTMLLogo, CSSLogo],
              }}
            >
              {" "}
              <h4 className="project-title">Sunrise Kitchen</h4>
              <div className="black-overlay"></div>
              <img
                className="project-logo"
                src={SunriseLogo}
                style={{ bottom: "150px", right: "150px" }}
              ></img>
            </Link>
            <Link
              className="project-button"
              to="/project"
              state={{
                title: "Coursebuilder.io",
                view: "https://esmith-sdev.github.io/SDEV_255_Final_Project_Group_8/",
                github:
                  "https://github.com/Esmith-Sdev/SDEV_255_Final_Project_Group_8/tree/main/final-project/backend",
                overview: `This is a React-based school project designed to practice API integration and provide students and teachers with tools to manage and organize their courses efficiently.`,
                goals: `The main goal of this website was to seperate students and teachers at login and display the appropriate interface and checkout for the user. `,
                stack: [ReactLogo, MongoLogo],
              }}
            >
              {" "}
              <h4 className="project-title">Coursebuilder.io</h4>
              <div className="black-overlay"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
