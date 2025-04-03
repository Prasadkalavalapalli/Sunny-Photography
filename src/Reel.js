import React from 'react'
import { useNavigate } from 'react-router-dom';

function Reel() {
  const navigate=useNavigate();
  const images = [
    { src: "/marriage1.jpg", height: "350px" },
    { src: "/marriage2.jpg", height: "400px" },
    { src: "/marriage3.jpg", height: "350px" },
    { src: "/birthday1.jpg", height: "400px" },
    { src: "/function1.jpg", height: "450px" },
    { src: "/prewedding1.jpg", height: "300px" },
    { src: "/event1.jpg", height: "500px" },
    { src: "/family1.jpg", height: "370px" },
    { src: "/haldi1.jpg", height: "420px" },
];

    
  return (
    <div>
      
      <div
  style={{
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "24px",
  }}
>
  {/* Left Side - Reels Autoplay */}
  <div
    style={{
      width: "25%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <iframe
      style={{
        borderRadius: "12px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        objectFit: "cover",
        height: "500px",
        width: "100%",
      }}
      autoPlay
      loop
      muted
      playsInline
      controls
      src="https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview"></iframe>
  </div>

  {/* Right Side - Images and Text */}
  <div
    style={{
      width: "75%",
      padding: "16px",
      height: "500px",
      overflowY: "auto",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "#374151",
          textAlign: "center",
        }}
      >
        Gallery
      </h2>

      {/* Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Sample ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              backgroundSize:"contain"
            }}
          />
        ))}
      </div>

      {/* Button Section */}
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#374151",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1f2937")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#374151")}
            onClick={() => {
              navigate("/youtube");
              window.scrollTo(0, 0);
          }}
          >
            More Images
          </button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Reel
