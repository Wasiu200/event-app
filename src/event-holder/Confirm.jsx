import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./Confirm.css";

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = location.state || {};

  if (!userData) {
    return (
      <div className="error-container">
        <h2>No ticket data found 😕</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="confirm-container">
      <div className="ticket-card">
        <h2 className="ticket-title">🎟️ Your Ticket is Ready!</h2>
        <div className="ticket-info">
          <div className="ticket-left">
            <img
              src={userData.photo}
              alt="Attendee"
              className="attendee-photo"
            />
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Project:</strong> {userData.project}
            </p>
          </div>

          <div className="ticket-right">
            <QRCodeCanvas
              value={JSON.stringify(userData)}
              size={120}
              bgColor="#ffffff"
              fgColor="#1a73e8"
              level="Q"
              includeMargin={true}
            />
            <p className="qr-text">Scan to verify ticket</p>
          </div>
        </div>

        <div className="confirm-buttons">
          <button onClick={() => navigate("/")} className="home-btn">
            🎫 Book Another Ticket
          </button>
          <button onClick={() => window.print()} className="download-btn">
            📩 Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;