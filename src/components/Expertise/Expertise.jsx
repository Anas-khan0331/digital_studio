import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import brush from "../../assets/images/badge.png";
import puzzle from "../../assets/images/call.png";
import crown from "../../assets/images/crown.png";
import shock from "../../assets/images/current.png";
const services = [
  {
    id: 1,
    icon: brush,
    // icon: "🎨",
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    id: 2,
    icon: puzzle,
    // icon: "🧩",
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, thoughts needs,challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    id: 3,
    // icon: "⚡",
    icon: shock,

    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    id: 4,
    // icon: "⚡",
    icon: crown,

    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];
const Expertise = () => {
  return (
    <div>
      <Container className="py-0 px-0" style={{}}>
        <Row className="g-0">
          {services.map((service) => (
            <Col key={service.id} md={6} lg={6} className="">
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
                    boxShadow: "0 0 10px #7FFF00", // glowing effect
                    fontSize: "24px",
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
    </div>
  );
};

export default Expertise;
