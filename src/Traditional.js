import React, { useState } from "react";
import Header from "./Header";
import Icon from "./Icon";

function Traditional() {
    const images = [
        { src: "/img1.jpg", height: "350px" },
        { src: "/img2.jpg", height: "400px" },
        { src: "/img3.jpg", height: "350px" },
        { src: "/img4.jpg", height: "400px" },
        { src: "/img5.jpg", height: "450px" },
        { src: "/img6.jpg", height: "300px" },
        { src: "/img7.jpg", height: "500px" },
        { src: "/img8.jpg", height: "370px" },
        { src: "/img9.jpg", height: "420px" },
    ];

    const [button, setButton] = useState(false);

    const exploreMore = () => {
        setButton(!button);
    };

    return (
        <div style={{  background: "linear-gradient(to right, #fff7e6, #fce4d6)", minHeight: "100vh", textAlign: "center" }}>
            <Header/>
            <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#8B0000", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "2px" }}>Traditional Wedding</h1>
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
                    Traditional weddings are deeply rooted in cultural and religious customs, often incorporating beautiful rituals, symbolic attire, and meaningful ceremonies.
                    From the intricate Mehendi designs to the grand Baraat procession, every moment is filled with rich heritage and deep emotions.
                </p>
                
                <ul style={{ textAlign: "left", maxWidth: "700px", fontSize: "18px", color: "#555", listStyle: "none", padding: "0" }}>
                    <li style={{ marginBottom: "10px" }}>💍 <strong>Rituals:</strong> Sacred vows, traditional prayers, and family blessings.</li>
                    <li style={{ marginBottom: "10px" }}>👗 <strong>Attire:</strong> Brides in elaborate sarees or lehengas, grooms in sherwanis or dhotis.</li>
                    <li style={{ marginBottom: "10px" }}>🎶 <strong>Music & Dance:</strong> Folk music, classical tunes, and energetic dances.</li>
                    <li style={{ marginBottom: "10px" }}>🍽️ <strong>Food:</strong> A grand feast featuring traditional delicacies.</li>
                </ul>
                
                <button 
                    style={{ 
                        padding: "12px 24px", 
                        fontSize: "18px", 
                        backgroundColor: "#8B0000", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "8px", 
                        cursor: "pointer", 
                        transition: "background 0.3s" 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#a52a2a"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#8B0000"}
                    onClick={exploreMore}
                >
                   {!button ? "Explore More" : "Hide"}
                </button>
                
            </div>
            <Icon/>

            {button && (
                <div style={{ 
                    backgroundColor: "#ffffff", 
                    padding: "16px", 
                    borderRadius: "12px", 
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                    marginTop: "20px" 
                }}>
                    <h2 style={{ 
                        fontSize: "20px", 
                        fontWeight: "bold", 
                        marginBottom: "16px", 
                        color: "#374151", 
                        textAlign: "center" 
                    }}>
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
                                alt={`Sample ${index + 1}`}
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

export default Traditional;
