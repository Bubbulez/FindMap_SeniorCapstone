'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/account.module.css';

export default function EditPage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [major, setMajor] = useState('');
  const [favoritePlace, setFavoritePlace] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Profile updated successfully.');
  };

  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Edit Profile</h1>
      <p className={styles.accountSubtitle}>
        Update your personal profile information here.
      </p>

      <div className={styles.accountCard}>
        <form className={styles.accountForm} onSubmit={handleSave}>
          <input
            className={styles.accountInput}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className={styles.accountInput}
            type="text"
            placeholder="Major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />

          <input
            className={styles.accountInput}
            type="text"
            placeholder="Favorite Spot on Campus"
            value={favoritePlace}
            onChange={(e) => setFavoritePlace(e.target.value)}
          />

          <textarea
            className={styles.accountTextarea}
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <button className={styles.accountButton} type="submit">
            Save Profile
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