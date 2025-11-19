import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Events from "./pages/Events";
import Study from "./pages/Study";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Discussion from "./pages/Discussion";

//CSS
import "./styles/global.css";
import "./index.css";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar at top */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/events" element={<Events />} />
          <Route path="/study" element={<Study />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discussion" element={<Discussion/>}/>
        </Routes>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;
