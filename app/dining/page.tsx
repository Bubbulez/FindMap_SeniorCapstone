"use client";

import { useState } from "react";
import "../styles/theme.css";
import { dining } from "../data/dining";

export default function DiningPage() {
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredDining = dining.filter((place) => {
    if (filter === "all") return true;
    return place.type === filter;
  });

  return (
    <main className="page-background" style={{ padding: "40px", minHeight: "100vh" }}>
      <h1 className="page-title" style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        Dining Options
      </h1>

      {/* --- Filter Buttons --- */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "40px", justifyContent: "center" }}>
        {["all", "on-campus", "off-campus"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilter(type);
              setSelected(null);
            }}
            style={{
              padding: "10px 25px",
              borderRadius: "25px",
              border: filter === type ? "none" : "1px solid #ccc",
              backgroundColor: filter === type ? "#0070f3" : "#ffffff",
              // Ensures text is dark when button is white
              color: filter === type ? "#ffffff" : "#333333", 
              cursor: "pointer",
              fontWeight: "bold",
              textTransform: "capitalize",
              transition: "0.3s"
            }}
          >
            {type.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* --- Dining Grid --- */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
        gap: "20px" 
      }}>
        {filteredDining.map((place, index) => (
          <div
            key={index}
            className="dining-card"
            onClick={() => setSelected(place)}
            style={{
              padding: "20px",
              borderRadius: "15px",
              backgroundColor: "white",
              // Added border for visibility on white backgrounds
              border: selected?.name === place.name ? "2px solid #0070f3" : "1px solid #eee",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
          >
            <span style={{ 
              fontSize: "0.8rem", 
              backgroundColor: "#f0f0f0", 
              padding: "4px 8px", 
              borderRadius: "5px",
              color: "#444" 
            }}>
              {place.category}
            </span>
            {/* Explicitly set heading and description to dark colors */}
            <h2 style={{ marginTop: "10px", fontSize: "1.2rem", color: "#111" }}>{place.name}</h2>
            <p style={{ color: "#555", fontSize: "0.9rem" }}>{place.description}</p>
          </div>
        ))}
      </div>

      {/* --- Detail View (Visible when an item is clicked) --- */}
      {selected && (
        <div style={{ 
          marginTop: "50px", 
          padding: "30px", 
          backgroundColor: "#ffffff", 
          borderRadius: "20px", 
          border: "1px solid #ddd",
          boxShadow: "0 -10px 25px rgba(0,0,0,0.05)",
          color: "#222" // Ensures text inside detail view is dark
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ color: "#0070f3", margin: "0 0 10px 0" }}>{selected.name}</h2>
              <p style={{ color: "#333" }}><strong>Location:</strong> {selected.type === 'on-campus' ? 'On Kean Campus' : 'Off Campus'}</p>
              <p style={{ color: "#444" }}>{selected.description}</p>
            </div>
            <button 
              onClick={() => setSelected(null)}
              style={{ background: "#eee", border: "none", borderRadius: "50%", width: "30px", height: "30px", cursor: "pointer", color: "#000" }}
            >
              ✕
            </button>
          </div>

          {selected.embedUrl && (
            <div style={{ marginTop: "20px" }}>
              <iframe
                src={selected.embedUrl}
                width="100%"
                height="350"
                style={{ border: "0", borderRadius: "15px" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </main>
  );
}