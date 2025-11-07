import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AttendeeForm.css";
import { FaUpload } from "react-icons/fa6";

const AttendeeForm = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  // Upload photo
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, email, project, photo };
    console.log(userData);

    // ✅ Navigate to Confirm page and pass data
    navigate("/confirm", { state: { userData } });
  };

  return (
    <div className="attendee-container">
      <h2>Attendee Details</h2>
      <p>Step 2/3</p>

      <div className="progress-bar">
        <div className="progress" style={{ width: "66%" }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="upload-section">
          <label htmlFor="photoUpload" className="upload-label">
            {photo ? (
              <img src={photo} alt="Uploaded" className="uploaded-img" />
            ) : (
              <>
                <span className="upload-icon">
                  <FaUpload />
                </span>
                <p>Click to upload</p>
              </>
            )}
          </label>
          <input
            id="photoUpload"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>

        <div className="form-group">
          <label>
            Enter your Name <span>*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Enter your Email <span>*</span>
          </label>
          <input
            type="email"
            placeholder="hello@avioflagos.io"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>About Project</label>
          <textarea
            placeholder="Tell us something about your project..."
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </div>

        <div className="button-row">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <button type="submit" className="submit-btn">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeForm;
