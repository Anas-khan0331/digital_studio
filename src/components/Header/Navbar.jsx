import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiX } from "react-icons/fi"; // Custom icons
import { NavLink } from "react-router-dom";
import squareLogo from "../../assets/images/Logo.png";
import burger from "../../assets/images/burger.png";

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false); // Toggle state

  return (
    <div style={{ borderBottom: "1px solid #232323" }}>
      <Navbar expand="lg" expanded={expanded}>
        <Container style={{ padding: "0" }}>
          <Navbar.Brand href="#">
            <div className="d-flex align-items-center">
              <div className="mx-1">
                <Image
                  className="p-1"
                  style={{ background: "#9eff00" }}
                  src={squareLogo}
                  rounded
                />
              </div>
              <div>
                <p style={{ fontWeight: "500", marginBottom: "0px" }}>
                  SquareUp
                </p>
              </div>
            </div>
          </Navbar.Brand>

          {/* CUSTOM TOGGLE BUTTON */}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setExpanded(!expanded)}
            children={
              expanded ? (
                <FiX size={24} style={{ color: "#9eff00" }} />
              ) : (
                // <FiMenu size={24} color="#9eff00" />
                <Image src={burger} />
              )
            }
            style={{
              border: "none",
              background: "transparent",
              boxShadow: "none",
            }}
          />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0">
              {[
                "/",
                "/services",
                "/work",
                "/process",
                "/about",
                "/careers",
              ].map((route, index) => {
                const labels = [
                  "Home",
                  "Services",
                  "Work",
                  "Process",
                  "About",
                  "Careers",
                ];
                return (
                  <NavLink
                    key={route}
                    to={route}
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: "#fafafa",
                      background: isActive ? "#262626" : "transparent",
                      margin: "0px 10px",
                      borderRadius: "10px",
                      padding: "10px 15px",
                      textDecoration: "none",
                    })}
                    onClick={() => setExpanded(false)} // Close on link click
                  >
                    {labels[index]}
                  </NavLink>
                );
              })}
            </Nav>
            <div className="d-flex navbar_btn">
              <Button
                style={{
                  background: "#9eff00",
                  border: "none",
                  padding: "12px 25px",
                  color: "#1e1e1e",
                  fontWeight: "500",
                }}
                onClick={() => setExpanded(false)} // Close on button click
              >
                Contact
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
