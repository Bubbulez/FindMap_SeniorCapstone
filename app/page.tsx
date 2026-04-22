"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles/home.css";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    setIsLoggedIn(!!currentUser);
  }, []);

  const handleAccountClick = () => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      router.push("/account");
    }
  };

  return (
    <main className="findmap-home">
      <div className="findmap-topbar">
        <Link href="/" className="home-button">
          Home
        </Link>

        <div className="account-wrapper">
          <button
            type="button"
            className="findmap-account-icon"
            onClick={handleAccountClick}
          >
            👤
          </button>

          {!isLoggedIn && (
            <div className="findmap-auth-links">
              <span onClick={() => router.push("/signup")}>Sign Up</span>
              <span className="divider"> / </span>
              <span onClick={() => router.push("/signin")}>Log In</span>
            </div>
          )}
        </div>
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
            Events📍
          </button>

          <button
            type="button"
            className="findmap-tab"
            onClick={() => router.push("/buildings")}
          >
            Buildings🏢
          </button>

          <button
            type="button"
            className="findmap-tab"
            onClick={() => router.push("/dining")}
          >
            Dining🍽️
          </button>

          <button
            type="button"
            className="findmap-tab"
            onClick={() => router.push("/clubs")}
          >
            Clubs🎭
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
            type="button"
            className="findmap-main-btn"
            onClick={() => router.push("/events")}
          >
            Explore Campus Events
          </button>
        </div>
      </section>
    </main>
  );
}