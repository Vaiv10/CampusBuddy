import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaStore, FaCalendarAlt, FaComments } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Campus Buddy</h1>
        <p className="hero-subtitle">Your all-in-one college companion 🚀</p>
        <div className="hero-buttons">
          <Link to="/marketplace" className="btn-primary">Explore Marketplace</Link>
          <Link to="/study" className="btn-secondary">Join Study Circle</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <FaBookOpen className="icon" />
          <h3>Study Smarter</h3>
          <p>Access and share notes, resources, and assignments easily.</p>
        </div>
        <div className="feature-card">
          <FaStore className="icon" />
          <h3>Marketplace</h3>
          <p>Buy, sell, or rent student essentials securely.</p>
        </div>
        <div className="feature-card">
          <FaCalendarAlt className="icon" />
          <h3>Events</h3>
          <p>Stay updated with campus fests, hackathons, and more.</p>
        </div>
        <div className="feature-card">
          <FaComments className="icon" />
          <h3>Community</h3>
          <p>Ask questions, connect, and grow together like Reddit.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
