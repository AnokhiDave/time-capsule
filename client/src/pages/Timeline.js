const Timeline = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>📜 Timeline</h2>
      <p style={styles.subtext}>Scroll through your time capsules chronologically.</p>
    </div>
  );
};

const styles = {
  page: {
    color: '#fff',
    minHeight: '100vh',
    background: 'radial-gradient(circle, #151538, #090921)',
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

export default Timeline;
