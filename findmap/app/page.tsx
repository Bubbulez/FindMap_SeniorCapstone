"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Events");
  const tabs = ["Events", "Buildings", "Dining", "Clubs"];

  return (
<<<<<<< HEAD
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        background:
          "linear-gradient(to bottom, #f8b7c8, #c7a6ff, #b9d6ff)",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "60px", color: "white", marginBottom: "10px" }}>
=======
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #000031, #434379)",
      fontFamily: "Helvetica "
    }}>
      <h1 style={{ fontSize: "80px", color: "white" }}>
>>>>>>> 1e016f1 (Updated font, changed baackground color and button)
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

<<<<<<< HEAD
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
              backgroundColor:
                activeTab === tab ? "#4285F4" : "white",
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

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          width: "300px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h3>{activeTab}</h3>
        <p>Showing {activeTab.toLowerCase()} near you.</p>
      </div>

      <button
        style={{
          padding: "12px 25px",
          borderRadius: "30px",
          border: "none",
          fontWeight: "bold",
          backgroundColor: "#ff7a59",
          color: "white",
          cursor: "pointer",
        }}
      >
=======
      <button style={{
        padding: "12px 25px",
        borderRadius: "30px",
        border: "none",
        fontWeight: "bold",
        backgroundColor: " #2a80d6",
        color: "white",
        cursor: "pointer"
      }}>
>>>>>>> 1e016f1 (Updated font, changed baackground color and button)
        Explore Campus Events
      </button>
    </main>
  );
}