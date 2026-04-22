"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/account.module.css";

export default function EditPage() {
  const [displayName, setDisplayName] = useState("");
  const [major, setMajor] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [links, setLinks] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Profile updated successfully.");
  };

  return (
    <div className={styles.accountPage}>
      <h1 className={styles.accountTitle}>Edit Profile</h1>
      <p className={styles.accountSubtitle}>
        Update your personal profile information here.
      </p>

      <div className={styles.profileCardLarge}>
        <form className={styles.profileFormLarge} onSubmit={handleSave}>
          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Display Name</label>
            <input
              className={styles.accountInput}
              type="text"
              placeholder="Enter your display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Major</label>
            <input
              className={styles.accountInput}
              type="text"
              placeholder="Enter your major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Bio</label>
            <textarea
              className={styles.accountTextarea}
              placeholder="Tell us about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Location</label>
            <input
              className={styles.accountInput}
              type="text"
              placeholder="Enter your city or country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Contact Information</label>
            <input
              className={styles.accountInput}
              type="text"
              placeholder="Enter your email or phone number"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Links</label>
            <input
              className={styles.accountInput}
              type="text"
              placeholder="Enter website or social media links"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            />
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Profile Picture</label>
            <div className={styles.uploadField}>
              <input
                className={styles.uploadInput}
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setProfilePicture(e.target.files?.[0] || null)
                }
              />
              <span className={styles.uploadHint}>
                {profilePicture
                  ? profilePicture.name
                  : "Upload profile picture"}
              </span>
            </div>
          </div>

          <div className={styles.profileFieldRow}>
            <label className={styles.profileLabel}>Background Image</label>
            <div className={styles.uploadField}>
              <input
                className={styles.uploadInput}
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setBackgroundImage(e.target.files?.[0] || null)
                }
              />
              <span className={styles.uploadHint}>
                {backgroundImage
                  ? backgroundImage.name
                  : "Upload background image"}
              </span>
            </div>
          </div>

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