import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const marriagesData = [
    { 
        id: 1, 
        type: "Traditional Wedding", 
        highlights: "Beautiful cultural rituals, traditional attire, and sacred ceremonies", 
        image: "/marriage3.jpg" 
    },
    { 
        id: 2, 
        type: "Destination Wedding", 
        highlights: "Exotic locations, stunning views, and unforgettable experiences", 
        image: "/marriage1.jpg" 
    },
    { 
        id: 3, 
        type: "Beach Wedding", 
        highlights: "Romantic seaside vows with sunset backdrops and ocean breezes", 
        image: "/haldi1.jpg" 
    },
];

function Marriage() {
    const navigate = useNavigate();

    // Styles
    const styles = {
        container: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            padding: "20px",
            fontFamily: "'Helvetica Neue', Arial, sans-serif"
        },
        heading: {
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#2c3e50",
            margin: "2rem 0",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.1)"
        },
        cardContainer: {
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "0 20px"
        },
        card: {
            display: "flex",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            transition: "all 0.3s ease",
            cursor: "pointer",
            height: "300px"
        },
        cardImage: {
            width: "50%",
            objectFit: "cover",
            transition: "transform 0.5s ease"
        },
        cardContent: {
            width: "50%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center"
        },
        cardTitle: {
            fontSize: "1.8rem",
            fontWeight: "600",
            color: "#2c3e50",
            marginBottom: "1rem"
        },
        cardText: {
            fontSize: "1.1rem",
            color: "#7f8c8d",
            lineHeight: "1.6"
        },
        bookingSection: {
            margin: "3rem 0",
            fontSize: "1.3rem",
            color: "#2c3e50"
        },
        bookingButton: {
            background: "transparent",
            border: "2px solid #3498db",
            color: "#3498db",
            padding: "0.8rem 2.5rem",
            fontSize: "1rem",
            borderRadius: "50px",
            cursor: "pointer",
            marginLeft: "1rem",
            transition: "all 0.3s ease",
            fontWeight: "600"
        }
    };

    return (
        <div style={styles.container}>
            <Header />
            <h1 style={styles.heading}>Wedding Photography Services</h1>
            
            <div style={styles.cardContainer}>
                {marriagesData.map((marriage, index) => (
                    <div 
                        key={marriage.id} 
                        style={{ 
                            ...styles.card,
                            flexDirection: index % 2 === 0 ? "row" : "row-reverse"
                        }}
                        onClick={() => navigate(`/marriage-event/${marriage.type.replace(/\s+/g, '-').toLowerCase()}`)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px)";
                            e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)";
                            e.currentTarget.querySelector('img').style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                            e.currentTarget.querySelector('img').style.transform = "scale(1)";
                        }}
                    >
                        <img 
                            src={marriage.image} 
                            alt={marriage.type} 
                            style={styles.cardImage}
                        />
                        <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>{marriage.type}</h2>
                            <p style={styles.cardText}>{marriage.highlights}</p>
                        </div>
                    </div>
                ))}
                
                <div style={styles.bookingSection}>
                    Ready to book your dream wedding photography?
                    <button 
                        style={styles.bookingButton}
                        onClick={() => { navigate("/booking"); window.scrollTo(0, 0); }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#3498db";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#3498db";
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Marriage;