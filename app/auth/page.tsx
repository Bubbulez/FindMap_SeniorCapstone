"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from '../styles/account.module.css';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    setIsLoggedIn(Boolean(currentUser));
  }, []);

  const handleAccountClick = () => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      router.push("/account");
    } else {
      router.push("/signin");
    }
  };

  return (
    <main className="findmap-home">
      <div className="findmap-topbar">
        <button
          type="button"
          className="findmap-account-icon"
          onClick={handleAccountClick}
          aria-label="Account"
        >
          👤
        </button>

        {!isLoggedIn ? (
          <button
            type="button"
            className="findmap-auth-link"
            onClick={() => router.push("/auth")}
          >
            Sign Up / Log In
          </button>
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
            type="button"
            className="findmap-tab"
            onClick={() => router.push("/events")}
          >
            Events
          </button>

          <button
            type="button"
            className="findmap-tab"
            onClick={() => router.push("/buildings")}
          >
            Buildings
          </button>

          <button
            type="button"
            className="findmap-tab"
            onClick={() => router.push("/dining")}
          >
            Dining
          </button>

          <button
            type="button"
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

        <button
          type="button"
          className="findmap-main-btn"
          onClick={() => router.push("/events")}
        >
          Explore Campus Events
        </button>
      </section>
    </main>
  );
}