import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_8lay5lg",
        formRef.current,
        "LNH2NtbLES6XWaH9c"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        window.location.reload(false);
      })
      .catch(() => {
        alert("Failed to send the message, please try again");
      });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            libero blanditiis, aspernatur eveniet voluptate assumenda iste illum
            ratione quos nulla sequi earum quibusdam perferendis nobis obcaecati
            dolore. Blanditiis, ducimus sed.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Adarsh Sasidharan
          <br />
          India,
          <br />
          Pavitra Nagar
          <br />
          Mumbai
          <br />
          <span>adarsh.mithun.s23@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[19.09920098710242, 72.87450999111016]}
            zoom={9}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[19.09920098710242, 72.87450999111016]}>
              <Popup>Adarsh lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
