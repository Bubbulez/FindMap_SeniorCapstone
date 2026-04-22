"use client";

import { useState } from "react";
import { locations, type Location } from "../data/locations";

export default function BuildingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState<Location | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredBuildings = locations.filter((loc) => {
    const matchesSearch =
      loc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || loc.category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  const keanBlue = "#2a58ad";

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#ebf2ff",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "30px",
            color: keanBlue,
            textAlign: "center",
          }}
        >
          Campus Buildings
        </h1>

        <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
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
                borderRadius: "25px",
                border: `2px solid ${keanBlue}`,
                color: "black",
                backgroundColor: "white",
                outline: "none",
                fontSize: "1rem",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setSelectedFilter("All")}
                style={{
                  padding: "10px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor:
                    selectedFilter === "All" ? keanBlue : "white",
                  color: selectedFilter === "All" ? "white" : keanBlue,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                All
              </button>

              <button
                onClick={() => setSelectedFilter("Academic")}
                style={{
                  padding: "10px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor:
                    selectedFilter === "Academic" ? keanBlue : "white",
                  color:
                    selectedFilter === "Academic" ? "white" : keanBlue,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Academic
              </button>

              <button
                onClick={() => setSelectedFilter("Dorming")}
                style={{
                  padding: "10px 16px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor:
                    selectedFilter === "Dorming" ? keanBlue : "white",
                  color:
                    selectedFilter === "Dorming" ? "white" : keanBlue,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Dorming
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxHeight: "600px",
                overflowY: "auto",
                paddingRight: "10px",
              }}
            >
              {filteredBuildings.map((loc) => (
                <button
                  key={loc.title}
                  onClick={() => setSelectedBuilding(loc)}
                  style={{
                    textAlign: "left",
                    padding: "15px",
                    borderRadius: "15px",
                    border:
                      selectedBuilding?.title === loc.title
                        ? `2px solid ${keanBlue}`
                        : "1px solid #ddd",
                    backgroundColor: "white",
                    boxShadow:
                      selectedBuilding?.title === loc.title
                        ? `0 4px 12px rgba(42, 88, 173, 0.2)`
                        : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      color:
                        selectedBuilding?.title === loc.title
                          ? keanBlue
                          : "#333",
                    }}
                  >
                    {loc.title}
                  </div>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {loc.address}
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: keanBlue,
                      marginTop: "6px",
                      fontWeight: "600",
                    }}
                  >
                    {loc.category}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {selectedBuilding ? (
              <iframe
                src={selectedBuilding.embedUrl}
                width="100%"
                height="650"
                style={{
                  border: `3px solid white`,
                  borderRadius: "25px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
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