// components/Footer.js
import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        background: "#333",
        padding: "24px 0",
        color: "#fff",
        marginTop: 10,
      }}
    >
      <Row justify="space-around" align="middle" gutter={[16, 16]}>
        <Col>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h3>Follow Us</h3>
          <div>
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
            </a>
            <a
              href="https://www.twitter.com/your-twitter-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined
                style={{ fontSize: "24px", margin: "0 8px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/your-linkedin-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
            </a>
            <a
              href="https://www.youtube.com/your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
            </a>
          </div>
        </Col>
        <Col>
          <h3>Contact</h3>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: +1 123-456-7890</p>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col>
          <p>
            &copy; {new Date().getFullYear()} Your Website Name. All rights
            reserved.
          </p>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
