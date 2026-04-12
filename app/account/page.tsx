"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/home.css";

type UserData = {
  fullName: string;
  email: string;
  username: string;
  password?: string;
};

export default function AccountPage() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");

    if (savedCurrentUser) {
      setUserData(JSON.parse(savedCurrentUser));
    } else {
      router.push("/signin");
    }
  }, [router]);

  const handleDeleteAccount = () => {
    const savedUsers = localStorage.getItem("users");
    const users: UserData[] = savedUsers ? JSON.parse(savedUsers) : [];

    const updatedUsers = users.filter((user) => user.email !== userData.email);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.removeItem("currentUser");
    router.push("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/signin");
  };

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <p className="dashboard-small-title">My Account</p>
        <h1 className="dashboard-main-title">
          Welcome back, {userData.username || "User"}!
        </h1>
        <p className="dashboard-subtitle">
          Manage your account information and account actions here.
        </p>
      </div>

      <section className="dashboard-grid single-column-grid">
        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Profile Information</h2>

          <div className="dashboard-info-list">
            <p>
              <strong>Full Name:</strong> {userData.fullName || "Not added"}
            </p>
            <p>
              <strong>Email:</strong> {userData.email || "Not added"}
            </p>
            <p>
              <strong>Username:</strong> {userData.username || "Not added"}
            </p>
          </div>

          <button
            className="dashboard-button"
            onClick={() => router.push("/settings")}
          >
            Edit Profile
          </button>
        </div>

        <div className="dashboard-card">
          <h2 className="dashboard-card-title">Account Actions</h2>

          <div className="dashboard-info-list">
            <p>Update your information or manage your account access here.</p>
          </div>

          <div className="dashboard-action-group">
            <button
              className="dashboard-button"
              onClick={() => router.push("/settings")}
            >
              Edit Account
            </button>

            <button
              className="dashboard-outline-button"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>

            <button className="dashboard-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}