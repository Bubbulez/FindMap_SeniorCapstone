"use client";

import { useState } from "react";
import { locations, type Location } from "../data/locations";

export default function BuildingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState<Location | null>(null);

  const filteredBuildings = locations.filter((loc) =>
    loc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // BRAND COLOR DEFINITION
  const keanBlue = "#2a58ad";

  return (
    <main style={{ 
      minHeight: "100vh", 
      width: "100%",
      backgroundColor: "#ebf2ff", // Light blue tint to match FindMap background feel
      padding: "40px",
      boxSizing: "border-box"
    }}>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Title updated to Kean Blue */}
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "bold", 
          marginBottom: "30px", 
          color: keanBlue,
          textAlign: "center" 
        }}>
          Campus Buildings
        </h1>

        <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
          
          {/* --- LEFT SIDE: Search & List --- */}
          <div style={{ flex: "1", maxWidth: "400px" }}>
            <input
              type="text"
              placeholder="Search buildings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "25px", // Rounded like the Home buttons
                border: `2px solid ${keanBlue}`,
                color: "black",
                backgroundColor: "white",
                outline: "none",
                fontSize: "1rem"
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "600px", overflowY: "auto", paddingRight: "10px" }}>
              {filteredBuildings.map((loc) => (
                <button
                  key={loc.title}
                  onClick={() => setSelectedBuilding(loc)}
                  style={{
                    textAlign: "left",
                    padding: "15px",
                    borderRadius: "15px",
                    // Use Kean Blue for the border and shadow when selected
                    border: selectedBuilding?.title === loc.title ? `2px solid ${keanBlue}` : "1px solid #ddd",
                    backgroundColor: "white",
                    boxShadow: selectedBuilding?.title === loc.title ? `0 4px 12px rgba(42, 88, 173, 0.2)` : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ 
                    fontWeight: "bold", 
                    fontSize: "1.1rem", 
                    color: selectedBuilding?.title === loc.title ? keanBlue : "#333" 
                  }}>
                    {loc.title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>{loc.address}</div>
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Dynamic Map --- */}
          <div style={{ flex: 1 }}>
            {selectedBuilding ? (
              <iframe
                src={selectedBuilding.embedUrl}
                width="100%"
                height="650"
                style={{ 
                  border: `3px solid white`, 
                  borderRadius: "25px", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)" 
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div
                style={{
                  height: "650px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  border: `2px dashed ${keanBlue}`,
                  borderRadius: "25px",
                  color: keanBlue,
                }}
              >
                <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                  Select a building to view the map
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}