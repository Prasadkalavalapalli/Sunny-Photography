import React, { useState } from "react";
import Header from "./Header";
import Icon from "./Icon";

function Destination() {
    const images = [
        { src: "/destination1.jpg", height: "350px" },
        { src: "/destination2.jpg", height: "400px" },
        { src: "/destination3.jpg", height: "350px" },
        { src: "/destination4.jpg", height: "400px" },
        { src: "/destination5.jpg", height: "450px" },
        { src: "/destination6.jpg", height: "300px" },
        { src: "/destination7.jpg", height: "500px" },
        { src: "/destination8.jpg", height: "370px" },
        { src: "/destination9.jpg", height: "420px" },
    ];

    const [button, setButton] = useState(false);
    const toggleGallery = () => setButton(!button);

    return (
        <div style={{ background: "linear-gradient(to right, #A1C4FD, #C2E9FB)", minHeight: "100vh", textAlign: "center" }}>
            <Header/>
            <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#00509E", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "2px" }}>Destination Wedding</h1>
            <Icon/>
            <div style={{ position: "relative", width: "100%", height: "80vh", overflow: "hidden" }}>
            <iframe
                    style={{
                        width: "90%",
                        height: "100%",
                        objectFit: "cover",
                        border: "solid black",
                        borderRadius: "20px"
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                     src="https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview"
                ></iframe>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <p style={{ fontSize: "18px", color: "#444", maxWidth: "800px", lineHeight: "1.6" }}>
                    A destination wedding is a dreamlike celebration where couples tie the knot in breathtaking locations, from sandy beaches to majestic castles. It’s an intimate experience filled with adventure and romance.
                </p>
                
                <ul style={{ textAlign: "left", maxWidth: "700px", fontSize: "18px", color: "#555", listStyle: "none", padding: "0" }}>
                    <li style={{ marginBottom: "10px" }}>🏝️ <strong>Exotic Locations:</strong> Stunning beaches, mountains, or historic sites.</li>
                    <li style={{ marginBottom: "10px" }}>✈️ <strong>Travel Experience:</strong> A wedding and vacation combined.</li>
                    <li style={{ marginBottom: "10px" }}>🍽️ <strong>Luxury Cuisine:</strong> Fine dining with local flavors.</li>
                    <li style={{ marginBottom: "10px" }}>🎉 <strong>Memorable Celebrations:</strong> Unique traditions, entertainment, and cultural experiences.</li>
                </ul>
                
                <button 
                    style={{ 
                        padding: "12px 24px", 
                        fontSize: "18px", 
                        backgroundColor: "#00509E", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "8px", 
                        cursor: "pointer", 
                        transition: "background 0.3s" 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#003F7F"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#00509E"}
                    onClick={toggleGallery}
                >
                   {!button ? "Explore More" : "Hide"}
                </button>
            </div>

            {button && (
                <div style={{ 
                    backgroundColor: "#ffffff", 
                    padding: "16px", 
                    borderRadius: "12px", 
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                    marginTop: "20px" 
                }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px", color: "#374151", textAlign: "center" }}>
                        Gallery
                    </h2>

                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(2, 1fr)", 
                        gap: "16px" 
                    }}>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={`Destination Wedding ${index + 1}`}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Destination;
