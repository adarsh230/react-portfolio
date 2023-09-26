import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["l", "o", "b", "o", "d", "a", "n"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className="text-animate">H</span>
          <span className="text-animate _12">i,</span>
          <br />
          <span className="text-animate _13">I</span>
          <span className="text-animate _14">'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          ></AnimatedLetters>{" "}
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          ></AnimatedLetters>
        </h1>
        <h2>React Developer / Vue Developer / Python Enthusiast</h2>
        <Link to="/contacts" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
