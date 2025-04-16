import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import servicesBanner from "../../assets/images/Group 39.png";
import squareLogo from "../../assets/images/Logo.png";

const Thankx = () => {
  return (
    <div style={{ position: "relative" }}>
      <Container
        className="d-flex justify-content-center flex-column align-items-center"
        style={{
          position: "relative",
          padding: "50px 0px",
          minHeight: "45vh",
          color: "#ffffff",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${servicesBanner})`,
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
          <div className="" style={{ background: "none" }}>
            <div className="mx-1" style={{ background: "none" }}>
              <Image
                className="p-1"
                style={{
                  background: "#9eff00",
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  marginBottom: "30px",
                }}
                src={squareLogo}
                rounded
              />
            </div>
          </div>
          <h1
            className="servces_heading"
            style={{
              fontSize: "3rem",
              marginBottom: "1.5rem",
              background: "none",
            }}
          >
            Thank you for your Interest in SquareUp.{" "}
          </h1>
          <p
            className="servces_text"
            style={{
              fontSize: "1.2rem",
              background: "none",
              maxWidth: "950px",
            }}
          >
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>
          <div
            className=""
            style={{
              background: "none",
            }}
          >
            <Button
              style={{
                background: "#9eff00",
                color: "#1e1e1e",
                border: "none",
                fontWeight: "500",
                padding: "12px 20px",
                marginTop: "50px",
                borderRadius: "10px",
              }}
            >
              Start Project
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Thankx;
