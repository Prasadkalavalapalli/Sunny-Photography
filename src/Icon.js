import React from 'react'

function Icon() {
  return (
    <div>
      {/* WhatsApp Button */}
      <div className=" buttons text-end ">
      
      <div >
        <a href="https://wa.me/8688113655"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
            alt="WhatsApp"
            className="rounded-circle shadow-sm me-4"
            style={{ height: "60px", width: "60px" }}
          />
        </a>
      
        <a href="https://www.instagram.com/sunnyphotography.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="rounded-circle shadow-sm"
            style={{ height: "60px", width: "60px", objectFit: "cover" }}
          />
        </a>
      </div></div>
    </div>
  )
}

export default Icon
