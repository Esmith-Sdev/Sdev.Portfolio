import React from "react";
import { motion, AnimatePresence } from "motion/react";
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
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { Row } from "react-bootstrap";
import { useState } from "react";
export default function BouncingImages() {
  const LANGUAGE_ICONS = [
    ReactLogo,
    PythonLogo,
    JavascriptLogo,
    ExpoLogo,
    CSSLogo,
    HTMLLogo,
    MongoLogo,
    NodeLogo,
    GithubLogo,
    OracleLogo,
    AmazonLogo,
  ];
  const slides = [];

  for (let i = 0; i < LANGUAGE_ICONS.length; i += 3) {
    slides.push(LANGUAGE_ICONS.slice(i, i + 3));
  }
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="slider-window">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            className="icon-row"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            {slides[selectedIndex].map((icon, index) => (
              <div className="language-icon-container" key={index}>
                <motion.img
                  src={icon}
                  className="language-icon"
                  animate={{
                    y: [0, -(8 + index * 2), 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="d-flex justify-content-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`gallery-circle ${
              selectedIndex === index ? "gallery-circle-selected" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </>
  );
}
