import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Icon from "./Icon";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    venue: "",
    packageName: "Basic",
    requests: "",
    status:"pending"
  });

  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^[6-9]\d{9}$/;
    const today = new Date().toISOString().split("T")[0];

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.date) {
      errors.date = "Please select a date";
    } else if (formData.date < today) {
      errors.date = "Date cannot be in the past";
    }

    if (!formData.venue.trim()) {
      errors.venue = "Venue is required";
    }

    if (!formData.packageName) {
      errors.packageName = "Please select a package";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:9090/postbookings", formData);
      if (response.status === 200 || response.status === 201) {
        setShowModal(true);
        setFormData({
          name: "",
          phone: "",
          date: "",
          venue: "",
          packageName: "Basic",
          requests: "",
          status:"pending"
        });
        setFormErrors({});
      }
    } catch (error) {
      console.error("Booking failed:", error);
      alert("❌ Failed to book the event. Please try again.");
    }
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", showModal);
  }, [showModal]);

  return (
    <>
      <Header />
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-body p-4">
                <h2 className="text-center text-primary mb-4">📅 Book Your Session</h2>
                <p className="text-center text-muted">
                  Capture your special birthday moments with our professional photography services.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.phone && <small className="text-danger">{formErrors.phone}</small>}
                  </div>

                  {/* Date */}
                  <div className="mb-3">
                    <label className="form-label">Event Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.date && <small className="text-danger">{formErrors.date}</small>}
                  </div>

                  {/* Venue */}
                  <div className="mb-3">
                    <label className="form-label">Event Venue</label>
                    <input
                      type="text"
                      name="venue"
                      className="form-control"
                      placeholder="Enter venue location"
                      value={formData.venue}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.venue && <small className="text-danger">{formErrors.venue}</small>}
                  </div>

                  {/* Package */}
                  <div className="mb-3">
                    <label className="form-label">Photography Package</label>
                    <select
                      name="packageName"
                      className="form-select"
                      value={formData.packageName}
                      onChange={handleChange}
                    >
                      <option value="Basic">Basic</option>
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                    </select>
                    {formErrors.packageName && (
                      <small className="text-danger">{formErrors.packageName}</small>
                    )}
                  </div>

                  {/* Requests */}
                  <div className="mb-3">
                    <label className="form-label">Additional Requests</label>
                    <textarea
                      name="requests"
                      className="form-control"
                      rows="3"
                      placeholder="Any special requirements..."
                      value={formData.requests}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Submit Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="d-flex  mt-4">
          <h5>📞 For Any Enquiry Contact us :</h5>
          <div className="ps-4">
            <p>Phone: +91 7842409121</p>
            <p>
              Email:{" "}
              <a href="mailto:udaygulla36@gmail.com" className="text-decoration-none">
                udaygulla36@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">✅ Booking Confirmed!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Your event has been successfully booked. We will contact you shortly.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Icon />
    </>
  );
};

export default BookingForm;
