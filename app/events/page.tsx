"use client";

import { useState } from "react";
import Link from "next/link";
import { events } from "../data/events";

export default function EventsPage() {
  const [reminders, setReminders] = useState<number[]>([]);
  const [showToast, setShowToast] = useState(false);

 const toggleReminder = async (index: number) => {
  const event = events[index];

  try {
    const response = await fetch("/api/send-reminder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "yourrealemail@gmail.com",
        eventTitle: event.title,
        date: event.date,
        time: event.time,
        location: event.location,
      }),
    });

   const text = await response.text();
console.log("API response:", text);

let data;
try {
  data = JSON.parse(text);
} catch {
  throw new Error("Server did not return valid JSON.");
}

if (!response.ok) {
  alert(data.message || "Failed to send reminder.");
  return;
}

    // ✅ Show as "Reminder Set"
    setReminders((prev) => [...prev, index]);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // ✅ After 3 seconds, remove it
    setTimeout(() => {
      setReminders((prev) => prev.filter((item) => item !== index));
    }, 3000);

  } catch (error) {
    console.error(error);
    alert("There was a problem sending the reminder email.");
  }
};

  return (
    <main className="page-background">
      {showToast && (
  <div
    style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "green",
      color: "white",
      padding: "12px 18px",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: "bold",
      zIndex: 9999,
    }}
  >
    Reminder has been sent to email
  </div>
)}

      <h1 className="page-title">Events</h1>
 <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <Link 
        href="/calender" 
        className="details-button" 
        style={{ display: "inline-block" }}
        >
          Calendar View
        </Link>
      </div>
      <div className="events-grid">
        {events.map((event, index) => {
          const isReminded = reminders.includes(index);

          return (
            <div key={index} className="event-card">
              <div className="event-badge">{event.category}</div>

              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>

              <div className="event-details">
                <p className="event-meta">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="event-meta">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="event-meta">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>

              <div className="event-actions">
                <button
                  className={isReminded ? "remind-button active" : "remind-button"}
                  onClick={() => toggleReminder(index)}
                >
                  {isReminded ? "Reminder Set ✓" : "Remind Me🔔"}
                </button>

                <a href={event.link} className="details-button">
                  Details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}