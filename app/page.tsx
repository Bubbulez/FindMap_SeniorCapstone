"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles/home.css";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [contactValue, setContactValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    setIsLoggedIn(!!currentUser);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAccountClick = () => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      router.push("/account");
    } else {
      router.push("/signin");
    }
  };

  const handleNotification = () => {
    setShowReminderModal(true);
  };

  const handleSendReminder = async () => {
    if (!contactValue.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/send-reminder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: contactValue,
          message: "Your FindMap reminder has been set successfully!",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send reminder.");
      }

      setShowReminderModal(false);
      setContactValue("");
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("There was a problem sending the email reminder.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="findmap-home">
      <Link href="/" className="logo-home" aria-label="Go to home page">
        <span className="logo-home-letter">K</span>
      </Link>

      <div className="findmap-topbar">
        <button
          type="button"
          className="findmap-account-icon"
          onClick={handleAccountClick}
        >
          👤
        </button>

        {!isLoggedIn ? (
          <div className="findmap-auth-links">
            <span onClick={() => router.push("/signup")}>Sign Up</span>
            <span className="divider"> / </span>
            <span onClick={() => router.push("/signin")}>Log In</span>
          </div>
        ) : (
          <button
            type="button"
            className="findmap-auth-btn"
            onClick={() => router.push("/account")}
          >
            My Account
          </button>
        )}
      </div>

      <section className="findmap-hero">
        <h1 className="findmap-title">FindMap</h1>

        <p className="findmap-subtitle">
          FIND EVENTS. FIND BUILDINGS. FIND YOUR WAY.
        </p>

        <div className="findmap-tabs">
          <button
            className="findmap-tab"
            onClick={() => router.push("/events")}
          >
            Events
          </button>

          <button
            className="findmap-tab"
            onClick={() => router.push("/buildings")}
          >
            Buildings
          </button>

          <button
            className="findmap-tab"
            onClick={() => router.push("/dining")}
          >
            Dining
          </button>

          <button
            className="findmap-tab"
            onClick={() => router.push("/clubs")}
          >
            Clubs
          </button>
        </div>

        <div className="findmap-image-wrap">
          <Image
            src="/images/cougar.png"
            alt="FindMap Cougar"
            width={260}
            height={260}
            className="findmap-image"
            priority
          />
        </div>

        <div className="button-group">
          <button
            className="findmap-main-btn"
            onClick={() => router.push("/events")}
          >
            Explore Campus Events
          </button>

          <button
            className="findmap-main-btn"
            onClick={handleNotification}
          >
            Set Reminder 🔔
          </button>
        </div>

        {showNotification && (
          <div className="notification-box">
            Reminder email sent successfully!
          </div>
        )}

        {showReminderModal && (
          <div className="modal-overlay">
            <div className="reminder-modal">
              <h2>Set a Reminder</h2>

              <label className="modal-label">Enter your email:</label>

              <input
                type="email"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                placeholder="example@gmail.com"
                className="modal-input"
              />

              <div className="modal-buttons">
                <button
                  onClick={handleSendReminder}
                  className="findmap-main-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reminder"}
                </button>

                <button
                  onClick={() => {
                    setShowReminderModal(false);
                    setContactValue("");
                  }}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="findmap-clock-box">
        <span className="findmap-clock-label">Current Time</span>
        <span className="findmap-clock-time">{currentTime}</span>
      </div>
    </main>
  );
}