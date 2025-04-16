import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import brush from "../../assets/images/Icon.png";
import puzzle from "../../assets/images/Subtract.png";
import shock from "../../assets/images/shock.png";
const services = [
  {
    id: 1,
    icon: brush,
    // icon: "🎨",
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand.",
  },
  {
    id: 2,
    icon: puzzle,
    // icon: "🧩",
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions.",
  },
  {
    id: 3,
    // icon: "⚡",
    icon: shock,

    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
  },
];

const ServicesCard = () => {
  return (
    <Container className="py-0 px-0" style={{}}>
      <Row className="g-0">
        {services.map((service) => (
          <Col key={service.id} md={6} lg={4} className="">
            <div
              style={{
                background: "#1e1e1e",
                borderRadius: "0px",
                padding: "4rem 2rem",
                height: "100%",
                boxShadow: "0 0 0 transparent",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 15px 25px rgba(0, 0, 0, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Image
                style={{
                  width: "48px",
                  height: "48px",
                  padding: "10px",
                  background: "linear-gradient(145deg, #1f1f1f, #151515)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                  fontSize: "24px",
                  boxShadow: "0 0 10px #7FFF00", // glowing effect
                  color: "#7FFF00",
                  objectFit: "contain",
                }}
                src={service.icon}
              />

              <h5 style={{ color: "#fff", fontWeight: "600" }}>
                {service.title}
              </h5>
              <p style={{ color: "#ccc", fontSize: "14px" }}>
                {service.description}
              </p>
              <button
                style={{
                  marginTop: "1.5rem",
                  backgroundColor: "#1d1d1d",
                  color: "#fff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  width: "100%",
                  fontWeight: "500",
                  transition: "background 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#2b2b2b";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#1d1d1d";
                }}
              >
                Learn More
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesCard;
