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

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<User>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    membershipPlan: "Free",
    favoriteGenre: "",
    role: "customer",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    const {
      fullName,
      email,
      username,
      password,
      phoneNumber,
      membershipPlan,
      favoriteGenre,
      role,
    } = formData;

    if (
      !fullName ||
      !email ||
      !username ||
      !password ||
      !phoneNumber ||
      !membershipPlan ||
      !favoriteGenre ||
      !role
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    const savedUsers = localStorage.getItem("users");
    const users: User[] = savedUsers ? JSON.parse(savedUsers) : [];

    const emailExists = users.some((user) => user.email === email);
    const usernameExists = users.some((user) => user.username === username);

    if (emailExists || usernameExists) {
      setMessage("An account with that email or username already exists.");
      return;
    }

    const newUser: User = { ...formData };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setMessage("Account created successfully!");

    setTimeout(() => {
      router.push("/account");
    }, 800);
  };

  return (
    <main className="page-background">
      <h1 className="page-title">Sign Up</h1>

      <div className="event-card account-card">
        <p className="account-subtitle">
          Create your FindMap account below.
        </p>

        <div className="account-form">
          <div className="account-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="membershipPlan">Membership Plan</label>
            <select
              id="membershipPlan"
              name="membershipPlan"
              value={formData.membershipPlan}
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
              name="favoriteGenre"
              type="text"
              value={formData.favoriteGenre}
              onChange={handleChange}
            />
          </div>

          <div className="account-field">
            <label htmlFor="role">Account Type</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>

          <button className="account-save-btn" onClick={handleSignup}>
            Create Account
          </button>

          {message && <p className="account-message">{message}</p>}
        </div>
      </div>
    </main>
  );
}