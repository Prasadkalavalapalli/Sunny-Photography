import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import Header from "./Header";

function Services() {
  const navigate = useNavigate();
  const randomImages = [
    { 
      url: "/marriage1.jpg", 
      height: "300px", 
      service: "Elegant Wedding Moments", 
      occasion: "marriage-event" 
    },
    { 
      url: "/birthday1.jpg", 
      height: "400px", 
      service: "Exclusive Birthday Celebrations", 
      occasion: "birthday-shoot" 
    },
    { 
      url: "/marriage2.jpg", 
      height: "600px", 
      service: "Timeless Couple Portraits", 
      occasion: "marriage-event" 
    },
    { 
      url: "/family1.jpg", 
      height: "500px", 
      service: "Cherished Family Memories", 
      occasion: "events" 
    },
    { 
      url: "/event1.jpg", 
      height: "300px", 
      service: "Signature Event Highlights", 
      occasion: "events" 
    },
    { 
      url: "/marriage3.jpg", 
      height: "450px", 
      service: "Luxury Wedding Photography", 
      occasion: "marriage-event" 
    },
    { 
      url: "/function1.jpg", 
      height: "550px", 
      service: "Grand Function Chronicles", 
      occasion: "events" 
    },
    { 
      url: "/haldi1.jpg", 
      height: "450px", 
      service: "Vibrant Haldi Festivities", 
      occasion: "marriage-event" 
    }
  ];
  
    return (
      <>
      <div className="p-10 text-center" style={{backgroundImage: "url(/background4.jpg)", backgroundSize: "contain",backgroundBlendMode:"lighten" ,backgroundSize:"220px" }}>
        <ul className="mt-6 space-y-4 text-lg">
           {/* Random Images Section */}
      <h2 className="text-4xl font-bold text-center">Our Services   </h2>
      <div className="row my-4 ">
        {randomImages.map((image, index) => ( 
          <div className="col-md-6 p-2" key={index} style={{transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'}} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div
              className="bg-light text-center p-2 "
              style={{ height: image.height, width: image.width,padding:"20px",margin:'10px' }}
              onClick={() => navigate(`/${image.occasion.replace(/\s+/g, "-").toLowerCase()}`)}

            >
              <img
                src={image.url}
                alt={`Random ${index + 1}`}
                className="w-100 h-100 object-fit-cover" 
              />
           <br/>
            <div className="service-text" >{image.service}</div></div>
          </div>
        ))}
      </div>
        </ul>
        
      </div></>
    );
  }
  export default Services;
