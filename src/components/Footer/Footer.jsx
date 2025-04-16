import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import squareLogo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        color: "#ccc",
        fontSize: "14px",
      }}
    >
      <Container>
        <Row className="align-items-center mb-4">
          {/* Left: Logo and Name */}
          <Col md={4} className="d-flex align-items-center mb-3 mb-md-0">
            <Image
              className="footerImg"
              src={squareLogo}
              alt="Logo"
              style={{
                width: "40px",
                height: "40px",
                background: "#9eff00",
                padding: "6px",
                borderRadius: "8px",
              }}
            />
            <span
              style={{ color: "#fff", fontWeight: "600", marginLeft: "10px" }}
            >
              SquareUp
            </span>
          </Col>

          {/* Center: Navigation Links */}
          <Col md={4} className=" text-center mb-3 mb-md-0">
            <div className="mobile_footer" style={{ display: "flex" }}>
              <a href="#" style={navStyle}>
                Home
              </a>
              <a href="#" style={navStyle}>
                Services
              </a>
              <a href="#" style={navStyle}>
                Work
              </a>
              <a href="#" style={navStyle}>
                Process
              </a>
              <a href="#" style={navStyle}>
                About
              </a>
              <a href="#" style={navStyle}>
                Careers
              </a>
              <a href="#" style={navStyle}>
                Contact
              </a>
            </div>
          </Col>

          {/* Right: Social Icons */}
          <Col md={4} className="text-md-end text-center">
            <p style={{ color: "#aaa", marginBottom: "8px" }}>Stay Connected</p>
            <div className="d-inline-flex gap-2">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#222" }} />

        {/* Bottom Info */}
        <Row className="text-center text-md-start align-items-center pt-3 pb-4">
          <Col md={4} className="mb-2 mb-md-0">
            <ContactIcon icon={<FaEnvelope />} text="hello@squareup.com" />
          </Col>
          <Col md={4} className="mb-2 mb-md-0">
            <ContactIcon icon={<FaPhoneAlt />} text="+91 91813 23 2309" />
          </Col>
          <Col md={4}>
            <ContactIcon
              icon={<FaMapMarkerAlt />}
              text="Somewhere in the World"
            />
          </Col>
        </Row>

        {/* Footer Bottom Text */}
        <Row className="pt-2">
          <Col
            className="text-center"
            style={{ fontSize: "13px", color: "#555" }}
          >
            © 2023 SquareUp. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Reusable inline styles
const navStyle = {
  color: "#ccc",
  margin: "0 10px",
  textDecoration: "none",
  fontWeight: "500",
};

const SocialIcon = ({ icon }) => (
  <div
    style={{
      boxShadow: "0 0 10px #7FFF00", // glowing effect
      padding: "8px",
      borderRadius: "6px",
      color: "#9eff00",
      fontSize: "14px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
    }}
  >
    {icon}
  </div>
);

const ContactIcon = ({ icon, text }) => (
  <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
    <span style={{ color: "#9eff00", fontSize: "14px" }}>{icon}</span>
    <span style={{ color: "#ccc" }}>{text}</span>
  </div>
);

export default Footer;
