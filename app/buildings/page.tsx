"use client";

import { useState } from "react";
import { locations, type Location } from "../data/locations";

export default function BuildingsPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<Location>(locations[0]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Kean University Buildings
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {locations.map((loc) => (
            <button
              key={loc.title}
              onClick={() => setSelectedBuilding(loc)}
              style={{
                textAlign: "left",
                padding: "15px",
                backgroundColor:
                  selectedBuilding.title === loc.title ? "#e0f2fe" : "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{loc.title}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{loc.address}</div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: "1.5", minWidth: "350px", position: "sticky", top: "20px" }}>
        <div
          style={{
            border: "2px solid #333",
            borderRadius: "12px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Currently Viewing: {selectedBuilding.title}</h2>
          <p>{selectedBuilding.address}</p>

          <div style={{ marginTop: "15px", borderRadius: "8px", overflow: "hidden" }}>
            <iframe
              src={selectedBuilding.embedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={selectedBuilding.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}