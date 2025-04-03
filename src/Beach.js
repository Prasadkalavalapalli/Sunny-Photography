import React, { useState } from "react";

import { motion } from "framer-motion";
import Icon from "./Icon";
import Header from "./Header";

function Beach() {
    const images = [
        { src: "/img1.jpg" },
        { src: "/img2.jpg" },
        { src: "/img3.jpg" },
        { src: "/img4.jpg" },
        { src: "/img5.jpg" },
        { src: "/img6.jpg" },
        { src: "/img7.jpg" },
        { src: "/img8.jpg" },
        { src: "/img9.jpg" },
    ];

    const [showGallery, setShowGallery] = useState(false);

    return (
        <div className="beach-wedding">
           <Header/>
            <motion.h1 className="title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                Beach Wedding
            </motion.h1>
            
            
            <motion.div className="video-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                <iframe className="video" autoPlay loop muted playsInline src="https://drive.google.com/file/d/1nUPXuCQpMfCmGyfGwiYJiVuVwJGpAlM5/preview"></iframe>
            </motion.div>
            
            <p className="description">Experience the magic of a beach wedding, where the waves whisper your love story, and the golden sands witness your vows.</p>
            
            <button className="explore-button" onClick={() => setShowGallery(!showGallery)}>
                {showGallery ? "Hide Gallery" : "Explore More"}
            </button>
            <Icon/>

            {showGallery && (
                <motion.div className="gallery" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                    {images.map((image, index) => (
                        <motion.div key={index} className="image-container" whileHover={{ scale: 1.1 }}>
                            <img src={image.src} alt={`Beach Wedding ${index + 1}`} className="image" />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Beach;
