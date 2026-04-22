'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/account.module.css';

export default function SettingsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setMessage('Account settings updated successfully.');
  };

  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Account Settings</h1>
      <p className={styles.accountSubtitle}>
        Update your email and password here.
      </p>

      <div className={styles.accountCard}>
        <form className={styles.accountForm} onSubmit={handleSave}>
          <input
            className={styles.accountInput}
            type="email"
            placeholder="New Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.accountInput}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className={styles.accountInput}
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className={styles.accountButton} type="submit">
            Save Account
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