import React from "react";
import Header from "./Header";
import Icon from "./Icon";
import { FaPhone, FaEnvelope, FaImages, FaVideo } from "react-icons/fa";

const Events = () => {
  const events = [
    {
      name: "Function Photography",
      highlightVideo:"https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview" ,
      reel: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview",
      description: "Capture the essence of your special functions with our professional photography services",
      images: [
        "/birthday1.jpg",
        "/event1.jpg",
        "/family1.jpg",
        "/function1.jpg",
        "/haldi1.jpg",
        "/marriage1.jpg",
        "/marriage2.jpg",
        "/marriage3.jpg",
        "/prewedding1.jpg"
      ]
    },
    {
      name: "Outdoor Shoot",
      highlightVideo: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview",
      reel: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview",
      description: "Beautiful outdoor photography sessions in natural light and scenic locations",
      images: [
        "/birthday1.jpg",
        "/event1.jpg",
        "/family1.jpg",
        "/function1.jpg",
        "/haldi1.jpg",
        "/marriage1.jpg",
        "/marriage2.jpg",
        "/marriage3.jpg",
        "/prewedding1.jpg"
      ]
    },
    {
      name: "Event Coverage",
      highlightVideo: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview",
      reel: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview",
      description: "Comprehensive coverage for all types of events with professional equipment",
      images: [
        "/birthday1.jpg",
        "/event1.jpg",
        "/family1.jpg",
        "/function1.jpg",
        "/haldi1.jpg",
        "/marriage1.jpg",
        "/marriage2.jpg",
        "/marriage3.jpg",
        "/prewedding1.jpg"
      ]
    },
    {
      name: "Home Ceremonies",
      highlightVideo: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview",
      reel:"https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview" ,
      description: "Intimate coverage of your home ceremonies and family gatherings",
      images: [
        "/birthday1.jpg",
        "/event1.jpg",
        "/family1.jpg",
        "/function1.jpg",
        "/haldi1.jpg",
        "/marriage1.jpg",
        "/marriage2.jpg",
        "/marriage3.jpg",
        "/prewedding1.jpg"
      ]
    }
  ];

  // Styles
  const styles = {
    container: {
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif"
    },
    eventSection: {
      padding: "2rem 0",
      maxWidth: "1400px",
      margin: "0 auto"
    },
    eventHeader: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "1rem",
      padding: "0 2rem",
      textAlign: "left"
    },
    highlightVideo: {
      position: "relative",
      width: "90%",
      height: "70vh",
      margin: "2rem auto",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    },
    videoPlayer: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "16px"
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      padding: "2rem",
      margin: "2rem auto",
      maxWidth: "1400px"
    },
    videoColumn: {
      flex: "1",
      minWidth: "300px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    },
    galleryColumn: {
      flex: "2",
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    },
    galleryHeader: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "2rem"
    },
    galleryTitle: {
      fontSize: "1.8rem",
      fontWeight: "600",
      color: "#2c3e50"
    },
    galleryDescription: {
      color: "#7f8c8d",
      marginBottom: "2rem",
      lineHeight: "1.6"
    },
    imageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "1.5rem",
      maxHeight: "600px",
      overflowY: "auto",
      padding: "0.5rem"
    },
    galleryImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    },
    divider: {
      border: "none",
      height: "1px",
      backgroundColor: "#e0e0e0",
      margin: "3rem auto",
      width: "80%"
    },
    contactSection: {
      backgroundColor: "#30C5FF",
      padding: "3rem",
      color: "white",
      textAlign: "center"
    },
    contactContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    },
    contactTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1rem"
    },
    contactInfo: {
      display: "flex",
      justifyContent: "center",
      gap: "3rem",
      flexWrap: "wrap"
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "1.2rem"
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      
      {events.map((event, index) => (
        <div key={index} style={styles.eventSection}>
          <h2 style={styles.eventHeader}>{event.name}</h2>
          
          {/* Highlight Video */}
          <div style={styles.highlightVideo}>
            <iframe
              style={styles.videoPlayer}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              src={event.highlightVideo}
            ></iframe>
          </div>
          
          {/* Content Area */}
          <div style={styles.contentWrapper}>
            {/* Video Column */}
            <div style={styles.videoColumn}>
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
                autoPlay
                loop
                muted
                playsInline
                controls
                src={event.reel}
              ></video>
            </div>
            
            {/* Gallery Column */}
            <div style={styles.galleryColumn}>
              <div style={styles.galleryHeader}>
                <FaImages style={{ fontSize: "2rem", color: "#30C5FF" }} />
                <h3 style={styles.galleryTitle}>Photo Gallery</h3>
              </div>
              
              <p style={styles.galleryDescription}>{event.description}</p>
              
              <div style={styles.imageGrid}>
                {event.images.map((image, imgIndex) => (
                  <div key={imgIndex} style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
                    <img
                      src={image}
                      alt={`${event.name} ${imgIndex + 1}`}
                      style={styles.galleryImage}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {index < events.length - 1 && <hr style={styles.divider} />}
        </div>
      ))}
      
      {/* Contact Section */}
      <div style={styles.contactSection}>
        <div style={styles.contactContainer}>
          <h3 style={styles.contactTitle}>Ready to Book Your Event?</h3>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Contact us for bookings and inquiries</p>
          
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <FaPhone />
              <span>+91 7842409121</span>
            </div>
            <Icon />
            <div style={styles.contactItem}>
              <FaEnvelope />
              <a 
                href="mailto:udaygulla36@gmail.com" 
                style={{ color: "white", textDecoration: "none" }}
              >
                udaygulla36@gmail.com
              </a>
              
            </div>
          </div>
         <p style={{paddingLeft:""}}></p> 
        </div>
      </div>
      
      
    </div>
  );
};

export default Events;