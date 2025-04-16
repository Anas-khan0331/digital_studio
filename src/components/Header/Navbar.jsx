import React from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"; // Import NavLink
import squareLogo from "../../assets/images/Logo.png";

const NavbarComponent = () => {
  return (
    <div style={{ borderBottom: "1px solid #232323" }}>
      <Navbar expand="lg">
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
              <div className="">
                <p style={{ fontWeight: "500", marginBottom: "0px" }}>
                  SquareUp
                </p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0">
              <NavLink
                to="/" // Change href to to
                className="nav-link" // Add nav-link class
                style={({ isActive }) => ({
                  color: "#fafafa",
                  background: isActive ? "#262626" : "transparent",
                  margin: "0px 10px",
                  borderRadius: "10px",
                  padding: "12px 20px",
                  textDecoration: "none",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/services" // Change href to to
                className="nav-link"
                style={({ isActive }) => ({
                  color: "#fafafa",
                  background: isActive ? "#262626" : "transparent",
                  margin: "0px 10px",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  textDecoration: "none",
                })}
              >
                Services
              </NavLink>
              <NavLink
                to="/work"
                className="nav-link"
                style={({ isActive }) => ({
                  color: "#fafafa",
                  background: isActive ? "#262626" : "transparent",
                  margin: "0px 10px",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  textDecoration: "none",
                })}
              >
                Work
              </NavLink>
              <NavLink
                to="/process"
                className="nav-link"
                style={({ isActive }) => ({
                  color: "#fafafa",
                  background: isActive ? "#262626" : "transparent",
                  margin: "0px 10px",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  textDecoration: "none",
                })}
              >
                Process
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => ({
                  color: "#fafafa",
                  background: isActive ? "#262626" : "transparent",
                  margin: "0px 10px",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  textDecoration: "none",
                })}
              >
                About
              </NavLink>
              <NavLink
                to="/careers"
                className="nav-link"
                style={({ isActive }) => ({
                  color: "#fafafa",
                  background: isActive ? "#262626" : "transparent",
                  margin: "0px 10px",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  textDecoration: "none",
                })}
              >
                Careers
              </NavLink>
            </Nav>
            <div className="d-flex">
              <Button
                style={{
                  background: "#9eff00",
                  border: "none",
                  padding: "12px 25px",
                  color: "#1e1e1e",
                  fontWeight: "500",
                }}
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
