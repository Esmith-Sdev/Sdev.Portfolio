import Navbar from "./navbar";
import FishquestLogo from "./assets/FishQuest-Logo-only.png";
import Grainient from "./Grainient";
import ReactLogo from "./assets/react.svg";
import NodeLogo from "./assets/nodejs.svg";
import MongoLogo from "./assets/mongodb.svg";
import ExpoLogo from "./assets/expo.png";
import { useLocation } from "react-router-dom";
export default function Project() {
  const location = useLocation();
  const { title, src, overview, goals, stack, view, github } =
    location.state || {};
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
            <div className="project-button">
              <img className="project-details-logo" src={src} alt="" />
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
          <div className="d-flex align-items-start flex-column pt-3">
            <h5>Overview: </h5>
            <p className="detail-paragraph">{overview}</p>
            <h5>Goal: </h5>
            <p className="detail-paragraph">{goals}</p>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h5>Tech Stack</h5>
            <div className="d-flex flex-row gap-3 justify-content-center">
              <div className="d-flex flex-column align-items-center">
                {stack?.map((s, index) => (
                  <div className="icon-circle-container">
                    <img
                      key={index}
                      src={s.src}
                      alt={s.alt}
                      className="icon-circle-image"
                    />
                  </div>
                ))}
                <p className="icon-circle-text">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
