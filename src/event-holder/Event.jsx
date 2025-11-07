import "./Event.css";
import React, { use, useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [Event, setEvent] = useState([]);
    const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/Events/${id}`);
  };

  const EventData = [
  {
    id: "1",
    img: "/event1.jpeg",
    name: "Moneyline with Nancy Investment Forum 2025 - Wealth, Law & Protection",
    location: "Shehu Musa Yar'Adua Centre, Abuja",
    time: "9:00 AM",
    date: "Wed, Nov 12, 2025",
    price: "Free",
  },
  {
    id: "2",
    img: "/event2.jpeg",
    name: "Unfettered Conference - Healing Waters",
    location: "Gateway International Church, Port Harcourt",
    time: "10:00 AM",
    date: "Thu, Nov 13, 2025",
    price: "₦5,000",
  },
  {
    id: "3",
    img: "/event3.png",
    name: "Frontier Discourse - Youth in Governance",
    location: "NNMA House, Abuja",
    time: "10:30 AM",
    date: "Fri, Nov 14, 2025",
    price: "₦3,000",
  },
  {
    id: "4",
    img: "/event4.jpeg",
    name: "West Africa Stablecoin & Blockchain Summit",
    location: "Aduvie Events Centre, Abuja",
    time: "8:00 AM",
    date: "Sat, Nov 15, 2025",
    price: "₦10,000",
  },
  {
    id: "5",
    img: "/event5.jpeg",
    name: "Live Worship Recording with Innocent Daniel ft. Theophilus Sunday",
    location: "Family Worship Centre, Abuja",
    time: "4:00 PM",
    date: "Sun, Nov 16, 2025",
    price: "₦2,000",
  },
  {
    id: "6",
    img: "/event6.jpeg",
    name: "Abuja Local Agent & Institution Networking Event",
    location: "Transcorp Hilton, Abuja",
    time: "9:00 AM",
    date: "Mon, Nov 17, 2025",
    price: "₦20,000",
  },
  {
    id: "7",
    img: "/event7.jpeg",
    name: "West African Leadership Summit & Awards",
    location: "Nicon Luxury Hotel, Abuja",
    time: "10:00 AM",
    date: "Tue, Nov 18, 2025",
    price: "₦15,000",
  },
  {
    id: "8",
    img: "/event8.jpg",
    name: "Afrobeats Experience Night",
    location: "Eko Hotel & Suites, Lagos",
    time: "7:00 PM",
    date: "Wed, Nov 19, 2025",
    price: "₦8,000",
  },
  {
    id: "9",
    img: "/event9.jpg",
    name: "Tech Innovators Conference 2025",
    location: "Civic Centre, Lagos",
    time: "9:00 AM",
    date: "Thu, Nov 20, 2025",
    price: "₦12,000",
  },
  {
    id: "10",
    img: "/event10.jpg",
    name: "Naija Comedy Festival",
    location: "Eko Convention Centre, Lagos",
    time: "6:00 PM",
    date: "Fri, Nov 21, 2025",
    price: "₦4,000",
  },
  {
    id: "11",
    img: "/event11.jpg",
    name: "Abuja Fashion & Art Week",
    location: "Jabi Lake Mall, Abuja",
    time: "11:00 AM",
    date: "Sat, Nov 22, 2025",
    price: "₦5,000",
  },
  {
    id: "12",
    img: "/event12.jpg",
    name: "Nigeria Food & Drink Festival",
    location: "Harbour Point, Victoria Island",
    time: "12:00 PM",
    date: "Sun, Nov 23, 2025",
    price: "₦3,500",
  },
  {
    id: "13",
    img: "/event13.jpg",
    name: "Abuja Tech Expo 2025",
    location: "International Conference Centre, Abuja",
    time: "9:30 AM",
    date: "Mon, Nov 24, 2025",
    price: "₦10,000",
  },
  {
    id: "14",
    img: "/event14.jpg",
    name: "African Women in Business Summit",
    location: "Sheraton Hotel, Lagos",
    time: "10:00 AM",
    date: "Tue, Nov 25, 2025",
    price: "₦7,000",
  },
  {
    id: "15",
    img: "/event15.jpg",
    name: "Lagos StartUp Week 2025",
    location: "Landmark Centre, Lagos",
    time: "9:00 AM",
    date: "Wed, Nov 26, 2025",
    price: "₦5,000",
  },
  {
    id: "16",
    img: "/event16.jpg",
    name: "Gospel Vibes Concert 2025",
    location: "House on the Rock, Lagos",
    time: "5:00 PM",
    date: "Thu, Nov 27, 2025",
    price: "₦2,000",
  },
  {
    id: "17",
    img: "/event17.jpg",
    name: "Ibadan Cultural Carnival",
    location: "Mapo Hall, Ibadan",
    time: "10:00 AM",
    date: "Fri, Nov 28, 2025",
    price: "Free",
  },
  {
    id: "18",
    img: "/event18.jpg",
    name: "Port Harcourt Business Forum 2025",
    location: "Aztech Arcum, Port Harcourt",
    time: "9:00 AM",
    date: "Sat, Nov 29, 2025",
    price: "₦10,000",
  },
  {
    id: "19",
    img: "/event19.jpg",
    name: "Music Meets Fashion Abuja Edition",
    location: "Ladi Kwali Hall, Abuja",
    time: "7:00 PM",
    date: "Sun, Nov 30, 2025",
    price: "₦6,000",
  },
  {
    id: "20",
    img: "/event20.jpg",
    name: "Nigeria Real Estate Conference 2025",
    location: "Civic Centre, Lagos",
    time: "9:00 AM",
    date: "Mon, Dec 1, 2025",
    price: "₦15,000",
  },
  {
    id: "21",
    img: "/event21.jpg",
    name: "Lagos Poetry Slam & Open Mic",
    location: "Freedom Park, Lagos Island",
    time: "6:00 PM",
    date: "Tue, Dec 2, 2025",
    price: "₦3,000",
  },
  {
    id: "22",
    img: "/event22.jpg",
    name: "TEDx Yaba 2025 - Ideas Worth Spreading",
    location: "YabaTech Hall, Lagos",
    time: "10:00 AM",
    date: "Wed, Dec 3, 2025",
    price: "₦8,000",
  },
  {
    id: "23",
    img: "/event23.jpg",
    name: "TechHer Women in Tech Meetup",
    location: "Abuja Tech Village",
    time: "11:00 AM",
    date: "Thu, Dec 4, 2025",
    price: "₦5,000",
  },
  {
    id: "24",
    img: "/event24.jpg",
    name: "Port Harcourt Art & Culture Festival",
    location: "Isaac Boro Park, Port Harcourt",
    time: "1:00 PM",
    date: "Fri, Dec 5, 2025",
    price: "₦2,500",
  },
  {
    id: "25",
    img: "/event25.jpg",
    name: "Abuja Jazz Night 2025",
    location: "Millennium Park, Abuja",
    time: "8:00 PM",
    date: "Sat, Dec 6, 2025",
    price: "₦4,000",
  },
  {
    id: "26",
    img: "/event26.jpg",
    name: "Nigeria Fashion & Design Week",
    location: "Eko Atlantic, Lagos",
    time: "12:00 PM",
    date: "Sun, Dec 7, 2025",
    price: "₦7,000",
  },
  {
    id: "27",
    img: "/event27.jpg",
    name: "Lagos Tech Fest 2025",
    location: "Muson Centre, Lagos",
    time: "9:00 AM",
    date: "Mon, Dec 8, 2025",
    price: "₦10,000",
  },
  {
    id: "28",
    img: "/event28.jpg",
    name: "Abuja Movie Premiere: 'Dreams of the City'",
    location: "Silverbird Cinemas, Abuja",
    time: "6:30 PM",
    date: "Tue, Dec 9, 2025",
    price: "₦3,000",
  },
  {
    id: "29",
    img: "/event29.jpg",
    name: "Tech Career Fair 2025",
    location: "Victoria Island, Lagos",
    time: "10:00 AM",
    date: "Wed, Dec 10, 2025",
    price: "₦2,000",
  },
  {
    id: "30",
    img: "/event30.jpg",
    name: "Cultural Night of Colours - Abuja",
    location: "Eagle Square, Abuja",
    time: "5:00 PM",
    date: "Thu, Dec 11, 2025",
    price: "₦1,500",
  },
  ];
  return (
    <>
      <h4 className="COF">Event & Conference</h4>
      <div className="products-container">
        {EventData.map((Event) => (
          <div key={Event.id} className="all">
            <img src={Event.img} alt="img" />
            <h2>{Event.name}</h2>
            <p> {Event.location} </p>
            <p> {Event.price} </p>
            <p> {Event.date} </p>
            <button className="view" onClick={() => handleNavigate(Event.id)} >
             <FaLocationArrow/> View details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Event;
