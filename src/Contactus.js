import React from "react";
import { FaRunning, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Icon from "./Icon";
import Header from "./Header";

const ContactUs = () => {
  return (
    <>
    <Header/>
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#ffffff" }}>
      {/* Contact Form Section */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#000" }}>Contact Us</h1>
        <p style={{ fontSize: "1.2rem", color: "#000", fontWeight: "600" }}>Any questions or remarks? Just write us a message! </p>
      </div>

      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <input type="email" placeholder="Enter a valid email address" 
          style={{ padding: "12px", border: "2px solid #ddd", borderRadius: "25px", fontSize: "1rem", width: "260px", textAlign: "center" }}
        />
        <input type="text" placeholder="Enter your Name" 
          style={{ padding: "12px", border: "2px solid #ddd", borderRadius: "25px", fontSize: "1rem", width: "260px", textAlign: "center" }}
        />
      </div>
      <button style={{ marginTop: "15px", padding: "12px 40px", backgroundColor: "#30C5FF", color: "white", fontSize: "1rem", border: "none", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" }}>
        SUBMIT
      </button> 
      <div style={{paddingLeft:"70%"}}><Icon/></div>

      {/* Contact Information Section */}
      <div style={{ backgroundColor: "#30C5FF", padding: "80px 0", width: "100%", marginTop: "50px", display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#EAEAEA", padding: "50px 30px", borderRadius: "10px", textAlign: "center", width: "70%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          {/* About Club */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ backgroundColor: "#30C5FF", padding: "20px", borderRadius: "50%", display: "inline-block" }}>
              <FaRunning style={{ fontSize: "40px", color: "white" }} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginTop: "10px", color: "#000" }}>ABOUT CLUB</h3>
            <p style={{ color: "#555", fontStyle: "italic" }}>Running Guide & Workouts</p>
          </div>

          {/* Phone */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ backgroundColor: "#30C5FF", padding: "20px", borderRadius: "50%", display: "inline-block" }}>
              <FaPhoneAlt style={{ fontSize: "40px", color: "white" }} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginTop: "10px", color: "#000" }}>PHONE (LANDLINE)</h3>
            <p style={{ color: "#555", fontStyle: "italic" }}>+91 123 567 8387</p>
            <p style={{ color: "#555", fontStyle: "italic" }}>+91 123 523 8336</p>
          </div>

          {/* Office Location */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <div style={{ backgroundColor: "#30C5FF", padding: "20px", borderRadius: "50%", display: "inline-block" }}>
              <FaMapMarkerAlt style={{ fontSize: "40px", color: "white" }} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginTop: "10px", color: "#000" }}>OUR OFFICE LOCATION</h3>
            <p style={{ color: "#555", fontStyle: "italic" }}>The Interior Design Studio Company</p>
            <p style={{ color: "#555", fontStyle: "italic" }}>The Courtyard, Al Quoz 1, Colorado, USA</p>
          </div>
        </div>
      </div>

      {/* Footer
      <footer style={{ backgroundColor: "#222", color: "white", textAlign: "center", padding: "15px", width: "100%", marginTop: "20px", fontSize: "1rem" }}>
        <p>Website Design created with <span style={{ color: "#30C5FF", fontWeight: "bold" }}>Website Builder.</span></p>
      </footer> */}
    </div></>
  );
};

export default ContactUs;
