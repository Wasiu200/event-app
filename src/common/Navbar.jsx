import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaArrowRightLong } from "react-icons/fa6";
const navbar = () => {
  return (
    <>
      <div className="nav">
        <div>
          <a href="/">
            <img src="/navimage.png" alt="nav" />
          </a>
        </div>
        <ul>
          <li className="Evt">
            <a href="/">Events</a>
          </li>
          <li className="MTK">
            <Link to="/My Ticket">My Ticket</Link>
          </li>
          <li className="APT">
            <Link to="/About project">Aboutproject</Link>
          </li>
        </ul>
        <a href="/My Ticket">
          <button className="arrow">
            My Ticket <FaArrowRightLong />
          </button>
        </a>
      </div>
    </>
  );
};

export default navbar;
