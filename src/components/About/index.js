import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faHtml5,
  faCss3,
  faJsSquare,
  faGitAlt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dolor, velit, excepturi iusto nostrum culpa porro ullam deleniti
            corporis maxime voluptates ipsum asperiores animi voluptate
            repellendus saepe odit ut fugiat!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            ipsum at quam. Magni eligendi non molestiae dignissimos placeat hic
            neque dolorum aperiam minima. Doloremque quas atque animi maiores,
            voluptatibus saepe accusantium vero distinctio asperiores et, fugit
            ab, sunt eligendi minima!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit natus perferendis expedita ad? Et unde voluptas
            obcaecati veniam quaerat! Sapiente quae nulla delectus consequatur
            quam earum voluptas, distinctio quo alias ipsum assumenda tenetur
            totam quod. Laudantium a atque cupiditate officia possimus quasi qui
            et voluptates eum beatae est, illum inventore.
          </p>
        </div>

        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faVuejs} color="#42b883" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
