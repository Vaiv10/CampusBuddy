import React from "react";
import "../index.css";

const events = [
  {
    id: 1,
    title: "Hackmor Hackathon",
    date: "Nov 12–14, 2025",
    description: "Showcase your coding skills in a 36-hour innovation sprint.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "IEEE Treasure Hunt",
    date: "Nov 20, 2025",
    description: "Solve riddles, explore clues, and uncover the hidden prize!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Resurrection Cultural Fest",
    date: "Dec 5–7, 2025",
    description: "3 days of music, dance, and art celebrating campus culture.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Dandiya Night",
    date: "Oct 30, 2025",
    description: "Grab your dandiya sticks and dance the night away!",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-title">Campus Events</h1>
      <p className="events-subtitle">Join, participate, and celebrate your campus life 🎉</p>

      <div className="events-scroll">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-img" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-desc">{event.description}</p>
              <button className="btn-primary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
