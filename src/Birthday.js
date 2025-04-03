import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera, FaVideo, FaImages, FaGift, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import Header from "./Header";

const Birthday = () => {
  const navigate = useNavigate();

  const images = [
    "/birthday1.jpg",
    "/birthday1.jpg",
    "/birthday1.jpg",
    "/birthday1.jpg",
    "/birthday1.jpg",
    "/birthday1.jpg"
  ];

  const videos = [
    { url:"https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview", title: "Sophia's Sweet 16" },
    { url: "https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview", title: "Aarav's 1st Birthday" }
  ];

  const packages = [
    { 
      name: "Basic Package", 
      details: ["2 hours coverage", "100+ high-res photos", "10 professionally edited images", "Online gallery"], 
      price: 10000,
      popular: false
    },
    { 
      name: "Standard Package", 
      details: ["4 hours coverage", "200+ high-res photos", "20 professionally edited images", "3-5 minute highlight video", "Online gallery"], 
      price: 20000,
      popular: true
    },
    { 
      name: "Premium Package", 
      details: ["Full day coverage", "500+ high-res photos", "50 professionally edited images", "5-8 minute cinematic video", "Premium photo album", "Online gallery", "2 photographers"], 
      price: 50000,
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The team captured every special moment beautifully. The photos brought tears to our eyes!",
      author: "Priya K., Mumbai"
    },
    {
      quote: "Professional, creative, and so much fun to work with. The highlight video was amazing!",
      author: "Rahul S., Delhi"
    },
    {
      quote: "Worth every rupee! They made my daughter's birthday look like a fairy tale.",
      author: "Ananya P., Bangalore"
    }
  ];

  // Styles
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    heroContainer: {
      width: "100%",
      position: "relative"
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.5)"
    },
    heroContent: {
      height: "500px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url(/birthday-hero.jpg)"
    },
    heroText: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "0 1rem",
      maxWidth: "56rem",
      margin: "0 auto"
    },
    heading1: {
      fontSize: "2.25rem",
      fontWeight: 700,
      color: "#ffffff",
      marginBottom: "1.5rem"
    },
    heading2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#1f2937",
      marginBottom: "3rem",
      textAlign: "center"
    },
    paragraph: {
      fontSize: "1.25rem",
      color: "#ffffff",
      marginBottom: "2rem"
    },
    buttonPrimary: {
      backgroundColor: "#db2777",
      color: "#ffffff",
      fontWeight: 700,
      padding: "0.75rem 2rem",
      borderRadius: "9999px",
      fontSize: "1.125rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    section: {
      width: "100%",
      maxWidth: "72rem",
      padding: "4rem 1.5rem",
      textAlign: "center"
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      marginBottom: "3rem"
    },
    featureCard: {
      padding: "2rem",
      borderRadius: "0.5rem",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      height: "100%"
    },
    icon: {
      fontSize: "2.25rem",
      color: "#db2777",
      margin: "0 auto 1.5rem"
    },
    galleryContainer: {
      width: "100%",
      backgroundColor: "#f3f4f6",
      padding: "4rem 0"
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem"
    },
    galleryItem: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      height: "20rem"
    },
    packageCard: {
      position: "relative",
      borderRadius: "0.75rem",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      width: "100%",
      maxWidth: "24rem"
    },
    popularBadge: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "#db2777",
      color: "#ffffff",
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      fontWeight: 700,
      borderBottomLeftRadius: "0.5rem"
    },
    testimonialCard: {
      backgroundColor: "#f9fafb",
      padding: "2rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      height: "100%"
    },
    ctaSection: {
      width: "100%",
      padding: "4rem 0",
      backgroundColor: "#db2777",
      color: "#ffffff",
      textAlign: "center"
    }
  };

  return (
    <div style={styles.container}>
     
      {/* Hero Section */}
      <div style={styles.heroContainer}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            
            <h1 style={{...styles.heading1, fontSize: "3rem"}}>Capture Your Special Day</h1>
            <p style={styles.paragraph}>Professional birthday photography that tells your story</p>
            <button 
              style={styles.buttonPrimary}
              onClick={() => { navigate("/booking"); window.scrollTo(0, 0); }}
            >
              <FaCalendarAlt style={{marginRight: "0.5rem"}} />
              Book Your Session
            </button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div style={styles.section}>
        <h2 style={styles.heading2}>Why Choose Us?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <FaCamera style={styles.icon} />
            <h3 style={{fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem"}}>Professional Equipment</h3>
            <p style={{color: "#6b7280"}}>High-quality cameras and lighting for perfect shots in any condition</p>
          </div>
          <div style={styles.featureCard}>
            <FaVideo style={styles.icon} />
            <h3 style={{fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem"}}>Cinematic Videos</h3>
            <p style={{color: "#6b7280"}}>Beautifully edited highlight videos to relive your special day</p>
          </div>
          <div style={styles.featureCard}>
            <FaImages style={styles.icon} />
            <h3 style={{fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem"}}>Creative Editing</h3>
            <p style={{color: "#6b7280"}}>Artistic touch to make your photos stand out</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div style={styles.galleryContainer}>
        <div style={{...styles.section, padding: "0 1.5rem 4rem"}}>
          <h2 style={styles.heading2}>Our Birthday Gallery</h2>
          <div style={styles.galleryGrid}>
            {images.map((img, index) => (
              <div key={index} style={styles.galleryItem}>
                <img 
                  src={img} 
                  alt={`Birthday ${index + 1}`} 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Highlights */}
      <div style={{...styles.section, backgroundColor: "#ffffff"}}>
        <h2 style={styles.heading2}>Featured Videos</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem"}}>
          {videos.map((video, index) => (
            <div key={index} style={{borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", transition: "all 0.3s ease"}}>
              <div style={{position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden"}}>
                <iframe
                  style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{padding: "1.5rem", backgroundColor: "#f9fafb"}}>
                <h3 style={{fontSize: "1.25rem", fontWeight: 600, color: "#1f2937"}}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div style={{...styles.section, background: "linear-gradient(to right, #fdf2f8, #f5f3ff)"}}>
        <h2 style={styles.heading2}>Our Packages</h2>
        <p style={{color: "#6b7280", textAlign: "center", marginBottom: "3rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", fontSize: "1.125rem"}}>
          We offer flexible packages to suit every birthday celebration and budget
        </p>
        
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "2rem", flexWrap: "wrap"}}>
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              style={{
                position: "relative",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                width: "100%",
                maxWidth: "24rem",
                border: pkg.popular ? "2px solid #db2777" : "none"
              }}
            >
              {pkg.popular && (
                <div style={styles.popularBadge}>
                  MOST POPULAR
                </div>
              )}
              <div style={{backgroundColor: "#ffffff", padding: "2rem", height: "100%"}}>
                <h3 style={{fontSize: "1.5rem", fontWeight: 700, color: "#1f2937", textAlign: "center", marginBottom: "1.5rem"}}>{pkg.name}</h3>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2rem"}}>
                  <span style={{fontSize: "2.25rem", fontWeight: 700, color: "#db2777"}}>
                    <FaRupeeSign style={{display: "inline"}} />{pkg.price.toLocaleString()}
                  </span>
                </div>
                <ul style={{marginBottom: "2rem", listStyle: "none", padding: 0}}>
                  {pkg.details.map((detail, i) => (
                    <li key={i} style={{marginBottom: "1rem", display: "flex", alignItems: "flex-start"}}>
                      <svg style={{width: "1.25rem", height: "1.25rem", color: "#db2777", marginRight: "0.5rem", flexShrink: 0}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{color: "#4b5563", fontSize: "1.125rem"}}>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    fontSize: "1.125rem",
                    backgroundColor: pkg.popular ? "#db2777" : "#f3f4f6",
                    color: pkg.popular ? "#ffffff" : "#1f2937",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onClick={() => { navigate("/booking"); window.scrollTo(0, 0); }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{...styles.section, backgroundColor: "#ffffff"}}>
        <h2 style={styles.heading2}>What Our Clients Say</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem"}}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={{color: "#f59e0b", marginBottom: "1.5rem"}}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={{width: "1.5rem", height: "1.5rem", display: "inline"}} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p style={{color: "#6b7280", fontStyle: "italic", marginBottom: "1.5rem", fontSize: "1.125rem"}}>"{testimonial.quote}"</p>
              <p style={{color: "#1f2937", fontWeight: 600, fontSize: "1.125rem"}}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <div style={{maxWidth: "56rem", margin: "0 auto", textAlign: "center", padding: "0 1.5rem"}}>
          <FaGift style={{fontSize: "3rem", margin: "0 auto 2rem"}} />
          <h2 style={{...styles.heading1, color: "#ffffff", marginBottom: "2rem"}}>Ready to Capture Your Special Day?</h2>
          <p style={{...styles.paragraph, maxWidth: "42rem", marginLeft: "auto", marginRight: "auto"}}>
            Let us help you preserve those precious moments that you'll cherish forever
          </p>
          <button 
            style={{
              ...styles.buttonPrimary,
              backgroundColor: "#ffffff",
              color: "#db2777"
            }}
            onClick={() => { navigate("/booking"); window.scrollTo(0, 0); }}
          >
            Get in Touch Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birthday;