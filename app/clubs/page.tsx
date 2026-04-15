"use client";

import { useState } from "react";
import { clubs } from "../data/clubs";

export default function ClubsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = clubs.filter((club) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      club.name.toLowerCase().includes(searchLower) ||
      club.category.toLowerCase().includes(searchLower) ||
      club.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    /* 1. OUTER WRAPPER: Fixes the black border by filling the whole screen */
    <div style={{ 
      backgroundColor: "#6d79ad", // Your specific purple color
      minHeight: "100vh", 
      width: "100%",
      margin: 0,
      padding: 0
    }}>
      
      {/* 2. MAIN CONTAINER: Centered content */}
      <main className="clubs-page" style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 className="clubs-title" style={{ 
          fontSize: "3.5rem", 
          fontWeight: "bold", 
          marginBottom: "30px", 
          color: "white", 
          textAlign: "center" 
        }}>
          University Clubs
        </h1>

        {/* Search Input */}
        <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search by name, category, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "15px 25px",
              width: "100%",
              maxWidth: "800px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.3)",
              fontSize: "1.1rem",
              color: "white",
              backgroundColor: "rgba(255,255,255,0.1)", // Semi-transparent look
              outline: "none",
              backdropFilter: "blur(5px)"
            }}
          />
        </div>

        {/* Clubs Grid */}
        <div className="clubs-list" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "24px" 
        }}>
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club, index) => (
              <div key={index} className="club-card" style={{ 
                borderRadius: "16px", 
                overflow: "hidden", 
                backgroundColor: "white", 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease"
              }}>
                {club.thumbnail && (
                  <img
                    src={club.thumbnail}
                    alt={club.name}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                )}
                <div style={{ padding: "24px" }}>
                  <span style={{ 
                    fontSize: "0.75rem", 
                    color: "#0070f3", 
                    fontWeight: "800", 
                    textTransform: "uppercase", 
                    letterSpacing: "1.5px" 
                  }}>
                    {club.category}
                  </span>
                  
                  <h2 style={{ margin: "12px 0", fontSize: "1.6rem" }}>
                    <a 
                      href={club.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "#222", textDecoration: "none", fontWeight: "700" }}
                    >
                      {club.name}
                    </a>
                  </h2>

                  <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
                    {club.description}
                  </p>
                  
                  <p style={{ fontSize: "0.85rem", color: "#999", borderTop: "1px solid #eee", paddingTop: "15px" }}>
                    <strong>Meeting:</strong> {club.meetingTime}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px", color: "white", fontSize: "1.2rem" }}>
              No clubs found matching "{searchTerm}"
            </p>
          )}
        </div>
      </main>
    </div>
  );
}