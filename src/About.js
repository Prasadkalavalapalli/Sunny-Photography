import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";


const team = [
    { name: "John Doe", role: "Lead Photographer", image: "/birthday1.jpg" },
    { name: "Emily Smith", role: "Creative Director", image: "/function1.jpg" },
    { name: "Michael Brown", role: "Wedding Specialist", image: "/haldi1.jpg" }
];

function AboutUs() {
    return (
        <div className="about-container">
          <Header/>
            <section className="hero-section">
                <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    Capturing Moments, Creating Memories
                </motion.h1>
            </section>

            <section className="story-section">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2015, we are a team of passionate photographers dedicated to transforming moments into timeless photographs.
                        Whether it's weddings, portraits, or special events, we bring creativity and expertise to every shot.
                    </p>
                </motion.div>
                <motion.img src="prewedding1.jpg" alt="Studio" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}/>
            </section>

            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <motion.div key={index} className="team-card" whileHover={{ scale: 1.05 }}>
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
