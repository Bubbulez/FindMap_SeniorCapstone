"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles/home.css";
import Link from "next/link";

<Link href="/" className="home-button">
  Home
</Link>

export default function Home() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [contactValue, setContactValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    setIsLoggedIn(!!currentUser);
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
      {/* TOP RIGHT (ICON + AUTH LINKS) */}
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

      {/* HERO SECTION */}
      <section className="findmap-hero">
        <h1 className="findmap-title">FindMap</h1>

        <p className="findmap-subtitle">
          FIND EVENTS. FIND BUILDINGS. FIND YOUR WAY.
        </p>

        {/* TABS */}
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

        {/* IMAGE */}
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

        {/* MAIN BUTTONS */}
        <div className="button-group">
          <div className="findmap-main-btn">
            Explore Campus Events
          </div>
        </div> 
      </section>
    </main>
  );
}