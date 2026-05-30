import Navbar from "./navbar";
import FishquestLogo from "./assets/FishQuest-Logo-only.png";
import Grainient from "./Grainient";
import ReactLogo from "./assets/react.svg";
import NodeLogo from "./assets/nodejs.svg";
import MongoLogo from "./assets/mongodb.svg";
import ExpoLogo from "./assets/expo.png";
import { useEffect } from "react";
import CoursebuilderLogo from "./assets/coursebuilder.png";
import { useParams } from "react-router-dom";
import JavascriptLogo from "./assets/javascript.svg";
import SunriseLogo from "./assets/sunrise-logo.png";
import HTMLLogo from "./assets/html.svg";
import CSSLogo from "./assets/css.svg";
import { useLocation } from "react-router-dom";
export default function Project() {
  const { id } = useParams();
  const stacks = {
    javascript: {
      image: JavascriptLogo,
      alt: "Javascript",
    },
    mongo: {
      image: MongoLogo,
      alt: "MongoDB",
    },
    expo: {
      image: ExpoLogo,
      alt: "Expo",
    },
    node: {
      image: NodeLogo,
      alt: "Node",
    },
    react: {
      image: ReactLogo,
      alt: "React",
    },
    html: {
      image: HTMLLogo,
      alt: "HTML",
    },
    css: {
      image: CSSLogo,
      alt: "CSS",
    },
  };
  const projects = {
    fishquest: {
      title: "FishQuest",
      goal: `My main goal was to make navigation within the app as easy as
              possible, since users would most likely be fishing while using it.
              The app was also highly detailed, which allowed me to expand my
              knowledge of MongoDB and React Native.`,
      src: FishquestLogo,
      view: "https://www.figma.com/proto/Q1O2KU3hjixDBYz1PuyAda/FishQuest-Wireframe.mockup_--Copy-?t=PP10RiQX7fmWVD8Q-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
      github: "https://github.com/Esmith-Sdev/Fishquest/tree/v1-Mobile",
      overview: `This is a passion project I have been working on for over a year. It's currently in Beta testing and expected to be in the app store soon.
                      The app allows users to log catches, complete challenges, track
                      progress, and save fishing setups while building a more game-like
                      fishing experience.`,
      stack: [stacks.react, stacks.mongo, stacks.expo, stacks.node],
    },
    sunrise: {
      title: "Sunrise Kitchen",
      src: SunriseLogo,
      view: "https://esmith-sdev.github.io/sunriseKitchen/",
      github: "https://github.com/Esmith-Sdev/sunriseKitchen",
      goal: `The goal of this website was to find a local business in need of a modern, responsive website. At the time, I was still learning HTML, CSS, and responsive design, so I focused on developing my understanding of Flexbox, media queries, and the various CSS units of measurement.`,
      overview: `This is a school project created for a local Haitian restaurant and was the first website I created. It highlights authentic Caribbean flavors through a modern, responsive design that captures the restaurant’s warmth and culture.`,
      stack: [stacks.html, stacks.css],
    },
    coursebuilder: {
      title: "Coursebuilder.io",
      src: CoursebuilderLogo,
      view: "https://esmith-sdev.github.io/SDEV_255_Final_Project_Group_8/",
      github:
        "https://github.com/Esmith-Sdev/SDEV_255_Final_Project_Group_8/tree/main/final-project/backend",
      overview: `This is a React-based school project designed to practice API integration and provide students and teachers with tools to manage and organize their courses efficiently.`,
      goal: `The main goal of this website was to seperate students and teachers at login and display the appropriate interface and checkout for the user. `,
      stack: [stacks.react, stacks.mongo],
    },
  };
  const project = projects[id];
  const { title, src, overview, goal, stack, view, github } = project;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
        <Navbar />
        <div className="content">
          <div className="project-container">
            <h1>{title}</h1>
            <div className="project-details-button">
              <img className="project-details-logo" src={src} alt={title} />
            </div>
            <div className="d-flex flex-row gap-5 pt-3">
              <a className="project-detail-button" href={view} target="_blank">
                View
              </a>
              <a
                className="project-detail-button"
                href={github}
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="detail-container">
            <h5>Overview: </h5>
            <p className="detail-paragraph">{overview}</p>
            <h5>Goal: </h5>
            <p className="detail-paragraph">{goal}</p>
          </div>
          <div className="stack-container">
            <h5>Tech Stack</h5>
            <div className="d-flex flex-row gap-3 justify-content-center">
              {stack?.map((s, index) => (
                <>
                  <div className="d-flex flex-column gap-2">
                    <div className="icon-circle-container">
                      <img
                        key={index}
                        src={s.image}
                        alt={s.alt}
                        className="icon-circle-image"
                      />
                    </div>
                    <h3 className="icon-circle-text">{s.alt}</h3>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
