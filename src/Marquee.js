import React from 'react';
import { useNavigate } from 'react-router-dom';

function Marquee() {
  const images = [
    {
      src: "/marriage1.jpg",
      title: "Wedding Photography",
      subtitle: "Capturing your special moments with elegance",
      occasion: "marriage-event"
    },
    {
      src: "/marriage2.jpg",
      title: "Bride & Groom Portraits",
      subtitle: "Timeless memories of your special day",
      occasion: "marriage-event"
    },
    {
      src: "/event1.jpg",
      title: "Event Coverage",
      subtitle: "Professional event photography for all occasions",
      occasion: "events"
    },
    {
      src: "/birthday1.jpg",
      title: "Creative Birthday Shoots",
      subtitle: "Unique themes to make birthdays unforgettable",
      occasion: "birthday-shoot"
    },
    {
      src: "/function1.jpg",
      title: "Function Photography",
      subtitle: "Beautifully capturing cultural & family functions",
      occasion: "events"
    },
    {
      src: "/prewedding1.jpg",
      title: "Pre-Wedding Photoshoot",
      subtitle: "Celebrate love before the big day",
      occasion: "marriage-event"
    },
    {
      src: "/event1.jpg",
      title: "Outdoor Photography",
      subtitle: "Natural lighting for stunning visuals",
      occasion: "events"
    },
    {
      src: "/family1.jpg",
      title: "Family Portraits",
      subtitle: "Cherish beautiful family moments forever",
      occasion:"events"
    },
    {
      src: "/function1.jpg",
      title: "Fashion Photography",
      subtitle: "Stylish and high-end professional shoots",
      occasion: "events"
    }
];
const navigate=useNavigate();
  return (
    <div style={{ cursor:"pointer"}}>
      <marquee>
  <div className="d-flex">
    {images.map((slide, index) => (
      <div key={index} className="mx-3" onClick={() =>{navigate(`/${slide.occasion}`);window.scroll(0,0);}} style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'}} onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
       
      }} onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}> 
        
        <div className="card-body" >
        <img src={slide.src} alt={slide.title} className="card-img-top" style={{ width: "200px" ,borderRadius:"20px",height: "150px"}} />
          <h5 className=" text-center">{slide.title}</h5>
          
        </div>
      </div>
    ))}
  </div>
</marquee>
    </div>
  )
}

export default Marquee
