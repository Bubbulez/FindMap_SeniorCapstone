'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/account.module.css';

export default function SettingsPage() {
  const [displayLanguage, setDisplayLanguage] = useState('English');
  const [timeZone, setTimeZone] = useState('Eastern Time');
  const [regionalFormat, setRegionalFormat] = useState('United States');
  const [language, setLanguage] = useState('English');
  const [privacy, setPrivacy] = useState('Standard');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Account settings updated successfully.');
  };

  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Account Settings</h1>
      <p className={styles.accountSubtitle}>
        Adjust your app preferences and privacy settings here.
      </p>

      <div className={styles.accountCard}>
        <form className={styles.accountForm} onSubmit={handleSave}>
          <select
            className={styles.accountInput}
            value={displayLanguage}
            onChange={(e) => setDisplayLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <select
            className={styles.accountInput}
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          >
            <option>Eastern Time</option>
            <option>Central Time</option>
            <option>Mountain Time</option>
            <option>Pacific Time</option>
          </select>

          <select
            className={styles.accountInput}
            value={regionalFormat}
            onChange={(e) => setRegionalFormat(e.target.value)}
          >
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>

          <select
            className={styles.accountInput}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <select
            className={styles.accountInput}
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
          >
            <option>Standard</option>
            <option>Private</option>
            <option>Friends Only</option>
          </select>

          <label className={styles.settingRow}>
            <span>Enable Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </label>

          <label className={styles.settingRow}>
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </label>

          <button className={styles.accountButton} type="submit">
            Save Settings
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