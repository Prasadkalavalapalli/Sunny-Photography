import { useEffect } from "react";

import { Carousel } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HomePage from "./Homepage";
import Header from "./Header";
import Icon from "./Icon";
import Youtube from "./Youtube";
import Marquee from "./Marquee";
import Services from "./Services";
import Reel from "./Reel";
function Home() {
  const navigate = useNavigate();
  const images = [
    {
      src: "/marriage3.jpg",
      title: "Wedding Photography",
      subtitle: "Capturing your special moments",
      occasion: "marriage-event"
    },
    {
      src: "/marriage2.jpg",
      title: "Bride & Groom Portraits",
      subtitle: "Beautiful portraits that last a lifetime",
      occasion: "marriage-event"
    },
    {
      src: "/marriage1.jpg",
      title: "Traditional Wedding Coverage",
      subtitle: "Professional event photography",
      occasion: "marriage-event"
    },
    {
      src: "/birthday1.jpg",
      title: "Birthday Celebration Shoots",
      subtitle: "Unique concepts for memorable photos",
      occasion: "birthday-shoot"
    },
    {
      src: "/function1.jpg",
      title: "Special Function Photography",
      subtitle: "Explore our collection of work",
      occasion: "function-event"
    },
    {
      src: "/prewedding1.jpg",
      title: "Pre-Wedding Photoshoot",
      subtitle: "Capturing your love story before the big day",
      occasion: "marriage-event"
    },
    {
      src: "/event1.jpg",
      title: "Corporate & Social Events",
      subtitle: "Professional coverage for special occasions",
      occasion: "events"
    },
    {
      src: "/family1.jpg",
      title: "Family Portraits",
      subtitle: "Cherish family moments forever",
      occasion: "family-event"
    },
    {
      src: "/haldi1.jpg",
      title: "Haldi Ceremony Photography",
      subtitle: "Vibrant moments of traditional celebrations",
      occasion: "marriage-event"
    },
];




  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    images.forEach((img) => {
      console.log("Image path:", process.env.PUBLIC_URL + img.src);
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-100">
      {/* Background Slider with Text */}
      <Carousel
        className="w-full"
        interval={1500}
        controls
        indicators
        fade
        style={{ height: "100vh" }}
      >
        {images.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="w-full bg-center"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + slide.src})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Header/>
              
              <div
                style={{ height: "70vh", paddingTop: "70vh" }}
                className="slide-text"
                onClick={() => {
                  navigate(`/${slide.occasion}`);
                }}
              >
                {slide.title}
              </div>
              <Icon />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Services />
      <Reel />
      <HomePage />

      <Marquee/>

       </div>
  );
}

export default Home;
