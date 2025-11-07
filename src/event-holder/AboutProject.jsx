import React from 'react'
import "./Aboutproject.css"

const AboutProject = () => {
  return (
    <>
      <section className="all">
        <div className="about">
          <h1>Event Ticket Booking UI</h1>
          <div>
            A sleek and beginner-friendly Conference Ticket Generator UI for
            developers to clone, explore, and enhance. This design ensures a
            seamless ticket reservation experience with an elegant interface.
          </div>
        </div>
        <div>
          <h3>Ticket Selection</h3>

          <li>Browse available tickets (Free & Paid).</li>
          <li>List and card view for ticket display.</li>
          <li>
            One-click ticket reservation for free tickets. Payment modal for
            purchasing tickets.
          </li>
        </div>
        <div>
          <h3>Attendee Details</h3>
          <li>Input Name, Email, and optional Phone Number.</li>
          <li>Profile picture upload with real-time preview.</li>
          <li>Instant ticket summary before confirmation.</li>
        </div>
        <div>
          <h3>Tech Stack (React + CSS)</h3>
          <li> TicketSelection.jsx Displays ticket details</li>
          <li>AttendeeDetails.jsx Captures user details</li>
          <li>SuccessScreen.jsx Shows final ticket preview </li>
          <li>
            Profile pictures handled via Local Storage, Cloudinary, or URL.createObjectURL().
          </li>
        </div>
        <h1 className='enj'>Enjoy a seamless booking experience!</h1>

        <div className='lower'>
<button className='wer'>Figma File</button>
<button className='low'>Github Repository</button>
        </div>
      </section>
    </>
  );
}

export default AboutProject