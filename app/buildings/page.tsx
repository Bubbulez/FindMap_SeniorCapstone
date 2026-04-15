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

  return (
    <main style={{ 
      minHeight: "100vh", 
      width: "100%",
      backgroundColor: "#f9f9f9", 
      borderRadius: "15px", 
      border: "2px dashed #ccc",
      padding: "40px",
      boxSizing: "border-box"
    }}>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
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
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                color: "black",
                backgroundColor: "white"
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxHeight: "600px", overflowY: "auto" }}>
              {filteredBuildings.map((loc) => (
                <button
                  key={loc.title}
                  onClick={() => setSelectedBuilding(loc)}
                  style={{
                    textAlign: "left",
                    padding: "15px",
                    borderRadius: "10px",
                    border: selectedBuilding?.title === loc.title ? "2px solid #0070f3" : "1px solid #eee",
                    backgroundColor: selectedBuilding?.title === loc.title ? "#f0f7ff" : "white",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#333" }}>{loc.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#666" }}>{loc.address}</div>
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Dynamic Map --- */}
          <div style={{ flex: 1, padding: "20px" }}>
            {selectedBuilding ? (
              <iframe
                src={selectedBuilding.embedUrl}
                width="100%"
                height="600"
                style={{ border: "1px solid #ddd", borderRadius: "15px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div
                style={{
                  height: "600px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  border: "2px dashed #ccc",
                  borderRadius: "15px",
                  color: "#666",
                }}
              >
                <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                  Select a building on the left to view it on the map
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}