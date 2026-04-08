"use client";

import { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newUser: User = { name, email, password };

    const savedUsers = localStorage.getItem("users");
    const users: User[] = savedUsers ? JSON.parse(savedUsers) : [];

    const exists = users.some((user) => user.email === email);

    if (exists) {
      setMessage("User already exists.");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Account created successfully!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <main>
      <h1>Sign Up</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Create Account</button>

      {message && <p>{message}</p>}
    </main>
  );
}