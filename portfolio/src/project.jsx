import Navbar from "./navbar";
import FishquestLogo from "./assets/FishQuest-Logo-only.png";
import Grainient from "./Grainient";
export default function Project() {
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
            <h1>Project Name</h1>
            <div className="project-button">
              <img
                className="project-details-logo"
                src={FishquestLogo}
                alt=""
              />
            </div>
            <div className="d-flex flex-row gap-5 pt-3">
              <button className="project-detail-button">View</button>
              <button className="project-detail-button">Github</button>
            </div>
          </div>
          <div className="d-flex align-items-start flex-column pt-3">
            <h5>Overview: </h5>
            <p className="detail-paragraph">
              This is a passion project I have been working on for over a year.
              The app allows users to log catches, complete challenges, track
              progress, and save fishing setups while building a more game-like
              fishing experience. Built using React Native with Expo for the
              frontend and Node.js, Express, and MongoDB for the backend,
              FishQuest combines social, tracking, and progression features into
              one platform.
            </p>
            <h5>Goal: </h5>
            <p className="detail-paragraph">
              My main goal was to make navigation within the app as easy as
              possible, since users would most likely be fishing while using it.
              The app was also highly detailed, which allowed me to expand my
              knowledge of MongoDB and React Native.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
