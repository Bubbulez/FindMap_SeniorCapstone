'use client';

import Link from 'next/link';
import styles from '../styles/account.module.css';

export default function AccountPage() {
  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Account</h1>
      <p className={styles.accountSubtitle}>
        Manage your profile, account settings, and password recovery.
      </p>

      <div className={styles.accountCard}>
        <div className={styles.accountLinks}>
          <Link href="/account/edit">
            <button className={styles.accountLinkButton}>Edit Profile</button>
          </Link>

          <Link href="/account/settings">
            <button className={styles.accountLinkButton}>Account Settings</button>
          </Link>

          <Link href="/auth/forgot-password">
            <button className={styles.accountLinkButton}>Forgot Password</button>
          </Link>
        </div>
      </div>
    </div>
  );
}