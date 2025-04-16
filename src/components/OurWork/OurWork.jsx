import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import { default as p4 } from "../../assets/images/p4.png";
import p6 from "../../assets/images/p5.png";
import p5 from "../../assets/images/p6.png";
const services = [
  {
    id: 1,
    icon: p1,
    image: "",
    position: "CEO of Chic Boutique",
    ceoName: "John Smith",
    title:
      "SquareUp has been Instrumental in Transforming our Online Presence. ",
    description:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
  },
  {
    id: 2,
    icon: p2,
    image: "",
    position: "Founder of HungryBites.",
    ceoName: "Sarah Johnson",
    title: "Working with SquareUp was a breeze. ",
    description:
      "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
  },
  {
    id: 3,
    icon: p4,
    image: "",
    position: "CEO of EventMasters",
    ceoName: "Mark Thompson",
    title:
      "SquareUp developed a comprehensive booking and reservation system for our event management company ",
    description:
      "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
  },
  {
    id: 4,
    icon: p3,
    image: "",
    position: "COO of ProTech Solutions.",
    ceoName: "Laura Adams",
    title: "ProTech Solutions turned to SquareUp to automate our workflow",
    description:
      "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
  },
  {
    id: 5,
    icon: p5,
    image: "",
    position: "Founder of Dream Homes Realty.",
    ceoName: "Michael Anderson",
    title:
      "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
    description:
      "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
  },
  {
    id: 5,
    icon: p6,
    image: "",
    position: "CEO of FitLife Tracker",
    ceoName: "Emily Turner",
    title:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    description:
      "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
  },
];
const OurWork = () => {
  return (
    <div>
      <Container className="py-0 px-0" style={{}}>
        <Row className="g-0">
          {services.map((service) => (
            <Col key={service.id} md={6} lg={6} className="">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#1e1e1e",
                  borderRadius: "0px",
                  padding: "2rem 2rem",
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
                <div className="" style={{ flex: 1 }}>
                  <h5
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      lineHeight: "30px",
                      color: "#9fdeb6",
                    }}
                  >
                    {service.title}
                  </h5>
                  <p style={{ color: "#ccc", fontSize: "14px" }}>
                    {service.description}
                  </p>
                </div>
                <div
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
                  className=""
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex  align-items-center">
                      <Image
                        src={service.icon}
                        style={{
                          width: "70px",
                          height: "70px",
                          marginRight: "10px",
                        }}
                      />
                      <div className="">
                        <p
                          style={{
                            color: "#ccc",
                            fontSize: "14px",
                            marginBottom: "0px",
                          }}
                        >
                          {service.ceoName}
                        </p>
                        <p
                          style={{
                            color: "#ccc",
                            fontSize: "14px",
                            marginBottom: "0px",
                          }}
                        >
                          {service.position}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Button
                        style={{
                          background: "transparent",
                          border: "none",
                          background: "rgba(37, 36, 36, 0.7)", // 0.7 = 70% opacity
                          padding: "12px 20px",
                          borderRadius: "10px",
                        }}
                      >
                        Open Website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurWork;
