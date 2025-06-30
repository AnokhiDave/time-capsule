import React from 'react';

const Archive = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>📥 Archived Capsules success</h2>
      <p style={styles.subtext}>Capsules sealed for future delivery will appear here.</p>
    </div>
  );
};

const styles = {
  page: {
    color: '#fff',
    minHeight: '100vh',
    background: '#0a0a2a',
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

export default Archive;
