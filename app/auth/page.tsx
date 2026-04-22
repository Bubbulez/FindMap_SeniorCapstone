"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    setIsLoggedIn(Boolean(currentUser));
  }, []);

  return (
    <main className="findmap-home">
      <div className="findmap-topbar">
        <button
          type="button"
          className="findmap-account-icon"
          onClick={() => router.push("/account")}
          aria-label="Account"
        >
          👤
        </button>

        <button
          type="button"
          className="findmap-auth-link"
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>

      <section className="findmap-hero">
        <h1 className="findmap-title">FindMap</h1>

        <p className="findmap-subtitle">
          {isLoggedIn
            ? "YOU ARE ALREADY LOGGED IN. MANAGE YOUR ACCOUNT BELOW."
            : "SIGN IN, SIGN UP, OR RECOVER YOUR ACCOUNT."}
        </p>

        <div className="findmap-tabs">
          {!isLoggedIn ? (
            <>
              <button
                type="button"
                className="findmap-tab"
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>

              <button
                type="button"
                className="findmap-tab"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </button>

              <button
                type="button"
                className="findmap-tab"
                onClick={() => router.push("/auth/forgot-password")}
              >
                Forgot Password
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="findmap-tab"
                onClick={() => router.push("/account")}
              >
                My Account
              </button>

              <button
                type="button"
                className="findmap-tab"
                onClick={() => router.push("/account/edit")}
              >
                Edit Profile
              </button>

              <button
                type="button"
                className="findmap-tab"
                onClick={() => router.push("/account/settings")}
              >
                Settings
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          className="findmap-main-btn"
          onClick={() =>
            router.push(isLoggedIn ? "/account" : "/signin")
          }
        >
          {isLoggedIn ? "Go To My Account" : "Continue To Sign In"}
        </button>
      </section>
    </main>
  );
}