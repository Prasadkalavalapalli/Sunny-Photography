import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contactus from "./Contactus";
import Marriage from "./Marriage";
import Events from "./Events";
import Birthday from "./Birthday";
import Function from "./Function";
import Footer from "./Footer";
import Youtube from "./Youtube";
import Traditional from "./Traditional";
import Destination from "./Destination";
import Beach from "./Beach";
import BookingForm from "./Booking";
import Service from "./Service";
import Customers from "./Customers";
import Login from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings-details" element={<Customers/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/housewarming ceremony" element={<Events />} />
        <Route path="/birthday-shoot" element={<Birthday />} />
        <Route path="/marriage-event" element={<Marriage />} />
  <Route path="/marriage-event/traditional-wedding" element={<Traditional />} />
  <Route path="/marriage-event/destination-wedding" element={<Destination />} />
  <Route path="/marriage-event/beach-wedding" element={<Beach />} />
  <Route path="/youtube" element={<Youtube />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
