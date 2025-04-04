import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [logindetails, setLogindetails] = useState({
    username: "",
    password: "",
  });
  const [adminlogin, setAdminlogin] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionLogin = sessionStorage.getItem("login");
    if (sessionLogin === "200") {
      setAdminlogin(200);
    } else {
      logout();
    }
  }, []);

  // ✅ LOGIN FUNCTION (Frontend Validation)
  const login = (e) => {
    e.preventDefault();

    if (
      logindetails.username === "sunnyphotography" &&
      logindetails.password === "sunny@123"
    ) {
      console.log("✅ Welcome to Drive-in, login successful");
      sessionStorage.setItem("login", "200");
      sessionStorage.setItem("username", logindetails.username);
      setAdminlogin(200);
      handleClose();
      navigate("/bookings-details");
    } else {
      console.log("❌ Login failed: Invalid credentials");
      window.alert("Invalid details, please check them.");
    }
  };

  // ✅ LOGOUT FUNCTION
  const logout = () => {
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("username");
    setAdminlogin(0);
    navigate("/login");
    console.log("🔴 Logged out successfully");
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="header d-flex justify-content-between align-items-center p-3 bg-light shadow">
        <h5 className="m-0 text-primary">📸Sunny-Photography</h5>
        {adminlogin === 0 ? (
          <button className="btn btn-warning px-4" onClick={handleShow}>
            Login
          </button>
        ) : (
          <button className="btn btn-danger px-4" onClick={logout}>
            Logout
          </button>
        )}
      </div>
      <div className="text-center h-75 p-5">
        Welcome to SunnyPhotography
      </div>

      {/* ✅ LOGIN MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🔑 Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={login}>
            <Form.Group className="mb-3">
              <Form.Label>👤 Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={logindetails.username}
                onChange={(e) =>
                  setLogindetails({ ...logindetails, [e.target.name]: e.target.value })
                }
                required
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>🔒 Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={logindetails.password}
                onChange={(e) =>
                  setLogindetails({ ...logindetails, [e.target.name]: e.target.value })
                }
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                ❌ Cancel
              </Button>
              <Button variant="primary" type="submit">
                ✅ Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
