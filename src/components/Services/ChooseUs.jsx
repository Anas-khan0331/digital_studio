import React from "react";
import { Container } from "react-bootstrap";
import servicesBanner from "../../assets/images/Group 39.png";

const ChooseUs = () => {
  return (
    <div style={{ position: "relative" }}>
      <Container
        className="d-flex justify-content-center flex-column align-items-center"
        style={{
          position: "relative",
          padding: "50px 0px",
          minHeight: "35vh",
          color: "#ffffff",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${servicesBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: creates parallax effect
        }}
      >
        {/* Content */}
        <div
          className="text-center"
          style={{
            background: "none",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1.5rem",
              background: "none",
            }}
          >
            Why Choose SquareUps?
          </h1>
          <p
            className="servces_text"
            style={{ fontSize: "1.2rem", background: "none" }}
          >
            Experience excellence in digital craftsmenship with our team of
            skilled professionals dedicated to delievery exceptional results.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
