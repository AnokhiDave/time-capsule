import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const hideNavbarOnRoutes = ['/login', '/register'];
  if (hideNavbarOnRoutes.includes(location.pathname)) return null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 0'
  };

  const logoutButtonStyle = {
    background: '#555',
    color: '#fff',
    border: 'none',
    padding: '0.5rem',
    marginTop: '0.5rem',
    cursor: 'pointer'
  };

  return (
    <nav style={{ backgroundColor: '#1e1e1e', padding: '1rem', color: '#fff', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🕒 Time Capsule</h2>
        {token && (
          <div style={{ position: 'relative' }}>
            <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer' }}>
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </div>
            {menuOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50px',
                  backgroundColor: '#333',
                  padding: '1rem',
                  borderRadius: '8px',
                  zIndex: 10,
                  minWidth: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} style={linkStyle}>Dashboard</Link>
                <Link to="/create" onClick={() => setMenuOpen(false)} style={linkStyle}>Create</Link>
                <Link to="/my-capsules" onClick={() => setMenuOpen(false)} style={linkStyle}>My Capsules</Link>
                <Link to="/timeline" onClick={() => setMenuOpen(false)} style={linkStyle}>Timeline</Link>
                <Link to="/explore" onClick={() => setMenuOpen(false)} style={linkStyle}>Explore</Link>
                <Link to="/archive" onClick={() => setMenuOpen(false)} style={linkStyle}>Archive</Link>
                <Link to="/settings" onClick={() => setMenuOpen(false)} style={linkStyle}>Settings</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} style={linkStyle}>About</Link>
                <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
