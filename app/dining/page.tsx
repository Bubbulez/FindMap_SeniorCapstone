"use client";

import { useState } from "react";
import "../styles/theme.css";
import { dining } from "../data/dining";

export default function DiningPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <main className="page-background">
      <h1 className="page-title">Dining</h1>

      <div className="dining-grid">
        {dining.map((place, index) => (
          <div
            key={index}
            className="dining-card"
            onClick={() => setSelected(place)}
          >
            <div className="dining-badge">{place.category}</div>
            <h2 className="dining-name">{place.name}</h2>
            <p className="dining-description">{place.description}</p>
            <p className="dining-location">📍 {place.location}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="map-modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="map-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h2 className="map-title">{selected.name}</h2>
            <p className="map-address">{selected.location}</p>

            <iframe
              src={selected.embedUrl}
              width="100%"
              height="400"
              className="map-frame"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </main>
  );
}