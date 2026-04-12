"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/home.css";

type UserData = {
  fullName: string;
  email: string;
  username: string;
  password?: string;
  phoneNumber: string;
  membershipPlan: string;
  favoriteGenre: string;
  role?: "customer" | "organizer";
};

export default function AccountPage() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
    username: "",
    phoneNumber: "",
    membershipPlan: "Free",
    favoriteGenre: "",
    role: "customer",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedCurrentUser = localStorage.getItem("currentUser");

    if (savedCurrentUser) {
      setUserData(JSON.parse(savedCurrentUser));
    } else {
      router.push("/signin");
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(userData));

    const savedUsers = localStorage.getItem("users");
    const users: UserData[] = savedUsers ? JSON.parse(savedUsers) : [];

    const updatedUsers = users.map((user) =>
      user.email === userData.email ? { ...user, ...userData } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Account settings saved successfully.");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/signin");
  };

  return (
    <main className="page-background">
      <h1 className="page-title">My Account</h1>

      <div className="event-card account-card">
        <p className="account-subtitle">
          Manage your profile information below.
        </p>

        <div className="account-form">
          <div className="account-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="membershipPlan">Membership Plan</label>
            <select
              id="membershipPlan"
              name="membershipPlan"
              value={userData.membershipPlan}
              onChange={handleChange}
            >
              <option value="Free">Free</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          <div className="account-field">
            <label htmlFor="favoriteGenre">Favorite Genre</label>
            <input
              id="favoriteGenre"
              type="text"
              name="favoriteGenre"
              value={userData.favoriteGenre}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="role">Account Type</label>
            <select
              id="role"
              name="role"
              value={userData.role || "customer"}
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>

          <div className="account-button-row">
            <button className="account-save-btn" onClick={handleSave}>
              Save Changes
            </button>

            <button className="account-logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </div>

          {message && <p className="account-message">{message}</p>}
        </div>
      </div>
    </main>
  );
}