import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


function Youtube() {
    const videos = [
        "q0m8gJNzXSs",
        "OL4nXdh3SqY",
        "762e7W8Lmc8",
        "MB3rCNBmEeo",
        "7zQkTmywi_E",
        "Rz2o_LCdWU8",
        "o2SHv4Hi4KU",
        "PJ5znTuUaA0",
        "EJtlGLnAMkI",
      ];
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
    
const navigate=useNavigate();     
  return (
    <>
    <div className=" text-center  " onClick={()=>navigate("/")}>
          <img
            src="logo.jpg"
            alt="Logo"
            className="me-3 rounded-circle shadow-sm"
            style={{ height: "60px", width: "60px" }}
          />
          <h1
            className="text-warning d-inline-block"
            style={{ fontSize: "1.8rem",textAlign:"center", marginTop:"55px"}}
          >
            Sunny Photography
          </h1>
        </div>
    <h2
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily:"cursive",
          marginBottom: "16px",
          color: "#374151",
          textAlign: "end",
          paddingRight:"50px",
          textShadow:"2px 2px 2px green"
        }}
      >
        Our Photo & Video Collections
      </h2>

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
            }}
          />
        ))}
      </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
      {videos.map((videoId, index) => (
        <iframe
          key={index}
          width="100%"
          height="300px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`YouTube video player ${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "20px", padding: "10px" }}
        ></iframe>
      ))}
    </div></>
  );
}

export default Youtube;
