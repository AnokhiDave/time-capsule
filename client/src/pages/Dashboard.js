// ✅ File: client/src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get('/capsules', {
          headers: { Authorization: token },
        });
        setCapsules(res.data);
      } catch (err) {
        console.error('Failed to load capsules:', err);
      }
    };

    fetchCapsules();
  }, []);

  return (
    <div className="dashboard">
      <h2>Your Capsules</h2>
      {capsules.length === 0 ? (
        <p>No capsules yet. <Link to="/create">Create one</Link></p>
      ) : (
        <ul>
          {capsules.map((cap) => (
            <li key={cap._id}>
              <Link to={`/capsules/${cap._id}`}>{cap.title}</Link>
              <p>Unlocks: {new Date(cap.unlockDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
