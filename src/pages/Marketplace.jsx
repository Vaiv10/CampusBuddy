import React, { useState } from "react";
import "../index.css";

const Marketplace = () => {
  const items = [
    { id: 1, title: "Scientific Calculator", category: "Gadgets", price: "₹200 (Rent/Buy)" },
    { id: 2, title: "B.Tech AI Notes - Semester 4", category: "Notes", price: "₹50" },
    { id: 3, title: "Law Notes - Criminal Law", category: "Notes", price: "₹70" },
    { id: 4, title: "Psychology Notes", category: "Notes", price: "₹60" },
    { id: 5, title: "Question Paper - Data Structures 2023", category: "Question Papers", price: "Free" },
    { id: 6, title: "Assignment - Operating Systems", category: "Assignments", price: "₹30" },
    { id: 7, title: "Module - Database Management", category: "Modules", price: "₹40" },
    { id: 8, title: "Lab Record - Electronics", category: "Assignments", price: "₹50" },
  ];

  const categories = ["All", "Notes", "Gadgets", "Question Papers", "Modules", "Assignments"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">🎓 Campus Marketplace</h1>

      {/* Search + Filter Section */}
      <div className="marketplace-filters">
        <input
          type="text"
          placeholder="🔍 Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="marketplace-search"
        />

        <div className="marketplace-filter">
          <label htmlFor="category" className="filter-label">Filter by:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="marketplace-dropdown"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="marketplace-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="marketplace-card">
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.title}</h3>
                </div>
                <p className="category">{item.category}</p>
                <p className="price">{item.price}</p>
                <button className="btn-primary">View / Buy</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
