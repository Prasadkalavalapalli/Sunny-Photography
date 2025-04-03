import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const services = [
  {
    name: "Marriage Photography",
    description: "Capture your special moments with our professional wedding photography services.",
    image: "/marriage1.jpg",
    types: ["Traditional", "Candid", "Destination Wedding"],
    packages: ["Basic Package", "Premium Package", "Luxury Package"],
    occusation:"marriage-event"
  },
  {
    name: "Birthday Photography",
    description: "Make your birthday memorable with stunning photography and video coverage.",
    image: "/birthday1.jpg",
    types: ["Kids Birthday", "Themed Party", "Milestone Celebrations"],
    packages: ["Standard", "Deluxe", "Ultimate"],
    occusation:"birthday-shoot"
  },
  {
    name: "Event Photography",
    description: "We cover all types of events with high-quality photography and video services.",
    image: "/event1.jpg",
    types: ["Corporate Events", "Concerts", "Festivals", "Sports Events"],
    packages: ["Basic", "Professional", "Elite"],
    occusation:"events"
  }
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Header />
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Services</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "0 20px" ,}}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              background: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              marginLeft: index % 2 === 0 ? "250px" : "0",
              marginRight: index % 2 !== 0 ? "250px" : "0"
            }}
            onClick={() => navigate(`/${service.occusation.toLowerCase().replace(/\s+/g, "-")}`)}

            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={service.image}
              alt={service.name}
              style={{ width: "50%", height: "250px", objectFit: "cover" }}
            />
            <div style={{ width: "50%", padding: "20px", textAlign: "center" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#222", marginBottom: "10px" }}>
                {service.name}
              </h2>
              <p style={{ fontSize: "16px", color: "#555" }}>{service.description}</p>
              <p><strong>Types:</strong> {service.types.join(", ")}</p>
              <p><strong>Packages:</strong> {service.packages.join(", ")}</p>
              <button className="btn btn-outline-secondary px-5" onClick={()=>{navigate("/booking");window.scrollTo(0,0)}}>Booking Event</button>
         
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex">
        <h4 className="float-start">For Any Enquiry Contact us:</h4>
        <span className="float-end">
          <p>📞 Phone: +91 7842409121</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:udaygulla36@gmail.com" className="text-decoration-none">
              udaygulla36@gmail.com
            </a>
          </p>
        </span>
      </div>

      <Icon />
    </div>
  );
};

export default Service;
