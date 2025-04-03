import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"; // ✅ Import navigation
import { Button } from "react-bootstrap"; 

function Header() {
     const navigate = useNavigate();
     const navLinks = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/booking", label: "booking" },
      { path: "/service", label: "Services" },
      { path: "/contact", label: "Contact" },
    ];
  
  
  return (
    <div >
      <header className="d-flex justify-content-between  pt-4  ">
        <div className="d-flex align-items-center  ">
        {/* <div
  className=" rounded-circle shadow-sm"
  style={{
    height: "60px",
    width: "60px",
    backgroundImage: "url(/logo.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.3,  // Adjust between 0 (completely transparent) and 1 (fully visible)
  }}
/> */}
<div className="d-flex  header">
                {/* Left Side Navigation */}
                <div className='me-3'>
                  {navLinks
                    .slice(0, Math.ceil(navLinks.length / 2))
                    .map((tab) => (
                      <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-primary me-2 mt-4 px-4 "
                            : "btn text-primary me-2 mt-4 px-4 "
                        }
                      >
                        {tab.label}
                      </NavLink>
                    ))}
                </div>

                <h1 className="d-inline-block"
            style={{ fontSize: "3.0rem", fontFamily: "Gabriola",color:"rgb(52, 52, 158)",cursor:"pointer"}}
            onClick={()=>navigate("/")}
          >
            Sunny Photography
          </h1>
                {/* Right Side Navigation */}
                <div className='ms-3'>
                  {navLinks.slice(Math.ceil(navLinks.length / 2)).map((tab) => (
                    <NavLink
                      key={tab.path}
                      to={tab.path}
                      className={({ isActive }) =>
                        isActive
                            ? "btn btn-primary me-2 mt-4 px-4 "
                            : "btn text-primary me-2 mt-4 px-4 "
                      }
                    >
                      {tab.label}
                    </NavLink>
                  ))}
                </div>
              </div>
          
        </div>
        
        
      </header>
     <div>
      
     </div>
    </div>
  )
}

export default Header
