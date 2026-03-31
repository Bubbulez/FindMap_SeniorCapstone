"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Events");
  const tabs = ["Events", "Buildings", "Dining", "Clubs"];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #32417b, #84848e)",
        fontFamily: "Helvetica",
      }}
    >
      <h1 style={{ fontSize: "80px", color: "white", marginBottom: "20px" }}>
        FindMap
      </h1>

      <p
        style={{
          color: "white",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        FIND EVENTS. FIND BUILDINGS. FIND YOUR WAY.
      </p>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "30px",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 18px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: activeTab === tab ? "#4285F4" : "white",
              color: activeTab === tab ? "white" : "black",
              boxShadow:
                activeTab === tab
                  ? "0 4px 10px rgba(0,0,0,0.2)"
                  : "none",
              transition: "0.2s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          width: "300px",
          color:"black",
          fontWeight:"bold",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h3>{activeTab}</h3>
        <p>Showing {activeTab.toLowerCase()} near you.</p>
      </div>

      {/* Main Button */}
      <a href="/events">
      <button
        style={{
          padding: "12px 25px",
          borderRadius: "30px",
          border: "none",
          fontWeight: "bold",
          backgroundColor: "#2a80d6",
          color: "white",
          cursor: "pointer",
        }}
      >
        Explore Campus Events
      </button>
      </a>
    </main>
  );
}