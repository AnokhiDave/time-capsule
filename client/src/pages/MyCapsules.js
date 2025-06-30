import React from 'react';

const MyCapsules = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>📚 My Time Capsules</h2>
      <p style={styles.subtext}>Here are all the capsules you’ve created through time!</p>
    </div>
  );
};

const styles = {
  page: {
    color: '#fff',
    minHeight: '100vh',
    background: 'radial-gradient(circle, #1f1f47, #0c0c1e)',
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

export default MyCapsules;