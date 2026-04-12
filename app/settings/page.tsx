"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/home.css";

type UserSettings = {
  emailNotifications: boolean;
  smsNotifications: boolean;
  darkMode: boolean;
  language: string;
};

type CurrentUser = {
  fullName: string;
  email: string;
  username: string;
  password?: string;
  phoneNumber: string;
  membershipPlan: string;
  favoriteGenre: string;
  role?: "customer" | "organizer";
  settings?: UserSettings;
};

export default function SettingsPage() {
  const router = useRouter();

  const [settingsData, setSettingsData] = useState<UserSettings>({
    emailNotifications: true,
    smsNotifications: false,
    darkMode: true,
    language: "English",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");

    if (!savedCurrentUser) {
      router.push("/signin");
      return;
    }

    const currentUser: CurrentUser = JSON.parse(savedCurrentUser);

    if (currentUser.settings) {
      setSettingsData(currentUser.settings);
    }
  }, [router]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setSettingsData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSettingsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const savedCurrentUser = localStorage.getItem("currentUser");
    if (!savedCurrentUser) return;

    const currentUser: CurrentUser = JSON.parse(savedCurrentUser);
    const updatedCurrentUser: CurrentUser = {
      ...currentUser,
      settings: settingsData,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    const savedUsers = localStorage.getItem("users");
    const users: CurrentUser[] = savedUsers ? JSON.parse(savedUsers) : [];

    const updatedUsers = users.map((user) =>
      user.email === updatedCurrentUser.email
        ? { ...user, settings: settingsData }
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Settings saved successfully.");
  };

  return (
    <main className="page-background">
      <h1 className="page-title">Settings</h1>

      <div className="event-card account-card">
        <p className="account-subtitle">
          Manage your preferences below.
        </p>

        <div className="settings-list">
          <label className="settings-item">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settingsData.emailNotifications}
              onChange={handleCheckboxChange}
            />
            <span>Email Notifications</span>
          </label>

          <label className="settings-item">
            <input
              type="checkbox"
              name="smsNotifications"
              checked={settingsData.smsNotifications}
              onChange={handleCheckboxChange}
            />
            <span>SMS Notifications</span>
          </label>

          <label className="settings-item">
            <input
              type="checkbox"
              name="darkMode"
              checked={settingsData.darkMode}
              onChange={handleCheckboxChange}
            />
            <span>Dark Mode</span>
          </label>

          <div className="account-field">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              name="language"
              value={settingsData.language}
              onChange={handleSelectChange}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>

          <button className="account-save-btn" onClick={handleSave}>
            Save Settings
          </button>

          {message && <p className="account-message">{message}</p>}
        </div>
      </div>
    </main>
  );
}