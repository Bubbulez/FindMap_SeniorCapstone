"use client"; // Required for clickable buttons/state

import { useState } from 'react';
import { locations } from '../../pages/locations';
import "./globals.css";


export default function BuildingsPage() {
  // We store the currently selected building here
  const [selectedBuilding, setSelectedBuilding] = useState(locations[0]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px", fontFamily: "sans-serif" }}>
      
      {/* LEFT SIDE: THE LIST */}
      <div style={{ flex: "1", minWidth: "300px", maxHeight: "80vh", overflowY: "auto" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Kean University Buildings</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setSelectedBuilding(loc)}
              style={{
                textAlign: "left",
                padding: "15px",
                backgroundColor: selectedBuilding.title === loc.title ? "#e0f2fe" : "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
            >
              <div style={{ fontWeight: "bold" }}>{loc.title}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{loc.address}</div>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: THE MAP DISPLAY */}
      <div style={{ flex: "1.5", minWidth: "350px", position: "sticky", top: "20px" }}>
        <div style={{ border: "2px solid #333", borderRadius: "12px", padding: "15px", backgroundColor: "#f9f9f9" }}>
          <h2>Currently Viewing: {selectedBuilding.title}</h2>
          <p>{selectedBuilding.address}</p>
          
          {/* This renders the iframe string from your locations.js */}
          <div 
            style={{ marginTop: "15px", borderRadius: "8px", overflow: "hidden" }}
            dangerouslySetInnerHTML={{ __html: selectedBuilding.embedUrl }} 
          />
        </div>
      </div>

    </div>
  );
}