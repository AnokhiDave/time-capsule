import React from 'react';

const Explore = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🌌 Explore Public Capsules</h2>
      <p style={styles.subtext}>Dive into memories shared across timelines.</p>
    </div>
  );
};

const styles = {
  page: {
    color: '#fff',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #1e1e60, #151538)',
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

export default Explore;
