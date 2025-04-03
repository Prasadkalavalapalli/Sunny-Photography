import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Services() {
  const navigate = useNavigate();
  
  const servicesData = [
    { 
      url: "/marriage1.jpg", 
      height: "450px", 
      service: "Elegant Wedding Moments", 
      occasion: "marriage-event",
      description: "Capture your special day with timeless wedding photography"
    },
    { 
      url: "/birthday1.jpg", 
      height: "400px", 
      service: "Exclusive Birthday Celebrations", 
      occasion: "birthday-shoot",
      description: "Memorable birthday shoots for all ages"
    },
    { 
      url: "/marriage2.jpg", 
      height: "600px", 
      service: "Timeless Couple Portraits", 
      occasion: "marriage-event",
      description: "Romantic couple photography sessions"
    },
    { 
      url: "/family1.jpg", 
      height: "500px", 
      service: "Cherished Family Memories", 
      occasion: "events",
      description: "Beautiful family portraits to treasure forever"
    },
    { 
      url: "/event1.jpg", 
      height: "300px", 
      service: "Signature Event Highlights", 
      occasion: "events",
      description: "Professional coverage for all special events"
    },
    { 
      url: "/marriage3.jpg", 
      height: "450px", 
      service: "Luxury Wedding Photography", 
      occasion: "marriage-event",
      description: "Premium wedding photography packages"
    },
    { 
      url: "/function1.jpg", 
      height: "550px", 
      service: "Grand Function Chronicles", 
      occasion: "events",
      description: "Elegant coverage of your grand functions"
    },
    { 
      url: "/haldi1.jpg", 
      height: "450px", 
      service: "Vibrant Haldi Festivities", 
      occasion: "marriage-event",
      description: "Colorful haldi ceremony photography"
    }
  ];

  // Styles
  const styles = {
    container: {
      padding: "3rem",
      backgroundImage: "url(/background4.jpg)",
      backgroundSize: "220px",
      backgroundBlendMode: "lighten",
      backgroundColor: "rgba(255,255,255,0.9)",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif"
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "2rem",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "1.5rem",
      margin: "2rem 0"
    },
    serviceCard: {
      position: "relative",
      borderRadius: "12px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      height: "100%"
    },
    serviceImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease"
    },
    serviceOverlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
      padding: "1.5rem",
      color: "white",
      transform: "translateY(100%)",
      transition: "transform 0.3s ease",
      opacity: "0"
    },
    serviceTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "0.5rem"
    },
    serviceDescription: {
      fontSize: "1rem",
      opacity: "0.9"
    },
    serviceText: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      background: "rgba(0,0,0,0.7)",
      color: "white",
      padding: "1rem",
      textAlign: "center",
      fontSize: "1.2rem",
      fontWeight: "500",
      transition: "all 0.3s ease"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      
      <div style={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            style={{ 
              ...styles.serviceCard,
              height: service.height
            }}
            onClick={() => navigate(`/${service.occasion.replace(/\s+/g, "-").toLowerCase()}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
              e.currentTarget.querySelector('img').style.transform = "scale(1.1)";
              e.currentTarget.querySelector('.service-overlay').style.transform = "translateY(0)";
              e.currentTarget.querySelector('.service-overlay').style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
              e.currentTarget.querySelector('img').style.transform = "scale(1)";
              e.currentTarget.querySelector('.service-overlay').style.transform = "translateY(100%)";
              e.currentTarget.querySelector('.service-overlay').style.opacity = "0";
            }}
          >
            <img
              src={service.url}
              alt={service.service}
              style={styles.serviceImage}
            />
            <div style={styles.serviceText}>{service.service}</div>
            <div className="service-overlay" style={styles.serviceOverlay}>
              <h3 style={styles.serviceTitle}>{service.service}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;