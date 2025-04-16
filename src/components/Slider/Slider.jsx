import React from "react";
import { Container, Image } from "react-bootstrap";
import adoLogo from "../../assets/images/ado.png";
import amaLogo from "../../assets/images/ama.png";
import slackLogo from "../../assets/images/slack.png";
import spoLogo from "../../assets/images/spo.png";
import zLogo from "../../assets/images/z.png";
import zoomLogo from "../../assets/images/zoom.png";
import "./Slider.css"; // Create this file for the animations

const Slider = () => {
  const logos = [zLogo, zoomLogo, adoLogo, amaLogo, spoLogo, slackLogo];
  return (
    <div style={{ position: "relative" }}>
      <Container
        style={{
          borderTop: "1px solid #232323",
          height: "100%",
          padding: "50px 0px 70px",
          borderRight: "1px solid #232323",
          borderLeft: "1px solid #232323",
        }}
      >
        <div
          className="trusted"
          style={{
            padding: "12px 25px",
            position: "absolute",
            top: "-30px",
            zIndex: "100",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(37, 36, 36, 0.7)",
            borderRadius: "40px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          Trusted By 250+ Companies
        </div>

        {/* Infinite Logo Slider */}
        <div className="slider-container">
          <div className="slider">
            <div className="slide-track">
              {/* Original set */}
              {logos.map((logo, index) => (
                <div className="slide" key={`original-${index}`}>
                  <Image
                    src={logo}
                    style={{ width: "120px", height: "120px" }}
                    alt={`Company ${index + 1}`}
                  />
                </div>
              ))}
              {logos?.map((logo, index) => (
                <div className="slide" key={`duplicate-${index}`}>
                  <Image
                    src={logo}
                    style={{ width: "120px", height: "120px" }}
                    alt={`Company ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
