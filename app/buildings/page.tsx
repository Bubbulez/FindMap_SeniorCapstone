"use client";

import { useState } from "react";
import { locations, type Location } from "../data/locations";

export default function BuildingsPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<Location | null>(null);

  return (
    <main className="buildings-page">
      <h1 className="buildings-title">Buildings</h1>

      <div className="buildings-list">
        {locations.map((loc) => (
          <button
            key={loc.title}
            className="building-card"
            onClick={() => setSelectedBuilding(loc)}
          >
            <div className="building-name">{loc.title}</div>
            <div className="building-address">{loc.address}</div>
            <span className="building-open">Open Map</span>
          </button>
        ))}
      </div>

      {selectedBuilding && (
        <div className="map-modal-overlay" onClick={() => setSelectedBuilding(null)}>
          <div
            className="map-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedBuilding(null)}
            >
              ✕
            </button>

            <h2 className="map-title">{selectedBuilding.title}</h2>
            <p className="map-address">{selectedBuilding.address}</p>

            <div className="map-frame-wrap">
              <iframe
                src={selectedBuilding.embedUrl}
                width="100%"
                height="400"
                className="map-frame"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={selectedBuilding.title}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}