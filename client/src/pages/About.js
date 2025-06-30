import React from 'react';

const About = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🧭 About This Project</h2>
      <p style={styles.subtext}>Time Capsule lets you store, revisit, and reflect on your moments in time.</p>
    </div>
  );
};

const styles = {
  page: {
    color: '#fff',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #141e30, #243b55)',
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

export default About;
