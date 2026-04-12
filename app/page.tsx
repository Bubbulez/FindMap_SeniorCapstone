"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./styles/home.css";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Events");

  const tabs = ["Events", "Buildings", "Dining", "Clubs", "SignUp", "SignIn", "Account", "Settings"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    const currentUser = localStorage.getItem("currentUser");

    if (tab === "Account") {
      if (currentUser) {
        router.push("/account");
      } else {
        router.push("/signin");
      }
      return;
    }

    if (tab === "Settings") {
      if (currentUser) {
        router.push("/settings");
      } else {
        router.push("/signin");
      }
      return;
    }

    if (tab === "SignUp") {
      router.push("/signup");
      return;
    }

    if (tab === "SignIn") {
      router.push("/signin");
      return;
    }

    router.push(`/${tab.toLowerCase()}`);
  };

  return (
    <main className="home-page">
      <h1 className="home-title">FindMap</h1>

      <p className="home-subtitle">
        FIND EVENTS. FIND BUILDINGS. FIND YOUR WAY.
      </p>

      <div className="tabs-row">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`tab-button ${
              activeTab === tab ? "active-tab" : ""
            } preview-${tab.toLowerCase()}`}
          >
            {tab === "SignUp" ? "Sign Up" : tab === "SignIn" ? "Sign In" : tab}
          </button>
        ))}
      </div>

      <div className="cougar-wrapper">
        <Image
          src="/images/cougar.png"
          alt="Kean Cougar"
          width={220}
          height={220}
          className="cougar-image"
        />
      </div>

      <button
        onClick={() => router.push("/events")}
        className="main-button"
      >
        Explore Campus Events
      </button>
    </main>
  );
}