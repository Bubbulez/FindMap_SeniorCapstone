"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Events");
  const tabs = ["Events", "Buildings", "Dining", "Clubs", "Account", "Settings"];

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
            onClick={() => {
              setActiveTab(tab);
              router.push(`/${tab.toLowerCase()}`);
            }}
            className={`tab-button ${
              activeTab === tab ? "active-tab" : ""
            } preview-${tab.toLowerCase()}`}
          >
            {tab}
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