import React from 'react';

const Settings = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>⚙️ Settings</h2>
      <p style={styles.subtext}>Manage your account, themes, and privacy settings here.</p>
    </div>
  );
};

const styles = {
  page: {
    color: '#fff',
    minHeight: '100vh',
    background: '#111122',
    padding: '2rem',
    fontFamily: 'monospace',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtext: {
    opacity: 0.8,
  },
};

export default Settings;
