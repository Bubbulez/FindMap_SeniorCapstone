'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/account.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email.');
      return;
    }

    setMessage('If an account with that email exists, a reset link would be sent.');
    setEmail('');
  };

  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Forgot Password</h1>
      <p className={styles.accountSubtitle}>
        Enter your email below and we will help you recover your account.
      </p>

      <div className={styles.accountCard}>
        <form className={styles.accountForm} onSubmit={handleSubmit}>
          <input
            className={styles.accountInput}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className={styles.accountButton} type="submit">
            Submit
          </button>
        </form>

        {message && <p className={styles.accountMessage}>{message}</p>}

        <Link href="/account" className={styles.backLink}>
          Back to Account
        </Link>
      </div>
    </div>
  );
}