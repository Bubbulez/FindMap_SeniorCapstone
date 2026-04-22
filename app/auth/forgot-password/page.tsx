'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/account.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [recoveryType, setRecoveryType] = useState<'password' | 'username'>('password');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email.');
      return;
    }

    if (recoveryType === 'password') {
      setMessage('If an account with that email exists, a password reset link would be sent.');
    } else {
      setMessage('If an account with that email exists, your username recovery information would be sent.');
    }

    setEmail('');
  };

  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Forgot Password</h1>
      <p className={styles.accountSubtitle}>
        Recover your password or username below.
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
            {recoveryType === 'password' ? 'Reset Password' : 'Recover Username'}
          </button>
        </form>

        <button
          type="button"
          className={styles.secondaryLink}
          onClick={() =>
            setRecoveryType(recoveryType === 'password' ? 'username' : 'password')
          }
        >
          {recoveryType === 'password' ? 'or forgot username?' : 'or forgot password?'}
        </button>

        {message && <p className={styles.accountMessage}>{message}</p>}

        <Link href="/account" className={styles.backLink}>
          Back to Account
        </Link>
      </div>
    </div>
  );
}