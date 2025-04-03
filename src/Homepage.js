import React from "react";
import Services from "./Services";
import Reel from "./Reel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <iframe
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "70%",
          objectFit: "cover",
          zIndex: "-1",
          border:"solid black 3px",
          borderRadius:"20px"
        }}
        autoPlay
        loop
        muted
        playsInline
        controls={true} // No controls for background videos
         src="https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview"
      ></iframe>

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: "1", textAlign: "center", color: "white", padding: "50px",}}>
        
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "25%", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }} onClick={()=>{navigate("/youtube");window.scrollTo(0,0)}}>
          Wedding Presentation
        </h2>
        <p style={{ fontSize: "18px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
          Capture the most beautiful moments of your life with us.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
