import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar.jsx";
import Event from "./event-holder/Event.jsx";
import MyTicket from "./event-holder/MyTicket.jsx";
import AboutProject from "./event-holder/AboutProject.jsx";
import Eventsdetails from "./event-holder/Eventsdetails.jsx";
import AttendeeForm from "./event-holder/AttendeeForm";
import Confirm from "./event-holder/Confirm.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/My Ticket" element={<MyTicket />} />
          <Route path="/About Project" element={<AboutProject />} />
          <Route path="/events/:id" element={<Eventsdetails />} />
          <Route path="/attendee" element={<AttendeeForm />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
