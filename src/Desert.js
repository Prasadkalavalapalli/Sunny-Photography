import React, { useState } from "react";

function Desert() {
    const images = [
        { src: "/desert1.jpg", height: "350px" },
        { src: "/desert2.jpg", height: "400px" },
        { src: "/desert3.jpg", height: "350px" },
        { src: "/desert4.jpg", height: "400px" },
        { src: "/desert5.jpg", height: "450px" },
        { src: "/desert6.jpg", height: "300px" },
        { src: "/desert7.jpg", height: "500px" },
        { src: "/desert8.jpg", height: "370px" },
        { src: "/desert9.jpg", height: "420px" },
    ];

    const [button, setButton] = useState(false);
    const toggleGallery = () => setButton(!button);

    return (
        <div style={{ padding: "40px", background: "linear-gradient(to right, #F4A261, #E76F51)", minHeight: "100vh", textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#8B0000", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "2px" }}>Desert Wedding</h1>
            
            <div style={{ position: "relative", width: "100%", height: "80vh", overflow: "hidden" }}>
                <video
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
                    src="/desert_wedding.mp4"
                ></video>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <p style={{ fontSize: "18px", color: "#444", maxWidth: "800px", lineHeight: "1.6" }}>
                    A desert wedding is a breathtaking experience, where golden dunes, stunning sunsets, and vast open landscapes create an unforgettable backdrop. It combines elegance with the rustic beauty of nature.
                </p>
                
                <ul style={{ textAlign: "left", maxWidth: "700px", fontSize: "18px", color: "#555", listStyle: "none", padding: "0" }}>
                    <li style={{ marginBottom: "10px" }}>🌅 <strong>Scenic Beauty:</strong> Sunset vows amidst golden sand dunes.</li>
                    <li style={{ marginBottom: "10px" }}>🐪 <strong>Unique Transport:</strong> Camel rides for the bride and groom.</li>
                    <li style={{ marginBottom: "10px" }}>🔥 <strong>Bonfire Nights:</strong> Traditional music and dance under the stars.</li>
                    <li style={{ marginBottom: "10px" }}>🍽️ <strong>Desert Cuisine:</strong> Authentic local delicacies and refreshing drinks.</li>
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
                                alt={`Desert Wedding ${index + 1}`}
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

export default Desert;
