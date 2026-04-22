"use client";

import { useState } from "react";
import { clubs } from "../data/clubs";

export default function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "800", 
          color: "#1a1a1a",
          marginBottom: "10px" 
        }}>
          Campus Organizations
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Discover fraternities, sororities, and clubs at Kean University.
        </p>
      </div>

      {/* Search Section */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search for clubs, fraternities, or sororities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "16px 24px",
            borderRadius: "30px",
            border: "1px solid #ddd",
            fontSize: "1rem",
            color: "#333",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            outline: "none"
          }}
        />
      </div>

      {/* Clubs Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "30px"
      }}>
        {filteredClubs.map((club, index) => (
          <div 
            key={index} 
            style={{
              borderRadius: "20px",
              backgroundColor: "white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              border: "1px solid #eaeaea",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "transform 0.2s ease"
            }}
          >
            <div style={{ padding: "28px", flexGrow: 1 }}>
              <span style={{ 
                fontSize: "0.7rem", 
                fontWeight: "bold", 
                color: "#005892", 
                textTransform: "uppercase",
                letterSpacing: "1px",
                backgroundColor: "#e6f0f7",
                padding: "4px 12px",
                borderRadius: "12px"
              }}>
                {club.category}
              </span>
              <h3 style={{ 
                margin: "15px 0 10px 0", 
                fontSize: "1.4rem", 
                color: "#111" 
              }}>
                {club.name}
              </h3>
              <p style={{ 
                color: "#4a4a4a", 
                fontSize: "0.95rem", 
                lineHeight: "1.6" 
              }}>
                {club.description}
              </p>
            </div>

            {/* Cougar Link Button */}
            <div style={{ padding: "0 28px 28px 28px" }}>
              <a 
                href={club.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  backgroundColor: "#005892",
                  color: "white",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "0.9rem",
                  transition: "background 0.3s"
                }}
              >
                View on Cougar Link
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredClubs.length === 0 && (
        <p style={{ textAlign: "center", color: "#999", marginTop: "40px" }}>
          No organizations found matching your search.
        </p>
      )}
    </div>
  );
}