import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Icon from "./Icon";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    venue: "",
    package: "Basic",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Booking Submitted! We will contact you soon.");
  };

  return (
    <>
    <Header/>
  
    <div className="container mt-2">
        
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-body p-4">
              <h2 className="text-center text-primary mb-4">
                📅 Book Your Session
              </h2>
              <p className="text-center text-muted">
                Capture your special birthday moments with our professional photography services.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Event Venue</label>
                  <input
                    type="text"
                    name="venue"
                    className="form-control"
                    placeholder="Enter venue location"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Photography Package</label>
                  <select
                    name="package"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="Basic">Basic </option>
                    <option value="Standard">Standard </option>
                    <option value="Premium">Premium </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Additional Requests</label>
                  <textarea
                    name="requests"
                    className="form-control"
                    rows="3"
                    placeholder="Any special requirements..."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <div className="d-flex">
       <h4 className="float-start">For Any Enquiry Contact us : </h4>
      <span className="flaot-end"> <p>📞 Phone: +91 7842409121</p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:udaygulla36@gmail.com"
                className=" text-decoration-none"
              >
                udaygulla36@gmail.com
              </a>
              </p></span>
    </div>
    </div>
    <Icon/>
    </>
  );
};

export default BookingForm;
