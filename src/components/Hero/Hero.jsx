import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import banner from "../../assets/images/Group 38.png";

const Hero = () => {
  return (
    <Container
      className="p-0"
      style={{
        borderRight: "1px solid #232323",
        borderLeft: "1px solid #232323",
        height: "100%",
      }}
    >
      <div
        style={{
          minHeight: "80vh",
          position: "relative",
          overflow: "hidden",
        }}
        className="d-flex justify-content-center align-items-center hero_class"
      >
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom", // Positions at bottom
            backgroundSize: "contain", // Adjust as needed ('cover' or 'contain')
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            zIndex: 1,
          }}
        />

        {/* Text content */}
        <div
          className="text-center position-relative" // position-relative for z-index to work
          style={{
            maxWidth: "900px",
            zIndex: 2, // Above the background
            padding: "20px", // Ensures text doesn't touch edges
          }}
        >
          <h1 className="Hero_text" style={{ fontSize: "80px" }}>
            A Digital Product Studio that will work
          </h1>
          <div
            className="mobile_span"
            style={{
              background: "rgba(37, 36, 36, 0.7)", // 0.7 = 70% opacity
              padding: "30px 35px",
              borderRadius: "10px",
              marginTop: "30px",
              backdropFilter: "blur(10px)", // Frosted glass effect
              border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
            }}
          >
            <div
              className="mobile_none"
              style={{
                background: "transparent",
              }}
            >
              <span style={{ background: "transparent", fontSize: "21px" }}>
                For
              </span>
              &nbsp;&nbsp;
              <span
                style={{
                  background: "#292929",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "21px",
                  border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
                }}
              >
                Startups
              </span>
              &nbsp;&nbsp;,&nbsp;&nbsp;
              <span
                style={{
                  background: "#292929",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "21px",
                  border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
                }}
              >
                Enterprise leaders
              </span>
              &nbsp;&nbsp;,&nbsp;&nbsp;
              <span
                style={{
                  background: "#292929",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "21px",
                  border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
                }}
              >
                Media & Publishers
              </span>{" "}
              &nbsp;&nbsp;{" "}
              <span style={{ background: "transparent", fontSize: "21px" }}>
                and
              </span>{" "}
              &nbsp;&nbsp;
              <span
                style={{
                  background: "#292929",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "21px",
                }}
              >
                Social Goods
              </span>
            </div>
            <div className="d-none mobile_block">
              For startups, enterprise leaders, media & publishers, and social
              good.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" mt-4"
          >
            <Stack direction="horizontal" gap={3}>
              <Button
                style={{
                  background: "transparent",
                  border: "none",
                  background: "rgba(37, 36, 36, 0.7)", // 0.7 = 70% opacity
                  padding: "12px 20px",
                  borderRadius: "10px",
                }}
              >
                Our Works
              </Button>
              <Button
                style={{
                  background: "#9eff00",
                  color: "#1e1e1e",
                  border: "none",
                  fontWeight: "500",
                  padding: "12px 20px",
                  borderRadius: "10px",
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
