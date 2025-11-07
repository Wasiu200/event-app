import React from 'react'
import { FaBook } from "react-icons/fa6";
import "./MyTicket.css"
const MyTicket = () => {
  return (
    <>
      <section className="booked">
        <div>
          <h1>Notice!!!</h1>
          <h2>No Tickect Booked Yet!</h2>
          <a href="/">
            <button className="koob">
              <FaBook className="icons" /> Book Your First Tickect
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default MyTicket