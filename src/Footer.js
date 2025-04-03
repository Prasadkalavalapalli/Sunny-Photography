import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigator = useNavigate();
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container className="text-center">
        <h5 className="fw-bold">Copyright & Disclaimer</h5>
        <div className="row text-start mt-4">
          {/* Contact Information */}
          <div className="col-md-4">
            <h6 className="fw-bold">Contact Information</h6>
            <p>📞 Phone: +91 7842409121</p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:udaygulla36@gmail.com"
                className="text-white text-decoration-none"
              >
                udaygulla36@gmail.com
              </a>
              <br />
              <br />
              📱 WhatsApp:{" "}
              <a
                href="https://wa.me/7248409121"
                target="_blank"
                className="text-white text-decoration-none"
              >
                Chat on WhatsApp
              </a>
            </p>

            <p>📍 Location: Hyderabad</p>
          </div>

          {/* Quick Links */}
          {/* <div className="col-md-4">
            <h6 className="fw-bold">Quick Links</h6>
            <p>🏠 <Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p>👨‍💻 <Link to="/about" className="text-white text-decoration-none">About Me</Link></p>
            <p>📂 <Link to="/projects" className="text-white text-decoration-none">Projects</Link></p>
          </div> */}

          {/* Social Media Links */}
          <div className="col-md-4">
            <h6 className="fw-bold">Social Media</h6>
            <p>
              🔗Instagram:{" "}
              <a
                href="https://www.instagram.com/sunnyphotography.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                sunnyphotography
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/prasadkalavalapalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                linkedin.com/in/prasadkalavalapalli
              </a>
            </p>
            <p>
              🐦 Twitter:{" "}
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                twitter.com/your-profile
              </a>
            </p>
          </div>
        </div>

        <hr className="bg-light mt-4" />

        {/* Footer Bottom Links */}
        <div>
          <a href="#" className="text-white me-3 text-decoration-none">
            Privacy Policy
          </a>
          <a href="#" className="text-white me-3 text-decoration-none">
            Terms of Service
          </a>
          <a
            className="text-white text-decoration-none"
            onClick={() => {
              navigator("/contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact Us
          </a>
        </div>
        <p className="mt-3 mb-0">
          &copy; {new Date().getFullYear()} Sunny Photography. All Rights
          Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
