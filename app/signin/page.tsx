"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/home.css";

type User = {
  fullName: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  membershipPlan: string;
  favoriteGenre: string;
  role: "customer" | "organizer";
};

export default function SigninPage() {
  const router = useRouter();

  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignin = () => {
    if (!loginValue || !password) {
      setMessage("Please enter your username/email and password.");
      return;
    }

    const savedUsers = localStorage.getItem("users");
    const users: User[] = savedUsers ? JSON.parse(savedUsers) : [];

    const foundUser = users.find(
      (user) =>
        (user.email === loginValue || user.username === loginValue) &&
        user.password === password
    );

    if (!foundUser) {
      setMessage("Invalid login credentials.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setMessage("Login successful!");

    setTimeout(() => {
      router.push("/account");
    }, 800);
  };

  return (
    <main className="page-background">
      <h1 className="page-title">Sign In</h1>

      <div className="event-card account-card">
        <p className="account-subtitle">Sign in to your FindMap account.</p>

        <div className="account-form">
          <div className="account-field">
            <label htmlFor="loginValue">Email or Username</label>
            <input
              id="loginValue"
              type="text"
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
            />
          </div>

          <div className="account-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="account-save-btn" onClick={handleSignin}>
            Sign In
          </button>

          {message && <p className="account-message">{message}</p>}
        </div>
      </div>
    </main>
  );
}