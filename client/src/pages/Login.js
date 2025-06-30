// ✅ File: client/src/pages/Login.js (Time Travel Theme with Moving Stars)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed. Try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}></div>
      <div style={styles.stars2}></div>
      <div style={styles.stars3}></div>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>⏳ Step Into the Capsule</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Enter Timeline</button>
        </form>
        <p style={styles.text}>
          No account yet?{' '}
          <span
            style={styles.link}
            onClick={() => navigate('/register')}
          >
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    background: 'radial-gradient(ellipse at center, #0f0c29, #302b63, #000000)',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: '#fff',
    fontFamily: 'monospace',
  },
  stars: {
    background: 'transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat top center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    animation: 'moveStars 200s linear infinite'
  },
  stars2: {
    background: 'transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat top center',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    animation: 'moveStars 300s linear infinite'
  },
  stars3: {
    background: 'transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat top center',
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    animation: 'moveStars 500s linear infinite'
  },
  loginBox: {
    zIndex: 10,
    background: 'rgba(12, 12, 25, 0.85)',
    padding: '2rem',
    borderRadius: '15px',
    border: '1px solid #5f5fdf',
    boxShadow: '0 0 20px #5f5fdf',
    width: '320px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#1c1c3c',
    color: '#fff',
  },
  button: {
    padding: '10px',
    backgroundColor: '#5f5fdf',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
  },
  text: {
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  link: {
    color: '#5f5fdf',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Login;
